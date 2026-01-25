import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Factory,
    Warehouse,
    Receipt,
    UserCheck,
    ArrowRight,
    Package,
    FlaskConical,
    ShoppingBag,
    Plane,
    Ship,
    Clock
} from "lucide-react";

export default function ServicePage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Section 1: The Consolidation Advantage */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight text-primary">One Shipment, Multiple Factories.</h1>
                        <p className="text-xl text-muted-foreground">
                            Reduce shipping costs by <span className="font-semibold text-foreground">30%</span> and simplify customs clearance with a single consolidated invoice.
                        </p>
                    </div>

                    {/* Visual Schematic */}
                    <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 py-8">
                        {/* Factories */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 bg-background p-4 rounded-lg border shadow-sm">
                                <Factory className="text-muted-foreground h-5 w-5" /> <span className="font-medium">Factory A</span>
                            </div>
                            <div className="flex items-center gap-2 bg-background p-4 rounded-lg border shadow-sm">
                                <Factory className="text-muted-foreground h-5 w-5" /> <span className="font-medium">Factory B</span>
                            </div>
                            <div className="flex items-center gap-2 bg-background p-4 rounded-lg border shadow-sm">
                                <Factory className="text-muted-foreground h-5 w-5" /> <span className="font-medium">Factory C</span>
                            </div>
                        </div>

                        {/* Arrows */}
                        <div className="hidden md:flex flex-col gap-2">
                            <ArrowRight className="text-primary h-6 w-6" />
                            <ArrowRight className="text-primary h-6 w-6" />
                            <ArrowRight className="text-primary h-6 w-6" />
                        </div>
                        <div className="md:hidden">
                            <ArrowRight className="text-primary h-8 w-8 rotate-90" />
                        </div>

                        {/* COSPEP Hub */}
                        <div className="bg-primary text-primary-foreground p-8 rounded-xl shadow-lg flex flex-col items-center gap-2 z-10">
                            <Warehouse className="h-10 w-10" />
                            <div className="text-center font-bold">COSPEP Warehouse</div>
                            <div className="text-xs opacity-90">Consolidation & QC</div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:block">
                            <ArrowRight className="text-primary h-8 w-8" />
                        </div>
                        <div className="md:hidden">
                            <ArrowRight className="text-primary h-8 w-8 rotate-90" />
                        </div>

                        {/* Output */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 bg-white p-6 rounded-lg border shadow-md">
                                <Receipt className="text-secondary h-6 w-6" />
                                <div>
                                    <div className="font-bold">One Invoice</div>
                                    <div className="text-xs text-muted-foreground">Simplified Customs</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white p-6 rounded-lg border shadow-md">
                                <UserCheck className="text-secondary h-6 w-6" />
                                <div>
                                    <div className="font-bold">Direct to You</div>
                                    <div className="text-xs text-muted-foreground">Door-to-Door Service</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Professional Packaging */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Professional Packaging Standards</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Powder */}
                        <Card className="hover:border-primary/50 transition-colors">
                            <CardHeader className="text-center">
                                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <Package className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle>Powder Ingredients</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-muted-foreground">
                                25kg Fiber Drum <br />
                                Double Plastic Bag Inside<br />
                                <span className="text-xs bg-muted px-2 py-1 rounded mt-2 inline-block">UN Approved</span>
                            </CardContent>
                        </Card>

                        {/* Liquid */}
                        <Card className="hover:border-primary/50 transition-colors">
                            <CardHeader className="text-center">
                                <div className="mx-auto bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <FlaskConical className="h-8 w-8 text-secondary" />
                                </div>
                                <CardTitle>Liquid Extracts</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-muted-foreground">
                                Fluorinated Bottles<br />
                                25kg / 200kg Iron Drum<br />
                                IBC Tanks Available
                            </CardContent>
                        </Card>

                        {/* Sample */}
                        <Card className="hover:border-primary/50 transition-colors">
                            <CardHeader className="text-center">
                                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <ShoppingBag className="h-8 w-8 text-green-600" />
                                </div>
                                <CardTitle>Small Pack / Sample</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-muted-foreground">
                                1kg Aluminum Foil Bag<br />
                                Vacuum Sealed<br />
                                <span className="text-xs bg-muted px-2 py-1 rounded mt-2 inline-block">Low MOQ Friendly</span>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Section 3: Global Logistics Network */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Global Logistics Network</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                We have established long-term cooperation with major courier services and freight forwarders to ensure your goods arrive safely and on time.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 bg-background rounded-lg border">
                                    <Plane className="h-8 w-8 text-secondary" />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className="font-bold">Express / Air Cargo</h3>
                                            <span className="text-sm font-semibold text-primary">3 - 10 Days</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-xs border px-2 py-1 rounded bg-muted">FedEx</span>
                                            <span className="text-xs border px-2 py-1 rounded bg-muted">DHL</span>
                                            <span className="text-xs border px-2 py-1 rounded bg-muted">UPS</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-background rounded-lg border">
                                    <Ship className="h-8 w-8 text-primary" />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className="font-bold">Sea Freight</h3>
                                            <span className="text-sm font-semibold text-primary">20 - 30 Days</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-xs border px-2 py-1 rounded bg-muted">LCL Consolidation</span>
                                            <span className="text-xs border px-2 py-1 rounded bg-muted">FCL Container</span>
                                            <span className="text-xs border px-2 py-1 rounded bg-muted">Maersk</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right CTA Area */}
                        <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl text-center space-y-6">
                            <Clock className="h-12 w-12 mx-auto opacity-80" />
                            <h3 className="text-2xl font-bold">Ready to streamline your supply chain?</h3>
                            <p className="opacity-90 max-w-md mx-auto">
                                Get a competitive shipping quote today. We handle all export documentation, including Certificate of Origin and Health Certificates.
                            </p>
                            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto font-bold">
                                <Link href="/contact?type=General&message=I%20need%20a%20shipping%20quote">
                                    Get a Shipping Quote
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
