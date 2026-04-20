"use client";

import { useLocale, useSearchParams } from "@/lib/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { ReCaptchaProvider } from "../providers/recaptcha-provider";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import React from 'react';

// Form Schema
const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    company: z.string().min(2, "Company name is required"),
    phone: z.string().optional(),
    type: z.string().min(1, "Please select an inquiry type"),
    productName: z.string().optional(),
    targetPrice: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
    website: z.string().optional(), // Honeypot field
});

function ContactFormInner() {
    const locale = useLocale();
    const searchParams = useSearchParams();
    const defaultProduct = searchParams.get("product") || "";
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            phone: "",
            type: defaultProduct ? "Sourcing Request" : "General",
            productName: defaultProduct,
            targetPrice: "",
            message: "",
            website: "", // Honeypot field
        },
    });

    const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
        if (!executeRecaptcha) {
            console.warn("reCAPTCHA not ready during submission");
            toast.error("reCAPTCHA not ready. Please try again.");
            return;
        }

        setIsSubmitting(true);
        console.log("Submitting inquiry:", values);
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
        } finally {
            setIsSubmitting(false);
        }
    }, [executeRecaptcha, locale, form]);

    return (
        <div className="glass-strong rounded-3xl p-8 border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8">Send an Inquiry</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-300">Your Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="John Doe"
                                            {...field}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#B8FF00]/50 transition-all"
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
                                    <FormLabel className="text-gray-300">Email Address</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="john@company.com"
                                            {...field}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#B8FF00]/50 transition-all"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-300">Company Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Your Business Name"
                                            {...field}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#B8FF00]/50 transition-all"
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
                                    <FormLabel className="text-gray-300">WhatsApp / TEL (Optional)</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="+1 234 567 890"
                                            {...field}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#B8FF00]/50 transition-all"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-300">Inquiry Type</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="bg-white/5 border-white/10 text-white h-12">
                                                <SelectValue placeholder="Select type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="bg-[#0F1612] border-white/10 text-white">
                                            <SelectItem value="Product Quote">Product Quote</SelectItem>
                                            <SelectItem value="Sourcing Request">Sourcing Request</SelectItem>
                                            <SelectItem value="General">General Inquiry</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="productName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-300">Target Product (Optional)</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="e.g. Curcumin 95%"
                                            {...field}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#B8FF00]/50 transition-all"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="targetPrice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-300">Target Price / Budget (Optional)</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="e.g. $25/kg"
                                        {...field}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#B8FF00]/50 transition-all"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-300">Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Please tell us about your requirements (Quantity, Spec, etc.)"
                                        className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00]/50 transition-all"
                                        {...field}
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

                    <Button
                        type="submit"
                        className="w-full bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-bold text-xl h-14 hover:scale-[1.02] transition-all shadow-lg shadow-[#B8FF00]/20"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send Request"
                        )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-4">
                        This site is protected by reCAPTCHA and the Google{" "}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400">Privacy Policy</a>{" "}
                        and{" "}
                        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400">Terms of Service</a>{" "}
                        apply.
                    </p>
                </form>
            </Form>
        </div>
    );
}

export function ContactForm() {
    return (
        <ReCaptchaProvider>
            <ContactFormInner />
        </ReCaptchaProvider>
    );
}
