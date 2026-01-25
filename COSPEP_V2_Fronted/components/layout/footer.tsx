import { Link } from "@/lib/navigation";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

                    {/* Column 1: Company */}
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <Link href="/" className="text-2xl font-bold text-primary">COSPEP</Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Your premier sourcing partner for high-quality botanical ingredients. Bridging the gap between certified standards and global demand.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-foreground font-semibold">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-primary">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/service" className="hover:text-primary">Logistic Service</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Products */}
                    <div className="space-y-4">
                        <h3 className="text-foreground font-semibold">Products</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/products" className="hover:text-primary">All Ingredients</Link></li>
                            <li><Link href="/products?status=Ready%20to%20Ship" className="hover:text-primary">Ready Stock</Link></li>
                            <li><Link href="/products?category=Food" className="hover:text-primary">Food Additives</Link></li>
                            <li><Link href="/products?category=Cosmetics" className="hover:text-primary">Cosmetic Raw</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="space-y-4">
                        <h3 className="text-foreground font-semibold">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Xi'an, Shaanxi, China</li>
                            <li>sales@cospep.com</li>
                            <li>+86 123 4567 8900</li>
                        </ul>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-primary"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-primary"><Twitter className="h-5 w-5" /></Link>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; 2026 Prius Group / COSPEP. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
