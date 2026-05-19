"use client";

import React, { useEffect, useState } from "react";

const CONSENT_KEY = "cookie-consent";

// Guard: prevent duplicate loading if called more than once
let _analyticsLoaded = false;

function loadAnalytics() {
    if (_analyticsLoaded) return;
    _analyticsLoaded = true;

    // ── GTM ──────────────────────────────────────────────────────────────────
    // dataLayer is pre-initialized in BaseLayout.astro <head> (no network cost)
    // Here we just load the GTM script; GTM itself will push gtm.start
    (window as any).dataLayer = (window as any).dataLayer || [];

    const gtmScript = document.createElement("script");
    gtmScript.async = true;
    gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-TZP98ZV5";
    // Insert before the first <script> for highest priority
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode!.insertBefore(gtmScript, firstScript);



    // ── Microsoft Clarity — deferred to idle to avoid blocking render ─────────
    function _loadClarity() {
        (function (c: any, l: any, a: string, r: string, i: string, t?: any, y?: any) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", "wg7ifxmfc2");
    }

    if ("requestIdleCallback" in window) {
        requestIdleCallback(_loadClarity, { timeout: 5000 });
    } else {
        setTimeout(_loadClarity, 3000);
    }
}

export function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(CONSENT_KEY);
        if (consent === "accepted") {
            loadAnalytics();
        } else if (!consent) {
            setVisible(true);
        }
        // if "rejected" — do nothing
    }, []);

    const handleAccept = () => {
        localStorage.setItem(CONSENT_KEY, "accepted");
        setVisible(false);
        loadAnalytics();
    };

    const handleReject = () => {
        localStorage.setItem(CONSENT_KEY, "rejected");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            role="dialog"
            aria-label="Cookie consent"
            aria-live="polite"
            className="fixed bottom-0 left-0 right-0 z-[999] p-4 md:p-6 pointer-events-none"
        >
            <div className="max-w-4xl mx-auto pointer-events-auto">
                <div
                    className="rounded-2xl border border-white/10 shadow-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4"
                    style={{
                        background: "rgba(10,14,13,0.92)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                    }}
                >
                    {/* Text */}
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-300 leading-relaxed">
                            <span className="text-white font-semibold">🍪 We use cookies.</span>{" "}
                            We use analytics tools (Google Analytics, Microsoft Clarity) to improve your experience.
                            These are only loaded with your consent.{" "}
                            <a
                                href="/privacy-policy"
                                className="text-[#B8FF00] underline underline-offset-2 hover:text-[#B8FF00]/80 transition-colors"
                            >
                                Privacy Policy
                            </a>
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 shrink-0">
                        <button
                            id="cookie-reject-btn"
                            onClick={handleReject}
                            className="px-4 py-2 rounded-xl text-sm font-medium text-gray-400 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-200"
                        >
                            Reject
                        </button>
                        <button
                            id="cookie-accept-btn"
                            onClick={handleAccept}
                            className="px-5 py-2 rounded-xl text-sm font-bold bg-[#B8FF00] text-[#0A0E0D] hover:bg-[#A3E600] hover:scale-105 transition-all duration-200 shadow-[0_0_16px_rgba(184,255,0,0.25)]"
                        >
                            Accept All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
