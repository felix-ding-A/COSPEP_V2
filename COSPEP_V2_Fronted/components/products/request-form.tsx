"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";

export function RequestForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        productInterest: "",
        quantity: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // TODO: Send to Sanity API endpoint
            const response = await fetch("/api/submit-request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Request submitted successfully!");
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    productInterest: "",
                    quantity: "",
                    message: ""
                });
            } else {
                alert("Failed to submit request. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section className="py-24 bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]">
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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Row 1: Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                                        Full Name <span className="text-[#B8FF00]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                        Email Address <span className="text-[#B8FF00]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] transition-colors"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Company & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] transition-colors"
                                        placeholder="Company Inc."
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] transition-colors"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                            </div>

                            {/* Row 3: Product Interest & Quantity */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="productInterest" className="block text-sm font-medium text-white mb-2">
                                        Product of Interest
                                    </label>
                                    <input
                                        type="text"
                                        id="productInterest"
                                        name="productInterest"
                                        value={formData.productInterest}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] transition-colors"
                                        placeholder="e.g., Bio-Active Peptides"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="quantity" className="block text-sm font-medium text-white mb-2">
                                        Quantity / MOQ
                                    </label>
                                    <input
                                        type="text"
                                        id="quantity"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] transition-colors"
                                        placeholder="e.g., 100kg"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                                    Message / Requirements
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00] transition-colors resize-none"
                                    placeholder="Please provide any additional details about your requirements..."
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-4">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold px-12 py-6 text-lg group"
                                >
                                    {isSubmitting ? (
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
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
