"use client";

import { useLocale } from "@/lib/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import React from 'react';

// Form Schema
const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    phone: z.string().optional(),
    type: z.string(),
    productName: z.string().optional(),
    quantity: z.string().optional(),
    targetPrice: z.string().optional(),
    message: z.string().optional(),
    website: z.string().optional(), // Honeypot field
});

export function RequestForm() {
    const locale = useLocale();
    const { executeRecaptcha } = useGoogleReCaptcha();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            phone: "",
            type: "Sourcing Request",
            productName: "",
            quantity: "",
            targetPrice: "",
            message: "",
            website: "", // Honeypot field
        },
    });

    const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
        if (!executeRecaptcha) {
            toast.error("reCAPTCHA not ready. Please try again.");
            return;
        }

        try {
            const recaptchaToken = await executeRecaptcha('submit_inquiry');

            const formData = new FormData();
            formData.append("locale", locale);
            formData.append("recaptchaToken", recaptchaToken);
            Object.entries(values).forEach(([key, value]) => {
                if (value) formData.append(key, value);
            });

            const response = await fetch('/api/submit-inquiry', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                toast.success(result.message);
                form.reset();
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("An error occurred. Please try again.");
        }
    }, [executeRecaptcha, locale, form]);

    return (
        <section id="request-form" className="py-24 bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Online Request Submission
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Fill out the form below and our team will get back to you within 24 hours
                        </p>
                    </div>

                    {/* Form */}
                    <div className="glass-strong rounded-2xl p-8 md:p-10">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                {/* Row 1: Name & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white">
                                                    Full Name <span className="text-[#B8FF00]">*</span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="John Doe"
                                                        {...field}
                                                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00]"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white">
                                                    Email Address <span className="text-[#B8FF00]">*</span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="john@company.com"
                                                        {...field}
                                                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00]"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Row 2: Company & Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="company"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white">Company Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Company Inc."
                                                        {...field}
                                                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00]"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white">Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="tel"
                                                        placeholder="+1 (555) 123-4567"
                                                        {...field}
                                                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00]"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Row 3: Product Interest & Quantity */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="productName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white">Product of Interest</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="e.g., Bio-Active Peptides"
                                                        {...field}
                                                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00]"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="quantity"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white">Quantity / MOQ</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="e.g., 100kg"
                                                        {...field}
                                                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00]"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Message */}
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Message / Requirements</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    rows={5}
                                                    placeholder="Please provide any additional details about your requirements..."
                                                    {...field}
                                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00] resize-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Honeypot field - hidden from users */}
                                <FormField
                                    control={form.control}
                                    name="website"
                                    render={({ field }) => (
                                        <FormItem className="hidden">
                                            <FormLabel>Website</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    autoComplete="off"
                                                    tabIndex={-1}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                {/* Submit Button */}
                                <div className="flex flex-col items-center pt-4 gap-3">
                                    <Button
                                        type="submit"
                                        disabled={form.formState.isSubmitting}
                                        className="bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold px-12 py-6 text-lg group"
                                    >
                                        {form.formState.isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Submit Request
                                                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </Button>

                                    {/* reCAPTCHA Legal Notice */}
                                    <p className="text-xs text-gray-500 text-center">
                                        This site is protected by reCAPTCHA and the Google{" "}
                                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400">Privacy Policy</a>{" "}
                                        and{" "}
                                        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400">Terms of Service</a>{" "}
                                        apply.
                                    </p>
                                </div>
                            </form>
                        </Form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
