"use client";

import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center px-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404</h1>
            <h2 className="text-xl font-semibold text-muted-foreground">Page Not Found</h2>
            <p className="max-w-[500px] text-muted-foreground mb-8">
                The page you are looking for does not exist or has been moved.
            </p>
            <Button asChild size="lg">
                <Link href="/products">Return to Catalog</Link>
            </Button>
        </div>
    );
}
