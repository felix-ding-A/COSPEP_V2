"use client";

import { useState } from "react";
import { Share2, Link2, Facebook, Twitter, Linkedin, X } from "lucide-react";
import { toast } from "sonner";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface ShareMenuProps {
    productSlug: string;
    productName: string;
    productDescription?: string;
}

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
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span>Share on LinkedIn</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={shareToTwitter}
                    className="flex items-center gap-3 px-3 py-2.5 cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white"
                >
                    <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                    <span>Share on X (Twitter)</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={shareToFacebook}
                    className="flex items-center gap-3 px-3 py-2.5 cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white"
                >
                    <Facebook className="w-4 h-4 text-[#1877F2]" />
                    <span>Share on Facebook</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
