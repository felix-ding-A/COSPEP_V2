import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { client } from '@/lib/sanity';
import { getSiteSettings } from '@/lib/sanity/queries';

// 获取数据的函数
async function getData() {
    return await client.fetch(getSiteSettings, {}, { next: { revalidate: 60 } }); // 60 seconds revalidation
}

export async function HeroSection() {
    const data = await getData();

    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            {/* 背景图层 */}
            <div className="absolute inset-0 z-0">
                {data?.heroImageUrl ? (
                    <Image
                        src={data.heroImageUrl}
                        alt="Hero Background"
                        fill
                        className="object-cover brightness-50" // brightness-50 让图片变暗一点，文字更清晰
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-slate-900" /> // 如果没图，显示深色背景
                )}
            </div>

            {/* 文字内容层 */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {data?.heroTitle || data?.heroText || "Premium Biotech Ingredients"}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
                    {data?.heroSubtitle || "Empowering your cosmetic formulations with high-purity peptides and active ingredients."}
                </p>
                <div className="flex gap-4 justify-center">
                    <Link href="/products">
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                            View Products
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
