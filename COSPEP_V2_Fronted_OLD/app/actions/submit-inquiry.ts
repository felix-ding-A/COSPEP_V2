"use server";

import { createClient } from "@sanity/client";
import { revalidatePath } from "next/cache";
import { sendInquiryEmail } from "@/lib/email";

// We need a separate write client because the public client is read-only
// NOTE: You must add SANITY_API_TOKEN to your .env.local
const writeClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
    token: process.env.SANITY_API_TOKEN, // <--- NEEDS TO BE SET
    useCdn: false,
});

export async function submitInquiry(prevState: any, formData: FormData) {
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

    // Honeypot validation - silently reject bot submissions
    const honeypot = formData.get("website") as string;
    if (honeypot) {
        // Return success to confuse bots, but don't process the submission
        console.log('🍯 Honeypot triggered - bot submission blocked');
        return { success: true, message: "Inquiry submitted successfully!" };
    }

    // reCAPTCHA v3 verification
    const recaptchaToken = formData.get("recaptchaToken") as string;
    if (!recaptchaToken) {
        return { success: false, message: "reCAPTCHA verification failed. Please try again." };
    }

    try {
        const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        });
        const recaptchaResult = await recaptchaResponse.json();

        console.log(`🔒 reCAPTCHA score: ${recaptchaResult.score}, success: ${recaptchaResult.success}`);

        if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
            console.log('🚫 reCAPTCHA verification failed - possible bot');
            return { success: false, message: "Security verification failed. Please try again." };
        }
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        // Allow submission to continue if reCAPTCHA service is down
    }

    // Basic server-side validation can be added here, though Zod handles it on client usually
    // We are just saving what we get for now.

    try {
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
            console.error('邮件发送失败，但数据已保存到 Sanity');
        }

        // Revalidate if we had a dashboard page (we don't yet, but good practice)
        revalidatePath("/contact");

        return { success: true, message: "Inquiry submitted successfully!" };
    } catch (error) {
        console.error("Sanity Submission Error:", error);
        return { success: false, message: "Failed to submit inquiry. Please try again or email us directly." };
    }
}
