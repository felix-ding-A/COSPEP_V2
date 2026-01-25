import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { getSettings } from "@/lib/sanity/queries";

export async function HeroSection() {
    const t = useTranslations("Index");
    const settings = await getSettings();


    return (
        <section className="relative bg-muted/30 py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-foreground">
                                {settings?.heroText || "Your Premier Sourcing Partner for Premium Botanical Ingredients"}
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                                Connect with top-tier manufacturers. We ensure quality, compliance, and seamless logistics for the Food, Cosmetic, and Health industries.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 min-[400px]:flex-row">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                <Link href="/products">
                                    Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                                <Link href="/contact">
                                    Contact Us
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                        {settings?.heroImageUrl ? (
                            <div className="aspect-square overflow-hidden rounded-xl border border-border shadow-xl">
                                <img
                                    src={settings.heroImageUrl}
                                    alt="Hero Image"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ) : (
                            /* Placeholder for "Lab + Plant" image */
                            <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-border shadow-xl">
                                <span className="text-muted-foreground font-medium">Hero Image Placeholder</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
