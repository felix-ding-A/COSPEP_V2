"use client";

import { useCallback } from "react";
import { toast } from "sonner";

export function useShare() {
    const copyToClipboard = useCallback(async (url: string, title?: string) => {
        try {
            // Try using the modern Web Share API first (mobile friendly)
            if (navigator.share && /mobile|android|iphone|ipad/i.test(navigator.userAgent)) {
                await navigator.share({
                    title: title || "Check out this product",
                    url: url,
                });
                toast.success("Shared successfully!");
                return true;
            }

            // Fallback to clipboard API
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(url);
                toast.success("Link copied to clipboard!");
                return true;
            }

            // Final fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = url;
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            document.body.appendChild(textArea);
            textArea.select();

            try {
                document.execCommand("copy");
                toast.success("Link copied to clipboard!");
                return true;
            } catch (err) {
                toast.error("Failed to copy link");
                return false;
            } finally {
                document.body.removeChild(textArea);
            }
        } catch (error) {
            // User cancelled share or other error
            if (error instanceof Error && error.name !== "AbortError") {
                console.error("Share failed:", error);
                toast.error("Failed to share");
            }
            return false;
        }
    }, []);

    const getShareUrl = useCallback((slug: string) => {
        if (typeof window === "undefined") return "";
        return `${window.location.origin}/products/${slug}`;
    }, []);

    return {
        copyToClipboard,
        getShareUrl,
    };
}
