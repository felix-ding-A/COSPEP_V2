import nodemailer from 'nodemailer';

// 创建邮件传输器配置函数，确保环境变量在运行时加载
function createTransporter() {
    // 验证环境变量
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
        console.error('❌ Missing SMTP environment variables');
        throw new Error('SMTP configuration incomplete');
    }

    const port = parseInt(process.env.SMTP_PORT || '587');
    const secure = port === 465;

    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });
}

export interface InquiryEmailData {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    type: string;
    productName?: string;
    quantity?: string;
    targetPrice?: string;
    message?: string;
    locale?: string;
}

export async function sendInquiryEmail(data: InquiryEmailData) {
    const {
        name,
        email,
        company,
        phone,
        type,
        productName,
        quantity,
        targetPrice,
        message,
        locale = 'en' // Default to English
    } = data;

    const isZh = locale === 'zh';

    // Labels and texts based on locale
    const texts = {
        subject: isZh ? `🔔 新咨询：${type} - ${name}` : `🔔 New Inquiry: ${type} - ${name}`,
        headerTitle: isZh ? '🔔 新的客户咨询' : '🔔 New Customer Inquiry',
        headerSubtitle: isZh ? '来自 COSPEP 网站' : 'From COSPEP Website',
        labelType: isZh ? '📋 咨询类型：' : '📋 Inquiry Type:',
        labelName: isZh ? '👤 姓名：' : '👤 Name:',
        labelEmail: isZh ? '📧 邮箱：' : '📧 Email:',
        labelCompany: isZh ? '🏢 公司：' : '🏢 Company:',
        labelPhone: isZh ? '📱 电话：' : '📱 Phone:',
        labelProduct: isZh ? '🧪 产品：' : '🧪 Product:',
        labelQuantity: isZh ? '📦 数量：' : '📦 Quantity:',
        labelTargetPrice: isZh ? '💰 目标价格：' : '💰 Target Price:',
        labelMessage: isZh ? '💬 留言：' : '💬 Message:',
        footerText: isZh ? '此邮件由 COSPEP 网站自动发送' : 'Sent automatically from COSPEP website',
        timeLocale: isZh ? 'zh-CN' : 'en-US'
    };

    // 构建邮件内容
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #0F1612 0%, #1a2520 100%); color: #B8FF00; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #555; }
                .value { color: #333; margin-top: 5px; }
                .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #B8FF00; text-align: center; color: #666; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2 style="margin: 0;">${texts.headerTitle}</h2>
                    <p style="margin: 5px 0 0 0; color: #fff;">${texts.headerSubtitle}</p>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">${texts.labelType}</div>
                        <div class="value">${type}</div>
                    </div>
                    
                    <div class="field">
                        <div class="label">${texts.labelName}</div>
                        <div class="value">${name}</div>
                    </div>
                    
                    <div class="field">
                        <div class="label">${texts.labelEmail}</div>
                        <div class="value"><a href="mailto:${email}">${email}</a></div>
                    </div>
                    
                    ${company ? `
                    <div class="field">
                        <div class="label">${texts.labelCompany}</div>
                        <div class="value">${company}</div>
                    </div>
                    ` : ''}
                    
                    ${phone ? `
                    <div class="field">
                        <div class="label">${texts.labelPhone}</div>
                        <div class="value">${phone}</div>
                    </div>
                    ` : ''}
                    
                    ${productName ? `
                    <div class="field">
                        <div class="label">${texts.labelProduct}</div>
                        <div class="value">${productName}</div>
                    </div>
                    ` : ''}
                    
                    ${quantity ? `
                    <div class="field">
                        <div class="label">${texts.labelQuantity}</div>
                        <div class="value">${quantity}</div>
                    </div>
                    ` : ''}
                    
                    ${targetPrice ? `
                    <div class="field">
                        <div class="label">${texts.labelTargetPrice}</div>
                        <div class="value">${targetPrice}</div>
                    </div>
                    ` : ''}
                    
                    ${message ? `
                    <div class="field">
                        <div class="label">${texts.labelMessage}</div>
                        <div class="value" style="white-space: pre-wrap;">${message}</div>
                    </div>
                    ` : ''}
                    
                    <div class="footer">
                        <p>${texts.footerText}</p>
                        <p>Time: ${new Date().toLocaleString(texts.timeLocale, { timeZone: 'Asia/Shanghai' })}</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;

    try {
        // 在发送邮件时创建传输器，确保环境变量已加载
        const transporter = createTransporter();

        // 发送邮件
        const mailOptions = {
            from: `"COSPEP Website" <${process.env.SMTP_FROM}>`,
            to: process.env.SMTP_TO,
            subject: texts.subject,
            html: htmlContent,
            replyTo: email, // 点击回复时直接回复给客户
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully:', info.messageId);

        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('❌ Failed to send email:', error);

        // 提供更详细的错误信息
        if (error instanceof Error) {
            console.error('Error message:', error.message);
        }

        return { success: false, error: error instanceof Error ? error.message : String(error) };
    }
}
