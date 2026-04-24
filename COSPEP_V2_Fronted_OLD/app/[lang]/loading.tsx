import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen">
            {/* 1. Hero Section Skeleton - Full Screen Height */}
            <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
                    {/* Badge Skeleton */}
                    <Skeleton className="h-8 w-48 mx-auto rounded-full bg-white/10" />

                    {/* Title Skeleton */}
                    <div className="space-y-4">
                        <Skeleton className="h-20 w-3/4 mx-auto bg-white/20" />
                        <Skeleton className="h-20 w-2/3 mx-auto bg-white/20" />
                    </div>

                    {/* Description Skeleton */}
                    <Skeleton className="h-6 w-1/2 mx-auto bg-white/10" />

                    {/* Buttons Skeleton */}
                    <div className="flex justify-center gap-4 pt-4">
                        <Skeleton className="h-14 w-40 rounded-md bg-white/20" />
                        <Skeleton className="h-14 w-40 rounded-md bg-white/10" />
                    </div>
                </div>
            </div>

            {/* 2. Content Skeleton (原来的骨架) */}
            <div className="container mx-auto px-4 py-16 space-y-12">
                {/* Trust Bar Skeleton */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="h-24 w-full" />
                    ))}
                </div>

                {/* Products Grid Skeleton */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex flex-col space-y-4">
                            <Skeleton className="h-[250px] w-full rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-[80%]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
