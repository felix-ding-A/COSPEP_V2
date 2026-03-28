import { w as writeClient } from './sanity_5UM8X-_V.mjs';
import nodemailer from 'nodemailer';

function createTransporter() {
  const host = "smtp.gmail.com";
  const user = "felix8603809@gmail.com";
  const pass = "pzwmfgotwvgjwqoj";
  const port = parseInt("465");
  const secure = port === 465;
  return nodemailer.createTransport({
    host,
    port,
    secure,
    // true for 465, false for other ports
    auth: {
      user,
      pass
    }
  });
}
async function sendInquiryEmail(data) {
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
    locale = "en"
    // Default to English
  } = data;
  const isZh = locale === "zh";
  const texts = {
    subject: isZh ? `🔔 新咨询：${type} - ${name}` : `🔔 New Inquiry: ${type} - ${name}`,
    headerTitle: isZh ? "🔔 新的客户咨询" : "🔔 New Customer Inquiry",
    headerSubtitle: isZh ? "来自 COSPEP 网站" : "From COSPEP Website",
    labelType: isZh ? "📋 咨询类型：" : "📋 Inquiry Type:",
    labelName: isZh ? "👤 姓名：" : "👤 Name:",
    labelEmail: isZh ? "📧 邮箱：" : "📧 Email:",
    labelCompany: isZh ? "🏢 公司：" : "🏢 Company:",
    labelPhone: isZh ? "📱 电话：" : "📱 Phone:",
    labelProduct: isZh ? "🧪 产品：" : "🧪 Product:",
    labelQuantity: isZh ? "📦 数量：" : "📦 Quantity:",
    labelTargetPrice: isZh ? "💰 目标价格：" : "💰 Target Price:",
    labelMessage: isZh ? "💬 留言：" : "💬 Message:",
    footerText: isZh ? "此邮件由 COSPEP 网站自动发送" : "Sent automatically from COSPEP website",
    timeLocale: isZh ? "zh-CN" : "en-US"
  };
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
                    ` : ""}
                    
                    ${phone ? `
                    <div class="field">
                        <div class="label">${texts.labelPhone}</div>
                        <div class="value">${phone}</div>
                    </div>
                    ` : ""}
                    
                    ${productName ? `
                    <div class="field">
                        <div class="label">${texts.labelProduct}</div>
                        <div class="value">${productName}</div>
                    </div>
                    ` : ""}
                    
                    ${quantity ? `
                    <div class="field">
                        <div class="label">${texts.labelQuantity}</div>
                        <div class="value">${quantity}</div>
                    </div>
                    ` : ""}
                    
                    ${targetPrice ? `
                    <div class="field">
                        <div class="label">${texts.labelTargetPrice}</div>
                        <div class="value">${targetPrice}</div>
                    </div>
                    ` : ""}
                    
                    ${message ? `
                    <div class="field">
                        <div class="label">${texts.labelMessage}</div>
                        <div class="value" style="white-space: pre-wrap;">${message}</div>
                    </div>
                    ` : ""}
                    
                    <div class="footer">
                        <p>${texts.footerText}</p>
                        <p>Time: ${(/* @__PURE__ */ new Date()).toLocaleString(texts.timeLocale, { timeZone: "Asia/Shanghai" })}</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
  try {
    const transporter = createTransporter();
    const mailOptions = {
      from: `"COSPEP Website" <${"felix8603809@gmail.com"}>`,
      to: "2431612365@qq.com",
      subject: texts.subject,
      html: htmlContent,
      replyTo: email
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
}

const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      type: formData.get("type"),
      productName: formData.get("productName"),
      quantity: formData.get("quantity"),
      targetPrice: formData.get("targetPrice"),
      message: formData.get("message"),
      locale: formData.get("locale") || "en"
    };
    const honeypot = formData.get("website");
    if (honeypot) {
      console.log("🍯 Honeypot triggered - bot submission blocked");
      return new Response(JSON.stringify({
        success: true,
        message: "Inquiry submitted successfully!"
      }), { status: 200 });
    }
    const recaptchaToken = formData.get("recaptchaToken");
    if (!recaptchaToken) {
      return new Response(JSON.stringify({
        success: false,
        message: "reCAPTCHA verification failed. Please try again."
      }), { status: 400 });
    }
    try {
      const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${"6LetCWssAAAAAJ1QKsaKkRVm-j6TDfNMo8iihiXF"}&response=${recaptchaToken}`
      });
      const recaptchaResult = await recaptchaResponse.json();
      console.log(`🔒 reCAPTCHA score: ${recaptchaResult.score}, success: ${recaptchaResult.success}`);
      if (!recaptchaResult.success || recaptchaResult.score !== void 0 && recaptchaResult.score < 0.5) {
        console.log("🚫 reCAPTCHA verification failed - possible bot");
        return new Response(JSON.stringify({
          success: false,
          message: "Security verification failed. Please try again."
        }), { status: 400 });
      }
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
    }
    await writeClient.create({
      _type: "inquiry",
      ...rawData,
      status: "New",
      submittedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    const emailResult = await sendInquiryEmail(rawData);
    if (!emailResult.success) {
      console.error("Email sending failed, but data saved to Sanity");
    }
    const feishuAppId = "cli_a94a6ac23f385bc2";
    const feishuAppSecret = "uocqpp56bVDRqDa383AyGcbneyouaGA1";
    const feishuAppToken = "YRauweCxDi29zVkCpwxcKSi9nET";
    const feishuTableId = "tbl41EDPAQSSIG5F";
    if (feishuAppId && feishuAppSecret && feishuAppToken && feishuTableId) {
      try {
        const tokenResponse = await fetch("https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            app_id: feishuAppId,
            app_secret: feishuAppSecret
          })
        });
        const tokenData = await tokenResponse.json();
        if (tokenData.code === 0) {
          const tenantAccessToken = tokenData.tenant_access_token;
          const recordData = {
            fields: {
              "Name": rawData.name,
              "Email": rawData.email,
              "Company": rawData.company || "",
              "Whatsapp/TEL": rawData.phone || "",
              "Type": rawData.type,
              "Product Name": rawData.productName || "",
              "Target Price": rawData.targetPrice || "",
              "Message": rawData.message || "",
              "Locale": rawData.locale,
              "Source": "Website Inquiry"
            }
          };
          const writeResponse = await fetch(
            `https://open.feishu.cn/open-apis/bitable/v1/apps/${feishuAppToken}/tables/${feishuTableId}/records`,
            {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${tenantAccessToken}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify(recordData)
            }
          );
          const writeData = await writeResponse.json();
          if (writeData.code !== 0) {
            console.error("❌ Feishu Bitable write failed:", writeData);
          } else {
            console.log("✅ Data saved to Feishu Bitable");
          }
        } else {
          console.error("❌ Feishu authentication failed:", tokenData);
        }
      } catch (error) {
        console.error("❌ Feishu integration error:", error);
      }
    }
    return new Response(JSON.stringify({
      success: true,
      message: "Inquiry submitted successfully!"
    }), { status: 200 });
  } catch (error) {
    console.error("Submission Error:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Failed to submit inquiry. Please try again or email us directly."
    }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
