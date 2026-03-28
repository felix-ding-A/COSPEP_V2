import { c as createComponent } from './astro-component_DJUp-8MJ.mjs';
import 'piccolore';
import { n as manifest, o as getLocaleRelativeUrl, l as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './entrypoint_C_9vr8UG.mjs';
import { f as useParams, B as Button, L as Link, c as cn, b as useSearchParams, h as useRouter, a as useLocale, i as getProducts, j as getCategories, k as getSettings, $ as $$BaseLayout, u as useTranslations } from './BaseLayout_DFgKn8dd.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Leaf, Apple, Pill, FlaskConical, CheckIcon, MessageCircle, Mail, Phone, X, Loader2, Send } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { I as Input, L as Label, F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl, e as FormMessage, T as Textarea } from './textarea_DYF5ZzQM.mjs';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from './accordion_kr07DEy6.mjs';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { P as ProductCard } from './product-card_BM4u2Kwq.mjs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { toast } from 'sonner';
import 'es-module-lexer';
import 'clsx';

function toRoutingStrategy(routing, domains) {
  let strategy;
  const hasDomains = domains ? Object.keys(domains).length > 0 : false;
  if (routing === "manual") {
    strategy = "manual";
  } else {
    if (!hasDomains) {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "pathname-prefix-always";
        } else {
          strategy = "pathname-prefix-always-no-redirect";
        }
      } else {
        strategy = "pathname-prefix-other-locales";
      }
    } else {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "domains-prefix-always";
        } else {
          strategy = "domains-prefix-always-no-redirect";
        }
      } else {
        strategy = "domains-prefix-other-locales";
      }
    }
  }
  return strategy;
}
function toFallbackType(routing) {
  if (routing === "manual") {
    return "rewrite";
  }
  return routing.fallbackType;
}
const PREFIX_DEFAULT_LOCALE = /* @__PURE__ */ new Set([
  "pathname-prefix-always",
  "domains-prefix-always",
  "pathname-prefix-always-no-redirect",
  "domains-prefix-always-no-redirect"
]);
const REDIRECT_TO_DEFAULT_LOCALE = /* @__PURE__ */ new Set([
  "pathname-prefix-always-no-redirect",
  "domains-prefix-always-no-redirect"
]);
function fromRoutingStrategy(strategy, fallbackType) {
  let routing;
  if (strategy === "manual") {
    routing = "manual";
  } else {
    routing = {
      prefixDefaultLocale: PREFIX_DEFAULT_LOCALE.has(strategy),
      redirectToDefaultLocale: !REDIRECT_TO_DEFAULT_LOCALE.has(strategy),
      fallbackType
    };
  }
  return routing;
}

