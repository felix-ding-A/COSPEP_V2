"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-xl p-6 border border-white/10"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#B8FF00]/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#B8FF00]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Need Help?</h3>
            </div>

            <p className="text-sm text-gray-400 mb-6">
                Our team is here to assist you in finding the perfect solution for your needs.
            </p>

            <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-[#B8FF00]" />
                    <a href="mailto:info@cospep.com" className="text-gray-300 hover:text-[#B8FF00] transition-colors">
                        info@cospep.com
                    </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-[#B8FF00]" />
                    <a href="tel:+8618220916763" className="text-gray-300 hover:text-[#B8FF00] transition-colors">
                        +86 182 2091 6763
                    </a>
                </div>
            </div>

            <Button
                className="w-full bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold"
                asChild
            >
                <Link href="/contact">Contact Us</Link>
            </Button>
        </motion.div>
    );
}
