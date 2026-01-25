import { Button } from "@/components/ui/button";
import { Link } from "@/lib/navigation";
import { ChevronLeft } from "lucide-react";

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
            <div className="mb-8">
                <Button variant="ghost" asChild className="pl-0 hover:pl-2 transition-all">
                    <Link href="/" className="flex items-center gap-2">
                        <ChevronLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm border">
                {children}
            </div>
        </div>
    );
}
