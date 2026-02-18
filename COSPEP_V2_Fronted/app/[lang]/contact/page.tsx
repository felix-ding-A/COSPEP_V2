"use client";

import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { submitInquiry } from "@/app/actions/submit-inquiry";
import { MapPin, Mail, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Suspense, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Loader2 } from "lucide-react";

// Form Schema
const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    company: z.string().min(2, "Company name is required"),
    type: z.string().min(1, "Please select an inquiry type"),
    productName: z.string().optional(),
    targetPrice: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

function ContactForm() {
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
            type: defaultProduct ? "Sourcing Request" : "General",
            productName: defaultProduct,
            targetPrice: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!executeRecaptcha) {
            toast.error("reCAPTCHA validation failed. Please reload the page.");
            return;
        }

        setIsSubmitting(true);
        try {
            const token = await executeRecaptcha("inquiry");

            const formData = new FormData();
            formData.append("locale", locale);
            formData.append("recaptchaToken", token);

            Object.entries(values).forEach(([key, value]) => {
                if (value) formData.append(key, value);
            });

            const result = await submitInquiry(null, formData);

            if (result.success) {
                toast.success(result.message);
                form.reset();
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="bg-background border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send an Inquiry</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
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
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="john@company.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Business Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Inquiry Type</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
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
                                    <FormLabel>Target Product (Optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Curcumin 95%" {...field} />
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
                                <FormLabel>Target Price / Budget (Optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. $25/kg" {...field} />
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
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Please tell us about your requirements (Quantity, Spec, etc.)"
                                        className="min-h-[120px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send Request"
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    );
}

function ContactInfo() {
    return (
        <div className="space-y-8">
            <div className="bg-primary/5 p-8 rounded-xl space-y-6">
                <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                        <h3 className="font-bold text-lg">Headquarters</h3>
                        <p className="text-muted-foreground">
                            No. 10108, 1st Floor, Unit 1, Building DK8-8, CR Future City, International Trade and Logistics Park, Xi&apos;an City, Shaanxi Province
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                        <h3 className="font-bold text-lg">Email Us</h3>
                        <p className="text-muted-foreground">
                            <a href="mailto:info@cospep.com" className="hover:text-primary transition-colors">
                                info@cospep.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                        <h3 className="font-bold text-lg">Call / WhatsApp</h3>
                        <p className="text-muted-foreground">
                            <a href="tel:+8613201818603" className="hover:text-primary transition-colors">
                                +86 13201818603
                            </a>
                        </p>
                        <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none mt-2" size="sm">
                            <a
                                href="https://wa.me/8613201818603"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Chat on WhatsApp
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Placeholder Map */}
            <div className="aspect-video w-full rounded-xl bg-muted overflow-hidden border">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102877.29415896357!2d108.878!3d34.229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x366379e922ac17b9%3A0x85d466fda5a67!2sXi%27an%2C%20Shaanxi%2C%20China!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}

import { ReCaptchaProvider } from "@/components/providers/recaptcha-provider";

export default function ContactPage() {
    return (
        <ReCaptchaProvider>
            <Breadcrumbs />
            <div className="container mx-auto px-4 md:px-6 py-10">
                <div className="mb-10 text-center space-y-4">
                    <h1 className="text-3xl font-bold text-primary lg:text-4xl">Contact Us Now</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Whether you need a quick quote, a specific ingredient sourcing, or have a logistical question, we are here to help.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <ContactInfo />
                    <Suspense fallback={<div className="h-[600px] bg-muted animate-pulse rounded-xl" />}>
                        <ContactForm />
                    </Suspense>
                </div>
            </div>
        </ReCaptchaProvider>
    );
}
