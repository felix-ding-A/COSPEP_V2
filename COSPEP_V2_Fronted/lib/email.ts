import nodemailer from 'nodemailer';

// 创建邮件传输器
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

// 验证配置
transporter.verify(function (error, success) {
    if (error) {
        console.error('SMTP配置错误:', error);
    } else {
        console.log('SMTP服务器已就绪');
    }
});

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
        message
    } = data;

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
                    <h2 style="margin: 0;">🔔 新的客户咨询</h2>
                    <p style="margin: 5px 0 0 0; color: #fff;">来自 COSPEP 网站</p>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">📋 咨询类型：</div>
                        <div class="value">${type}</div>
                    </div>
                    
                    <div class="field">
                        <div class="label">👤 姓名：</div>
                        <div class="value">${name}</div>
                    </div>
                    
                    <div class="field">
                        <div class="label">📧 邮箱：</div>
                        <div class="value"><a href="mailto:${email}">${email}</a></div>
                    </div>
                    
                    ${company ? `
                    <div class="field">
                        <div class="label">🏢 公司：</div>
                        <div class="value">${company}</div>
                    </div>
                    ` : ''}
                    
                    ${phone ? `
                    <div class="field">
                        <div class="label">📱 电话：</div>
                        <div class="value">${phone}</div>
                    </div>
                    ` : ''}
                    
                    ${productName ? `
                    <div class="field">
                        <div class="label">🧪 产品：</div>
                        <div class="value">${productName}</div>
                    </div>
                    ` : ''}
                    
                    ${quantity ? `
                    <div class="field">
                        <div class="label">📦 数量：</div>
                        <div class="value">${quantity}</div>
                    </div>
                    ` : ''}
                    
                    ${targetPrice ? `
                    <div class="field">
                        <div class="label">💰 目标价格：</div>
                        <div class="value">${targetPrice}</div>
                    </div>
                    ` : ''}
                    
                    ${message ? `
                    <div class="field">
                        <div class="label">💬 留言：</div>
                        <div class="value" style="white-space: pre-wrap;">${message}</div>
                    </div>
                    ` : ''}
                    
                    <div class="footer">
                        <p>此邮件由 COSPEP 网站自动发送</p>
                        <p>提交时间: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;

    // 发送邮件
    const mailOptions = {
        from: `"COSPEP 网站" <${process.env.SMTP_FROM}>`,
        to: process.env.SMTP_TO,
        subject: `🔔 新咨询：${type} - ${name}`,
        html: htmlContent,
        replyTo: email, // 点击回复时直接回复给客户
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('邮件发送成功:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('邮件发送失败:', error);
        return { success: false, error };
    }
}
