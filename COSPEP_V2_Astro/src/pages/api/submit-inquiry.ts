import type { APIRoute } from 'astro';
import { writeClient } from '@/lib/sanity';
import { sendInquiryEmail } from '@/lib/email';

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();
        
        const rawData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            company: formData.get("company") as string,
            phone: formData.get("phone") as string,
            type: formData.get("type") as string,
            productName: formData.get("productName") as string,
            quantity: formData.get("quantity") as string,
            targetPrice: formData.get("targetPrice") as string,
            message: formData.get("message") as string,
            locale: formData.get("locale") as string || 'en',
        };

        // Honeypot validation
        const honeypot = formData.get("website") as string;
        if (honeypot) {
            console.log('🍯 Honeypot triggered - bot submission blocked');
            return new Response(JSON.stringify({ 
                success: true, 
                message: "Inquiry submitted successfully!" 
            }), { status: 200 });
        }

        // reCAPTCHA v3 verification
        const recaptchaToken = formData.get("recaptchaToken") as string;
        if (!recaptchaToken) {
            return new Response(JSON.stringify({ 
                success: false, 
                message: "reCAPTCHA verification failed. Please try again." 
            }), { status: 400 });
        }

        try {
            const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `secret=${import.meta.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
            });
            const recaptchaResult = await recaptchaResponse.json();

            console.log(`🔒 reCAPTCHA score: ${recaptchaResult.score}, success: ${recaptchaResult.success}`);

            if (!recaptchaResult.success || (recaptchaResult.score !== undefined && recaptchaResult.score < 0.5)) {
                console.log('🚫 reCAPTCHA verification failed - possible bot');
                return new Response(JSON.stringify({ 
                    success: false, 
                    message: "Security verification failed. Please try again." 
                }), { status: 400 });
            }
        } catch (error) {
            console.error('reCAPTCHA verification error:', error);
            // Allow submission to continue if reCAPTCHA service is down
        }

        // 1. Save to Sanity
        await writeClient.create({
            _type: "inquiry",
            ...rawData,
            status: "New",
            submittedAt: new Date().toISOString()
        });

        // 2. Send email notification
        const emailResult = await sendInquiryEmail(rawData);
        if (!emailResult.success) {
            console.error('Email sending failed, but data saved to Sanity');
        }

        // 3. Send to Feishu Bitable
        const feishuAppId = import.meta.env.FEISHU_APP_ID;
        const feishuAppSecret = import.meta.env.FEISHU_APP_SECRET;
        const feishuAppToken = import.meta.env.FEISHU_APP_TOKEN;
        const feishuTableId = import.meta.env.FEISHU_TABLE_ID;

        if (feishuAppId && feishuAppSecret && feishuAppToken && feishuTableId) {
            try {
                // Get Tenant Access Token
                const tokenResponse = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        app_id: feishuAppId,
                        app_secret: feishuAppSecret
                    })
                });
                const tokenData = await tokenResponse.json();
                
                if (tokenData.code === 0) {
                    const tenantAccessToken = tokenData.tenant_access_token;
                    
                    // Prepare record data - adjust field names to match your Bitable
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
                            method: 'POST',
                            headers: {
                                'Authorization': `Bearer ${tenantAccessToken}`,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(recordData)
                        }
                    );
                    const writeData = await writeResponse.json();
                    if (writeData.code !== 0) {
                        console.error('❌ Feishu Bitable write failed:', writeData);
                    } else {
                        console.log('✅ Data saved to Feishu Bitable');
                    }
                } else {
                    console.error('❌ Feishu authentication failed:', tokenData);
                }
            } catch (error) {
                console.error('❌ Feishu integration error:', error);
            }
        } else {
            console.warn('⚠️ Feishu configuration missing, skipping Bitable sync');
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
