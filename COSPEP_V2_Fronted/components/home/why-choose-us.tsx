import { BadgeCheck, Scale, FlaskConical } from "lucide-react";

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold text-primary md:text-4xl">Why Partner With COSPEP?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        We bridge the gap between quality manufacturing and global demand with rigorous standards.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-background p-8 rounded-xl shadow-sm border space-y-4 hover:border-primary/50 transition-colors">
                        <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <BadgeCheck className="h-6 w-6 text-secondary" />
                        </div>
                        <h3 className="text-xl font-bold">Strict Auditing</h3>
                        <p className="text-muted-foreground">
                            Every supplier is vetted against ISO and GMP standards. We allow no compromise on safety and authenticity.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-background p-8 rounded-xl shadow-sm border space-y-4 hover:border-primary/50 transition-colors">
                        <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <TruckIcon className="h-6 w-6 text-secondary" />
                        </div>
                        <h3 className="text-xl font-bold">Consolidated Shipping</h3>
                        <p className="text-muted-foreground">
                            Save on logistics by combining multiple small orders into one shipment. We handle the export documentation.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-background p-8 rounded-xl shadow-sm border space-y-4 hover:border-primary/50 transition-colors">
                        <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <FlaskConical className="h-6 w-6 text-secondary" />
                        </div>
                        <h3 className="text-xl font-bold">Third-Party Testing</h3>
                        <p className="text-muted-foreground">
                            Independent lab testing available upon request. Verify potency, heavy metals, and pesticide residues.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function TruckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M15 18H9" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
        </svg>
    )
}
