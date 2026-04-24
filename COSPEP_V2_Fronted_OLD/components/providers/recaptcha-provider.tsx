"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
    if (!RECAPTCHA_SITE_KEY) {
        // If key is missing, render children without reCAPTCHA protection
        console.warn("reCAPTCHA site key not found. Skipping reCAPTCHA protection.");
        return <>{children}</>;
    }

    return (
        <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
            {children}
        </GoogleReCaptchaProvider>
    );
}
