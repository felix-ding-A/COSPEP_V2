"use client";

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

interface ProductContactFormProps {
    productName?: string;
}

export function ProductContactForm({ productName }: ProductContactFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            type: "Product Quote",
            productName: productName || "",
            targetPrice: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const formData = new FormData();
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
    }

    return (
        <div className="glass-strong rounded-2xl p-6 md:p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Sales for This Product</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
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
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
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
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                                        />
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
                                <FormLabel className="text-gray-300">Company Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Your Business Name"
                                        {...field}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                                    />
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
                                    <FormLabel className="text-gray-300">Inquiry Type</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="bg-white/5 border-white/10 text-white">
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
                                    <FormLabel className="text-gray-300">Product Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="e.g. Curcumin 95%"
                                            {...field}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
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
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
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
                                        className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold text-lg h-12"
                    >
                        Send Request
                    </Button>
                </form>
            </Form>
        </div>
    );
}
