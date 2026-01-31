"use client";

import { motion } from "framer-motion";
import { Award, Shield, FlaskConical, Globe } from "lucide-react";

const stats = [
    {
        icon: Award,
        label: "GMP Certified",
        description: "Quality Assured"
    },
    {
        icon: Shield,
        label: "FDA Regulated",
        description: "Safety First"
    },
    {
        icon: FlaskConical,
        label: "Third-Party Tested",
        description: "Verified Purity"
    },
    {
        icon: Globe,
        label: "Global Shipping",
        description: "Worldwide Delivery"
    }
];

export function TrustStatsBar() {
    return (
        <section className="relative -mt-20 z-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass rounded-2xl overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="p-8 text-center group hover:bg-white/5 transition-all duration-300"
                                >
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-14 h-14 rounded-full bg-[#B8FF00]/10 flex items-center justify-center group-hover:bg-[#B8FF00]/20 transition-colors">
                                            <Icon className="w-7 h-7 text-[#B8FF00]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-1">
                                                {stat.label}
                                            </h3>
                                            <p className="text-sm text-gray-400">
                                                {stat.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
