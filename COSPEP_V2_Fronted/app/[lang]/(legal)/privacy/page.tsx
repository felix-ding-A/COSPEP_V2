"use client";

import { useTranslations } from "next-intl";

export default function PrivacyPage() {
    // const t = useTranslations('Privacy'); // Assuming we'd add translations later. For now, hardcoded standard text.

    return (
        <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1>Privacy Policy</h1>
            <p>Last updated: January 26, 2026</p>

            <h2>1. Introduction</h2>
            <p>
                Welcome to COSPEP ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy.
                If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information,
                please contact us.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
                We collect personal information that you voluntarily provide to us when you register on the Website,
                express an interest in obtaining information about us or our products and services, when you participate in activities on the Website
                or otherwise when you contact us.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
                We use personal information collected via our Website for a variety of business purposes described below.
                We process your personal information for these purposes in reliance on our legitimate business interests,
                in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            <ul>
                <li>To facilitate account creation and logon process.</li>
                <li>To send you marketing and promotional communications.</li>
                <li>To fulfill and manage your orders.</li>
            </ul>

            <h2>4. Contact Us</h2>
            <p>
                If you have questions or comments about this policy, you may email us at sales@cospep.com or by post to:
            </p>
            <address>
                COSPEP<br />
                Xi'an, Shaanxi, China
            </address>
        </article>
    );
}