const carouselSlides = [
  {
    image: "/images/product-carousel-1.webp",
    title: "Bio-Active Peptides",
    subtitle: "Pharmaceutical Grade • cGMP Certified",
    description: "Advanced peptide synthesis for research and therapeutic applications",
    cta: "Explore Peptides",
    scrollTarget: "products-list"
  },
  {
    image: "/images/product-carousel-2.webp",
    title: "Premium Plant Extracts",
    subtitle: "100% Natural • Sustainable Sourcing",
    description: "High-purity botanical extracts for nutraceuticals and cosmetics",
    cta: "View Extracts",
    scrollTarget: "products-list"
  },
  {
    image: "/images/product-carousel-3.webp",
    title: "Custom Health Supplements",
    subtitle: "Made to Order • Quality Assured",
    description: "Turnkey supplement manufacturing from formulation to packaging",
    cta: "Start Your Business",
    href: "/custom-manufacturing"
  }
];
function ProductsHeroCarousel() {
  useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6e3);
    return () => clearInterval(timer);
  }, []);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };
  const scrollToProducts = () => {
    const element = document.getElementById("products-list");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const currentData = carouselSlides[currentSlide];
  return /* @__PURE__ */ jsxs("section", { className: "relative h-[333px] md:h-[400px] overflow-hidden bg-[#0A0E0D]", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: currentSlide === 0 ? 1 : 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 1 },
          className: "absolute inset-0",
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
              style: { backgroundImage: `url('${currentData.image}')` }
            }
          )
        },
        currentSlide
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#0A0E0D]/95 via-[#0A0E0D]/70 to-[#0A0E0D]/40" })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: prevSlide,
        className: "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-subtle hover:bg-white/10 flex items-center justify-center transition-all group",
        "aria-label": "Previous slide",
        children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-6 h-6 text-white group-hover:text-[#B8FF00] transition-colors" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: nextSlide,
        className: "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-subtle hover:bg-white/10 flex items-center justify-center transition-all group",
        "aria-label": "Next slide",
        children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-6 h-6 text-white group-hover:text-[#B8FF00] transition-colors" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 h-full flex items-center", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: currentSlide === 0 ? 1 : 0, y: currentSlide === 0 ? 0 : 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.5 },
        className: "space-y-6",
        children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 0.2, duration: 0.4 },
              className: "inline-block",
              children: /* @__PURE__ */ jsx("div", { className: "glass px-4 py-2 rounded-full text-sm text-white/90 tracking-wide", children: currentData.subtitle })
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight", children: currentData.title }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-300 leading-relaxed", children: currentData.description }),
          currentData.scrollTarget ? /* @__PURE__ */ jsxs(
            Button,
            {
              size: "lg",
              className: "bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold px-8 py-6 text-lg group mt-4",
              onClick: scrollToProducts,
              children: [
                currentData.cta,
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
              ]
            }
          ) : /* @__PURE__ */ jsx(
            Button,
            {
              size: "lg",
              className: "bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold px-8 py-6 text-lg group mt-4",
              asChild: true,
              children: /* @__PURE__ */ jsxs(Link, { href: currentData.href || "#", children: [
                currentData.cta,
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
              ] })
            }
          )
        ]
      },
      currentSlide
    ) }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2", children: carouselSlides.map((_, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setCurrentSlide(index),
        className: `h-1 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-[#B8FF00]" : "w-6 bg-white/30 hover:bg-white/50"}`,
        "aria-label": `Go to slide ${index + 1}`
      },
      index
    )) })
  ] });
}

const mainCategories = [
  {
    title: "Botanical Extracts",
    value: "botanical-extracts",
    icon: Leaf,
    description: "Natural plant-based extracts and compounds"
  },
  {
    title: "Fruit & Vegetable Powders",
    value: "fruit-vegetable-powders",
    icon: Apple,
    description: "Premium quality fruit and vegetable powders"
  },
  {
    title: "Peptides",
    value: "peptides",
    icon: Pill,
    description: "High-purity peptide compounds"
  },
  {
    title: "Custom Solutions",
    value: "custom-solutions",
    icon: FlaskConical,
    description: "Tailored formulations for your needs"
  }
];
function CategoryGrid({ categories }) {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-gradient-to-b from-[#0A0E0D] to-[#0F1612]", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-3xl md:text-4xl font-bold text-white mb-4",
          children: "Browse by Category"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          className: "text-gray-400 max-w-2xl mx-auto",
          children: "Explore our comprehensive range of pharmaceutical ingredients and custom solutions"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto", children: mainCategories.map((category, index) => {
      const Icon = category.icon;
      return /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1, duration: 0.4 },
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: `/products?parentCategory=${category.value}`,
              className: "group block h-full",
              children: /* @__PURE__ */ jsx("div", { className: "glass h-full rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-[#B8FF00]/30 border border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-lg bg-[#B8FF00]/10 flex items-center justify-center group-hover:bg-[#B8FF00]/20 transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "w-7 h-7 text-[#B8FF00]" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white group-hover:text-[#B8FF00] transition-colors", children: category.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mt-1", children: category.description })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-5 h-5 text-[#B8FF00]",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 5l7 7-7 7"
                      }
                    )
                  }
                ) })
              ] }) })
            }
          )
        },
        category.value
      );
    }) })
  ] }) });
}

