"use client";

import { useState } from "react";
import { Share2, Link2 } from "lucide-react";
import { toast } from "sonner";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import React from 'react';

interface ShareMenuProps {
    productSlug: string;
    productName: string;
    productDescription?: string;
}

// Custom brand icons as Lucide-react doesn't include them in some versions
const FacebookIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

export function ShareMenu({ productSlug, productName, productDescription }: ShareMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    const getShareUrl = () => {
        if (typeof window === "undefined") return "";
        return `${window.location.origin}/products/${productSlug}`;
    };

    const copyToClipboard = async () => {
        const url = getShareUrl();
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(url);
                toast.success("Link copied to clipboard!");
            } else {
                // Fallback for older browsers
                const textArea = document.createElement("textarea");
                textArea.value = url;
                textArea.style.position = "fixed";
                textArea.style.left = "-999999px";
                document.body.appendChild(textArea);
                textArea.select();

                try {
                    document.execCommand("copy");
                    toast.success("Link copied to clipboard!");
                } catch (err) {
                    toast.error("Failed to copy link");
                } finally {
                    document.body.removeChild(textArea);
                }
            }
            setIsOpen(false);
        } catch (error) {
            console.error("Copy failed:", error);
            toast.error("Failed to copy link");
        }
    };

    const shareToLinkedIn = () => {
        const url = getShareUrl();
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        window.open(linkedInUrl, "_blank", "width=600,height=600");
        setIsOpen(false);
        toast.success("Opening LinkedIn share...");
    };

    const shareToTwitter = () => {
        const url = getShareUrl();
        const text = `Check out ${productName} - High-quality pharmaceutical ingredient`;
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        window.open(twitterUrl, "_blank", "width=600,height=600");
        setIsOpen(false);
        toast.success("Opening X (Twitter) share...");
    };

    const shareToFacebook = () => {
        const url = getShareUrl();
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(facebookUrl, "_blank", "width=600,height=600");
        setIsOpen(false);
        toast.success("Opening Facebook share...");
    };

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <button
                    className="w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
                    aria-label="Share product"
                    title="Share product"
                >
                    <Share2 className="w-5 h-5 text-white" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="start"
                className="w-56 bg-[#0F1612]/95 backdrop-blur-lg border border-white/10"
            >
                <div className="px-2 py-1.5 text-sm font-semibold text-white">
                    Share this product
                </div>
                <DropdownMenuSeparator className="bg-white/10" />

                <DropdownMenuItem
                    onClick={copyToClipboard}
                    className="flex items-center gap-3 px-3 py-2.5 cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white"
                >
                    <Link2 className="w-4 h-4 text-[#B8FF00]" />
                    <span>Copy Link</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-white/10" />

                <DropdownMenuItem
                    onClick={shareToLinkedIn}
                    className="flex items-center gap-3 px-3 py-2.5 cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white"
                >
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                    <span>Share on LinkedIn</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={shareToTwitter}
                    className="flex items-center gap-3 px-3 py-2.5 cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white"
                >
                    <TwitterIcon className="w-4 h-4 text-[#1DA1F2]" />
                    <span>Share on X (Twitter)</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={shareToFacebook}
                    className="flex items-center gap-3 px-3 py-2.5 cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white"
                >
                    <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                    <span>Share on Facebook</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
