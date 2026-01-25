import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, CheckCircle2, XCircle, Users, BadgeCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Section 1: The Origin Story (Xi'an Advantage) */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 order-2 lg:order-1">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                <MapPin className="w-4 h-4 mr-1" />
                                Xi'an, China
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                                Located in the Heart of the <span className="text-primary">Botanical Industry</span>
                            </h1>
                            <div className="space-y-4 text-lg text-muted-foreground">
                                <p>
                                    Xi'an isn't just an ancient capital; it is the global cluster for herbal extraction. The unique climate of the Qinling Mountains provides an abundance of diverse botanical resources.
                                </p>
                                <p>
                                    Being based here means we are within a <strong>2-hour drive of 500+ GMP factories</strong>. We don't guess the market conditions or rely on emails; we walk the factory floors, inspect the raw materials, and verify production quality in person.
                                </p>
                            </div>
                            <Button className="bg-primary hover:bg-primary/90">
                                <Link href="/contact">Visit Our Office</Link>
                            </Button>
                        </div>

                        {/* Visual Placeholder */}
                        <div className="order-1 lg:order-2 aspect-video bg-muted rounded-2xl overflow-hidden relative flex items-center justify-center border-2 border-dashed">
                            <div className="text-center space-y-2">
                                <span className="text-2xl font-bold opacity-20">MAP / IMAGE</span>
                                <p className="text-sm text-muted-foreground">Visual: Qinling Mt. + Modern Lab Overlay</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Our Role (The Filter) */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">We Are Your <span className="text-primary">Quality Filter</span></h2>
                        <p className="text-muted-foreground text-lg">
                            Direct sourcing can be risky. We bridge the gap between expectations and reality.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Traditional Sourcing */}
                        <div className="bg-background p-8 rounded-xl border border-destructive/20 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <XCircle className="w-32 h-32 text-destructive" />
                            </div>
                            <h3 className="text-xl font-bold text-destructive mb-6 flex items-center">
                                <XCircle className="w-5 h-5 mr-2" /> Traditional Sourcing
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-destructive font-bold mr-2">×</span>
                                    <span className="text-muted-foreground">High capability for variability in quality batches.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-destructive font-bold mr-2">×</span>
                                    <span className="text-muted-foreground">Language barriers causing spec misunderstandings.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-destructive font-bold mr-2">×</span>
                                    <span className="text-muted-foreground">Multiple small shipments increasing logistics costs.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-destructive font-bold mr-2">×</span>
                                    <span className="text-muted-foreground">No local representation to resolve disputes.</span>
                                </li>
                            </ul>
                        </div>

                        {/* COSPEP Way */}
                        <div className="bg-background p-8 rounded-xl border-2 border-primary shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <CheckCircle2 className="w-32 h-32 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                                <BadgeCheck className="w-6 h-6 mr-2" /> The COSPEP Advantage
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 shrink-0 mt-0.5" />
                                    <span className="font-medium text-foreground">Pre-audited GMP Manufacturers Only.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 shrink-0 mt-0.5" />
                                    <span className="font-medium text-foreground">Technical team reviews COAs &Specs before quoting.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 shrink-0 mt-0.5" />
                                    <span className="font-medium text-foreground">Consolidated shipping for reduced landed cost.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 shrink-0 mt-0.5" />
                                    <span className="font-medium text-foreground">Your trusted legally-bound partner in China.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: The Team */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Your Sourcing Experts</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Dr. Chen", role: "Chief Scientific Officer", desc: "15+ Years in Phyto-chemistry" },
                            { name: "Sarah Li", role: "Supply Chain Director", desc: "Expert in Global Logistics" },
                            { name: "Mike Zhang", role: "Quality Assurance Lead", desc: "Auditor ISO/GMP Standards" },
                            { name: "Emma Wang", role: "Client Success Manager", desc: "Dedicated to smooth ops" },
                        ].map((member, i) => (
                            <Card key={i} className="text-center border-none shadow-none bg-transparent">
                                <CardContent className="pt-6">
                                    <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-muted">
                                        <AvatarImage src={`https://i.pravatar.cc/150?u=${i}`} />
                                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <h3 className="font-bold text-lg">{member.name}</h3>
                                    <p className="text-primary font-medium mb-1">{member.role}</p>
                                    <p className="text-sm text-muted-foreground">{member.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Group Background */}
            <section className="py-12 bg-primary text-primary-foreground border-t border-primary-foreground/10">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex flex-col items-center space-y-4">
                        <Users className="h-8 w-8 opacity-80" />
                        <h3 className="text-xl font-semibold">Backed by Strong Foundations</h3>
                        <p className="max-w-2xl opacity-90 leading-relaxed">
                            COSPEP is a strategic sourcing unit under the <strong>Prius Group</strong>, leveraging over a decade of financial stability and industry networks to provide you with secure and reliable trading services.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