function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

function ContactCard() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "glass-strong rounded-xl p-6 border border-white/10",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-[#B8FF00]/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6 text-[#B8FF00]" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white", children: "Need Help?" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mb-6", children: "Our team is here to assist you in finding the perfect solution for your needs." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 mb-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-[#B8FF00]" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:info@cospep.com", className: "text-gray-300 hover:text-[#B8FF00] transition-colors", children: "info@cospep.com" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-[#B8FF00]" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+8618220916763", className: "text-gray-300 hover:text-[#B8FF00] transition-colors", children: "+86 182 2091 6763" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            className: "w-full bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold",
            asChild: true,
            children: /* @__PURE__ */ jsx(Link, { href: "/contact", children: "Contact Us" })
          }
        )
      ]
    }
  );
}

const certifications = [
  { id: "gmp", label: "cGMP Certified" },
  { id: "fda", label: "FDA Approved" },
  { id: "organic", label: "Organic" },
  { id: "iso", label: "ISO Certified" },
  { id: "halal", label: "Halal" },
  { id: "kosher", label: "Kosher" }
];
function FilterSidebar({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get("categories")?.split(",").filter(Boolean) || []
  );
  const [selectedCertifications, setSelectedCertifications] = useState(
    searchParams.get("certifications")?.split(",").filter(Boolean) || []
  );
  const [readyToShip, setReadyToShip] = useState(searchParams.get("stockStatus") === "Ready to Ship");
  const parentCategory = searchParams.get("parentCategory") || "";
  const filteredCategories = parentCategory ? categories.filter((cat) => cat.parentCategory === parentCategory) : categories;
  useEffect(() => {
    const handler = setTimeout(() => {
      updateFilters();
    }, 500);
    return () => clearTimeout(handler);
  }, [search, selectedCategories, selectedCertifications, readyToShip]);
  const updateFilters = () => {
    const params = new URLSearchParams(window.location.search);
    if (search) params.set("search", search);
    else params.delete("search");
    if (selectedCategories.length > 0) params.set("categories", selectedCategories.join(","));
    else params.delete("categories");
    if (selectedCertifications.length > 0) params.set("certifications", selectedCertifications.join(","));
    else params.delete("certifications");
    if (readyToShip) params.set("stockStatus", "Ready to Ship");
    else params.delete("stockStatus");
    if (parentCategory) params.set("parentCategory", parentCategory);
    const newSearch = params.toString();
    const currentSearch = window.location.search.replace(/^\?/, "");
    if (newSearch !== currentSearch) {
      router.push(`?${newSearch}`);
    }
  };
  const toggleCategory = (slug) => {
    setSelectedCategories(
      (prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };
  const toggleCertification = (id) => {
    setSelectedCertifications(
      (prev) => prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };
  const clearAllFilters = () => {
    setSearch("");
    setSelectedCategories([]);
    setSelectedCertifications([]);
    setReadyToShip(false);
    router.push("/products");
  };
  const hasActiveFilters = search || selectedCategories.length > 0 || selectedCertifications.length > 0 || readyToShip;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white", children: "Search Products" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          placeholder: "Search by name or CAS...",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          className: "bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00]"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "bg-white/10" }),
    /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, defaultValue: "categories", children: /* @__PURE__ */ jsxs(AccordionItem, { value: "categories", className: "border-white/10", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-white hover:text-[#B8FF00] hover:no-underline", children: "Categories" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-2", children: filteredCategories.map((cat) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            id: cat.slug.current,
            checked: selectedCategories.includes(cat.slug.current),
            onCheckedChange: () => toggleCategory(cat.slug.current),
            className: "border-white/30 data-[state=checked]:bg-[#B8FF00] data-[state=checked]:border-[#B8FF00]"
          }
        ),
        /* @__PURE__ */ jsx(
          Label,
          {
            htmlFor: cat.slug.current,
            className: "text-sm font-normal text-gray-300 cursor-pointer hover:text-white",
            children: cat.title
          }
        )
      ] }, cat.slug.current)) }) })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "bg-white/10" }),
    /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, defaultValue: "certifications", children: /* @__PURE__ */ jsxs(AccordionItem, { value: "certifications", className: "border-white/10", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-white hover:text-[#B8FF00] hover:no-underline", children: "Certifications" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-2", children: certifications.map((cert) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            id: cert.id,
            checked: selectedCertifications.includes(cert.id),
            onCheckedChange: () => toggleCertification(cert.id),
            className: "border-white/30 data-[state=checked]:bg-[#B8FF00] data-[state=checked]:border-[#B8FF00]"
          }
        ),
        /* @__PURE__ */ jsx(
          Label,
          {
            htmlFor: cert.id,
            className: "text-sm font-normal text-gray-300 cursor-pointer hover:text-white",
            children: cert.label
          }
        )
      ] }, cert.id)) }) })
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "bg-white/10" }),
    /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, defaultValue: "stock", children: /* @__PURE__ */ jsxs(AccordionItem, { value: "stock", className: "border-white/10", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-white hover:text-[#B8FF00] hover:no-underline", children: "Stock Status" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 pt-2", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            id: "ready-stock",
            checked: readyToShip,
            onCheckedChange: (checked) => setReadyToShip(checked),
            className: "border-white/30 data-[state=checked]:bg-[#B8FF00] data-[state=checked]:border-[#B8FF00]"
          }
        ),
        /* @__PURE__ */ jsx(
          Label,
          {
            htmlFor: "ready-stock",
            className: "text-sm font-normal text-gray-300 cursor-pointer hover:text-white",
            children: "Ready to Ship"
          }
        )
      ] }) })
    ] }) }),
    hasActiveFilters && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Separator, { className: "bg-white/10" }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          onClick: clearAllFilters,
          className: "w-full border-white/20 text-white hover:bg-white/10 hover:text-[#B8FF00]",
          children: [
            /* @__PURE__ */ jsx(X, { className: "w-4 h-4 mr-2" }),
            "Clear All Filters"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "bg-white/10" }),
    /* @__PURE__ */ jsx(ContactCard, {})
  ] });
}

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  type: z.string(),
  productName: z.string().optional(),
  quantity: z.string().optional(),
  targetPrice: z.string().optional(),
  message: z.string().optional(),
  website: z.string().optional()
  // Honeypot field
});
function RequestForm() {
  const locale = useLocale();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      type: "Sourcing Request",
      productName: "",
      quantity: "",
      targetPrice: "",
      message: "",
      website: ""
      // Honeypot field
    }
  });
  const onSubmit = useCallback(async (values) => {
    if (!executeRecaptcha) {
      toast.error("reCAPTCHA not ready. Please try again.");
      return;
    }
    try {
      const recaptchaToken = await executeRecaptcha("submit_inquiry");
      const formData = new FormData();
      formData.append("locale", locale);
      formData.append("recaptchaToken", recaptchaToken);
      Object.entries(values).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      const response = await fetch("/api/submit-inquiry", {
        method: "POST",
        body: formData
      });
      const result = await response.json();
      if (result.success) {
        toast.success(result.message);
        form.reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again.");
    }
  }, [executeRecaptcha, locale, form]);
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "max-w-4xl mx-auto",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Online Request Submission" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 max-w-2xl mx-auto", children: "Fill out the form below and our team will get back to you within 24 hours" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "glass-strong rounded-2xl p-8 md:p-10", children: /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsx(
              FormField,
              {
                control: form.control,
                name: "name",
                render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxs(FormLabel, { className: "text-white", children: [
                    "Full Name ",
                    /* @__PURE__ */ jsx("span", { className: "text-[#B8FF00]", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                    Input,
                    {
                      placeholder: "John Doe",
                      ...field,
                      className: "h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00]"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              FormField,
              {
                control: form.control,
                name: "email",
                render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxs(FormLabel, { className: "text-white", children: [
                    "Email Address ",
                    /* @__PURE__ */ jsx("span", { className: "text-[#B8FF00]", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                    Input,
                    {
                      type: "email",
                      placeholder: "john@company.com",
                      ...field,
                      className: "h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00]"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsx(
              FormField,
              {
                control: form.control,
                name: "company",
                render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsx(FormLabel, { className: "text-white", children: "Company Name" }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                    Input,
                    {
                      placeholder: "Company Inc.",
                      ...field,
                      className: "h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00]"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              FormField,
              {
                control: form.control,
                name: "phone",
                render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsx(FormLabel, { className: "text-white", children: "Phone Number" }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                    Input,
                    {
                      type: "tel",
                      placeholder: "+1 (555) 123-4567",
                      ...field,
                      className: "h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00]"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsx(
              FormField,
              {
                control: form.control,
                name: "productName",
                render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsx(FormLabel, { className: "text-white", children: "Product of Interest" }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                    Input,
                    {
                      placeholder: "e.g., Bio-Active Peptides",
                      ...field,
                      className: "h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00]"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              FormField,
              {
                control: form.control,
                name: "quantity",
                render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsx(FormLabel, { className: "text-white", children: "Quantity / MOQ" }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                    Input,
                    {
                      placeholder: "e.g., 100kg",
                      ...field,
                      className: "h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00]"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            FormField,
            {
              control: form.control,
              name: "message",
              render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                /* @__PURE__ */ jsx(FormLabel, { className: "text-white", children: "Message / Requirements" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                  Textarea,
                  {
                    rows: 5,
                    placeholder: "Please provide any additional details about your requirements...",
                    ...field,
                    className: "bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00] resize-none"
                  }
                ) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            FormField,
            {
              control: form.control,
              name: "website",
              render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "hidden", children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Website" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                  Input,
                  {
                    ...field,
                    autoComplete: "off",
                    tabIndex: -1
                  }
                ) })
              ] })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center pt-4 gap-3", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "submit",
                disabled: form.formState.isSubmitting,
                className: "bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold px-12 py-6 text-lg group",
                children: form.formState.isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-5 w-5 animate-spin" }),
                  "Submitting..."
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  "Submit Request",
                  /* @__PURE__ */ jsx(Send, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 text-center", children: [
              "This site is protected by reCAPTCHA and the Google",
              " ",
              /* @__PURE__ */ jsx("a", { href: "https://policies.google.com/privacy", target: "_blank", rel: "noopener noreferrer", className: "underline hover:text-gray-400", children: "Privacy Policy" }),
              " ",
              "and",
              " ",
              /* @__PURE__ */ jsx("a", { href: "https://policies.google.com/terms", target: "_blank", rel: "noopener noreferrer", className: "underline hover:text-gray-400", children: "Terms of Service" }),
              " ",
              "apply."
            ] })
          ] })
        ] }) }) })
      ]
    }
  ) }) });
}

let i18n$1 = undefined;
if (manifest.i18n) {
 i18n$1 = {
   defaultLocale: manifest.i18n.defaultLocale,
   locales: manifest.i18n.locales,
   routing: fromRoutingStrategy(manifest.i18n.strategy, manifest.i18n.fallbackType),
   fallback: manifest.i18n.fallback,
   domains: manifest.i18n.domains,
 };
}
if (manifest.image) {
  ({
    objectFit: manifest.image.objectFit,
    objectPosition: manifest.image.objectPosition,
    layout: manifest.image.layout,
  });
}

manifest.base;
const build$1 = {
  server: new URL(manifest.buildServerDir),
  client: new URL(manifest.buildClientDir),
  format: manifest.buildFormat,
};

new URL(manifest.cacheDir);
new URL(manifest.outDir);
new URL(manifest.publicDir);
new URL(manifest.srcDir);
new URL(manifest.rootDir);
const trailingSlash$1 = manifest.trailingSlash;
manifest.site;
manifest.compressHTML;

const config = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  build: build$1,
  get i18n () { return i18n$1; },
  trailingSlash: trailingSlash$1
}, Symbol.toStringTag, { value: 'Module' }));

const { trailingSlash, i18n, build } = config;
const { format } = build;
const { defaultLocale, locales, domains, fallback, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
toFallbackType(routing);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Products;
  const { lang: langParam } = Astro2.params;
  const lang = langParam || "en";
  const t = useTranslations(lang);
  const searchParams = Astro2.url.searchParams;
  const search = searchParams.get("search") || "";
  const categoriesParam = searchParams.get("categories") || "";
  const stockStatus = searchParams.get("stockStatus") || "";
  const parentCategory = searchParams.get("parentCategory") || "";
  const [products, categories, settings] = await Promise.all([
    getProducts(
      search || void 0,
      categoriesParam || void 0,
      stockStatus || void 0,
      parentCategory || void 0
    ),
    getCategories(),
    getSettings()
  ]);
  const title = t("nav.products") + " | COSPEP";
  const description = "Explore our wide range of high-quality peptides and plant extracts. Direct from manufacturer with guaranteed purity.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": title,
    "description": description,
    "url": Astro2.url.href,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": products.slice(0, 10).map((p, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${Astro2.url.origin}${getRelativeLocaleUrl(lang, `products/${p.slug.current}`)}`,
        "name": p.name
      }))
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", '<main class="flex min-h-screen flex-col bg-[#0A0E0D]">  ', ' <section class="py-12 md:py-20"> <div class="container mx-auto px-4 md:px-6"> <div class="flex flex-col lg:flex-row gap-12">  <aside class="w-full lg:w-80 flex-shrink-0"> <div class="sticky top-24"> ', ' </div> </aside>  <div class="flex-1 space-y-12">  ', '  <div class="space-y-8"> <div class="flex items-center justify-between border-b border-white/10 pb-6"> <h2 class="text-2xl font-bold text-white"> ', " Products Found\n</h2> </div> ", " </div> </div> </div> </div> </section>  ", " </main> "])), unescapeHTML(JSON.stringify(jsonLd)), maybeRenderHead(), renderComponent($$result2, "ProductsHeroCarousel", ProductsHeroCarousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/products/products-hero-carousel", "client:component-export": "ProductsHeroCarousel" }), renderComponent($$result2, "FilterSidebar", FilterSidebar, { "client:load": true, "categories": categories, "client:component-hydration": "load", "client:component-path": "@/components/products/filter-sidebar", "client:component-export": "FilterSidebar" }), !search && !categoriesParam && !stockStatus && !parentCategory && renderTemplate`${renderComponent($$result2, "CategoryGrid", CategoryGrid, { "client:load": true, "categories": categories, "client:component-hydration": "load", "client:component-path": "@/components/products/category-grid", "client:component-export": "CategoryGrid" })}`, products.length, products.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"> ${products.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", ProductCard, { "client:visible": true, "product": product, "client:component-hydration": "visible", "client:component-path": "@/components/products/product-card", "client:component-export": "ProductCard" })}`)} </div>` : renderTemplate`<div class="py-20 text-center glass rounded-2xl border border-dashed border-white/10"> <h3 class="text-xl text-gray-400 mb-4">No products found matching your criteria</h3> <p class="text-gray-500">Try adjusting your filters or search terms</p> </div>`, renderComponent($$result2, "RequestForm", RequestForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/products/request-form", "client:component-export": "RequestForm" })) })}`;
}, "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/products.astro", void 0);

const $$file = "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/products.astro";
const $$url = "/[...lang]/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Products,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
