import { c as createComponent } from './astro-component_DJUp-8MJ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_C_9vr8UG.mjs';
import { c as cn, B as Button, $ as $$BaseLayout } from './BaseLayout_DFgKn8dd.mjs';
import { B as Breadcrumbs } from './Breadcrumbs_B2xFpkYI.mjs';
import { C as Card, a as CardContent } from './card_E-5LuT40.mjs';
import { ArrowLeft, ArrowRight, MapPin, SearchCheck, FlaskConical, Sprout } from 'lucide-react';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [emblaRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef: emblaRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDown: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden h-full", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";

const carouselItems = [
  { src: "/images/about/qinling-1.webp", alt: "Snow-covered Qinling Mountains" },
  { src: "/images/about/qinling-2.webp", alt: "Sourcing area map" },
  { src: "/images/about/qinling-3.webp", alt: "Autumn foliage in Qinling" },
  { src: "/images/about/qinling-4.webp", alt: "Misty mountain peaks" }
];
function AboutCarousel() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return /* @__PURE__ */ jsxs(
    Carousel,
    {
      setApi,
      plugins: [
        Autoplay({
          delay: 4e3
        })
      ],
      className: "w-full h-full",
      children: [
        /* @__PURE__ */ jsx(CarouselContent, { className: "h-full ml-0", children: carouselItems.map((item, index) => /* @__PURE__ */ jsx(CarouselItem, { className: "pl-0 h-full", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full overflow-hidden group", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: item.src,
              alt: item.alt,
              className: "object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110",
              loading: index === 0 ? "eager" : "lazy"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" })
        ] }) }, index)) }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10", children: carouselItems.map((_, index) => /* @__PURE__ */ jsx(
          "button",
          {
            className: cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm",
              index === current ? "bg-[#B8FF00] w-8" : "bg-white/40 hover:bg-white"
            ),
            onClick: () => api?.scrollTo(index),
            "aria-label": `Go to slide ${index + 1}`
          },
          index
        )) })
      ]
    }
  );
}

