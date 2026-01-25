import { ShieldCheck, Truck, PackageCheck } from "lucide-react";

const stats = [
    {
        icon: ShieldCheck,
        title: "ISO/GMP Certified",
        description: "Verified Manufacturing Partners"
    },
    {
        icon: PackageCheck,
        title: "Ready Stock",
        description: "Immediate Availability for Key Items"
    },
    {
        icon: Truck,
        title: "Global Shipping",
        description: "Efficient Logistics Solution"
    }
];

export function TrustStatsBar() {
    return (
        <section className="bg-primary py-12 text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors">
                            <stat.icon className="h-10 w-10 text-secondary" />
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold">{stat.title}</h3>
                                <p className="text-sm text-primary-foreground/80">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