const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$About;
  const { lang: langParam } = Astro2.params;
  const title = "About COSPEP | Bridging Nature's Purity with Scientific Innovation";
  const description = "Learn about COSPEP's journey from the heart of the Qinling Mountains to becoming a leading supplier of premium botanical ingredients and bioactive peptides.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col min-h-screen bg-[#0A0E0D] text-white"> <div class="bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]"> ${renderComponent($$result2, "Breadcrumbs", Breadcrumbs, {})} </div>  <section class="relative py-24 lg:py-32 bg-[#0F1612] border-b border-white/5 overflow-hidden"> <div class="absolute inset-0 w-full h-full"> <img src="/images/about/hero-bg.webp" alt="Traditional Chinese Landscape" class="object-cover w-full h-full opacity-40"> <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E0D] via-[#0A0E0D]/60 to-transparent"></div> </div> <div class="container relative z-10 mx-auto px-4 md:px-6 text-center"> <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
Bridging Nature's Purity with <br> <span class="text-[#B8FF00] drop-shadow-[0_0_15px_rgba(184,255,0,0.3)]">Scientific Innovation</span> </h1> <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
Where the ancient wisdom of the Qinling Mountains meets modern scientific precision.
</p> </div> </section>  <section class="py-24 bg-[#0A0E0D]"> <div class="container mx-auto px-4 md:px-6"> <div class="max-w-5xl mx-auto space-y-24">  <div class="grid lg:grid-cols-2 gap-16 items-center"> <div class="space-y-8"> <div class="inline-flex items-center px-4 py-2 rounded-full bg-[#B8FF00]/10 text-[#B8FF00] text-sm font-semibold border border-[#B8FF00]/20 backdrop-blur-sm"> ${renderComponent($$result2, "MapPin", MapPin, { "class": "w-4 h-4 mr-2" })}
33°N, 107°E — The Origin
</div> <h2 class="text-4xl font-bold text-white">From the Heart of Qinling</h2> <div class="space-y-4 text-gray-400 text-lg leading-relaxed"> <p>
Since 2015, COSPEP has been dedicated to bridging the gap between China's premium botanical resources and the global market. Our journey begins at <strong class="text-[#B8FF00]">33°N, 107°E</strong>—the heart of the <strong class="text-[#B8FF00]">Qinling Mountains</strong>, known as the 'Gene Bank' of wild flora.
</p> <p>
We have established a rigorous sourcing network covering a 500km radius around this biodiversity hotspot, ensuring every plant extract we supply benefits from the ideal climate and soil conditions essential for maximum potency.
</p> </div> </div> <div class="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden glass shadow-2xl border border-white/10"> ${renderComponent($$result2, "AboutCarousel", AboutCarousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/about/about-carousel", "client:component-export": "AboutCarousel" })} </div> </div>  <div class="grid md:grid-cols-2 gap-8">  <div class="glass-strong rounded-3xl p-10 border border-white/10 hover:border-[#B8FF00]/40 transition-all duration-500 group"> <div class="w-14 h-14 rounded-2xl bg-[#B8FF00]/10 flex items-center justify-center mb-8 text-[#B8FF00] group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "SearchCheck", SearchCheck, { "class": "w-8 h-8" })} </div> <h3 class="text-2xl font-bold mb-4 text-white">
More Than a Trader: We Are Curators
</h3> <p class="text-gray-400 leading-relaxed text-lg">
We define ourselves as an innovation-driven partner, not just a trader. We understand that quality starts at the source. That’s why we don’t just buy and sell; we screen, audit, and integrate. We have filtered through hundreds of manufacturers to partner exclusively with those who meet the highest cGMP and ISO standards.
</p> </div>  <div class="glass-strong rounded-3xl p-10 border border-white/10 hover:border-[#B8FF00]/40 transition-all duration-500 group"> <div class="w-14 h-14 rounded-2xl bg-[#B8FF00]/10 flex items-center justify-center mb-8 text-[#B8FF00] group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "FlaskConical", FlaskConical, { "class": "w-8 h-8" })} </div> <h3 class="text-2xl font-bold mb-4 text-white">
The Fusion of Bio & Nature
</h3> <p class="text-gray-400 leading-relaxed text-lg">
The name COSPEP reflects our dual expertise: Cosmetics/Nature and Peptides/Science. Beyond our botanical roots, we are pioneers in supplying high-purity bioactive peptides. By combining the ancient wisdom of herbal medicine with modern synthetic biology, we provide comprehensive ingredient solutions.
</p> </div> </div> </div> </div> </section>  <section class="py-24 bg-[#0F1612]/50 border-y border-white/5"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-16 max-w-2xl mx-auto space-y-4"> <h2 class="text-4xl font-bold text-white">Core Values</h2> <p class="text-gray-400 text-lg">The pillars of our commitment to quality and innovation.</p> </div> <div class="grid md:grid-cols-3 gap-8">  ${renderComponent($$result2, "Card", Card, { "className": "bg-[#0A0E0D] border-white/10 hover:border-[#B8FF00]/30 hover:shadow-2xl hover:shadow-[#B8FF00]/5 transition-all duration-500 rounded-3xl" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", CardContent, { "className": "pt-10 text-center flex flex-col items-center p-8" }, { "default": ($$result4) => renderTemplate` <div class="w-16 h-16 rounded-2xl bg-[#B8FF00]/10 flex items-center justify-center mb-8 text-[#B8FF00]"> ${renderComponent($$result4, "Sprout", Sprout, { "class": "w-8 h-8" })} </div> <h3 class="text-xl font-bold mb-4 text-white">Geo-Authentic Sourcing</h3> <p class="text-gray-400 text-base leading-relaxed">
Leveraging our strategic location in the Qinling region to secure raw materials with the highest active content.
</p> ` })} ` })}  ${renderComponent($$result2, "Card", Card, { "className": "bg-[#0A0E0D] border-white/10 hover:border-[#B8FF00]/30 hover:shadow-2xl hover:shadow-[#B8FF00]/5 transition-all duration-500 rounded-3xl" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", CardContent, { "className": "pt-10 text-center flex flex-col items-center p-8" }, { "default": ($$result4) => renderTemplate` <div class="w-16 h-16 rounded-2xl bg-[#B8FF00]/10 flex items-center justify-center mb-8 text-[#B8FF00]"> ${renderComponent($$result4, "SearchCheck", SearchCheck, { "class": "w-8 h-8" })} </div> <h3 class="text-xl font-bold mb-4 text-white">Rigorous Audit Process</h3> <p class="text-gray-400 text-base leading-relaxed">
We enforce a strict 4-step audit process for our manufacturing partners, ensuring compliance with global standards (cGMP/ISO).
</p> ` })} ` })}  ${renderComponent($$result2, "Card", Card, { "className": "bg-[#0A0E0D] border-white/10 hover:border-[#B8FF00]/30 hover:shadow-2xl hover:shadow-[#B8FF00]/5 transition-all duration-500 rounded-3xl" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", CardContent, { "className": "pt-10 text-center flex flex-col items-center p-8" }, { "default": ($$result4) => renderTemplate` <div class="w-16 h-16 rounded-2xl bg-[#B8FF00]/10 flex items-center justify-center mb-8 text-[#B8FF00]"> ${renderComponent($$result4, "FlaskConical", FlaskConical, { "class": "w-8 h-8" })} </div> <h3 class="text-xl font-bold mb-4 text-white">Custom Innovation</h3> <p class="text-gray-400 text-base leading-relaxed">
From standard extracts to custom peptide synthesis and OEM formulation, we adapt our supply chain to your R&D needs.
</p> ` })} ` })} </div> </div> </section> </main> ` })}`;
}, "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/about.astro", void 0);

const $$file = "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/about.astro";
const $$url = "/[...lang]/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
