import { c as createComponent } from './astro-component_DJUp-8MJ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './entrypoint_C_9vr8UG.mjs';
import { m as useTranslations, I as Image, B as Button, L as Link, a as useLocale, n as getSiteSettings, $ as $$BaseLayout } from './BaseLayout_DFgKn8dd.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { LazyMotion, domAnimation, AnimatePresence, m, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Award, Shield, FlaskConical, Globe, Check, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { c as client } from './sanity_5UM8X-_V.mjs';

function HeroSection() {
  const t = useTranslations("home.hero");
  const tCommon = useTranslations("common");
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselData = [
    {
      image: "/images/hero-carousel-1.webp",
      badge: t("slides.0.badge"),
      title: t("slides.0.title"),
      highlight: t("slides.0.highlight"),
      description: t("slides.0.description")
    },
    {
      image: "/images/hero-carousel-2.webp",
      badge: t("slides.1.badge"),
      title: t("slides.1.title"),
      highlight: t("slides.1.highlight"),
      description: t("slides.1.description")
    },
    {
      image: "/images/hero-carousel-3.webp",
      badge: t("slides.2.badge"),
      title: t("slides.2.title"),
      highlight: t("slides.2.highlight"),
      description: t("slides.2.description")
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5e3);
    return () => clearInterval(timer);
  }, []);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };
  return /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsxs("section", { className: "relative h-screen bg-[#0A0E0D] flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: /* @__PURE__ */ jsx(
        m.div,
        {
          initial: currentSlide === 0 ? { opacity: 1 } : { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 1 },
          className: "absolute inset-0",
          children: /* @__PURE__ */ jsx(
            Image,
            {
              src: carouselData[currentSlide].image,
              alt: carouselData[currentSlide].title,
              fill: true,
              priority: currentSlide === 0,
              sizes: "100vw",
              className: "object-cover"
            }
          )
        },
        currentSlide
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#0A0E0D]/70 via-[#0A0E0D]/40 to-[#0A0E0D]/60" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-emerald-950/10 to-transparent" })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: prevSlide,
        className: "absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-subtle hover:bg-white/10 flex items-center justify-center transition-all group",
        "aria-label": "Previous slide",
        children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-6 h-6 text-white group-hover:text-[#B8FF00] transition-colors" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: nextSlide,
        className: "absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-subtle hover:bg-white/10 flex items-center justify-center transition-all group",
        "aria-label": "Next slide",
        children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-6 h-6 text-white group-hover:text-[#B8FF00] transition-colors" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2", children: carouselData.map((_, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setCurrentSlide(index),
        className: `h-1 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-[#B8FF00]" : "w-6 bg-white/30 hover:bg-white/50"}`,
        "aria-label": `Go to slide ${index + 1}`
      },
      index
    )) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
      m.div,
      {
        initial: currentSlide === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.6 },
        className: "space-y-8",
        children: [
          /* @__PURE__ */ jsx(
            m.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 0.2, duration: 0.5 },
              className: "inline-block",
              children: /* @__PURE__ */ jsxs("div", { className: "glass px-4 py-2 rounded-full text-sm text-white/90 uppercase tracking-wider", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#B8FF00]", children: "●" }),
                " ",
                carouselData[currentSlide].badge
              ] })
            }
          ),
          /* @__PURE__ */ jsxs("h1", { className: "text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight", children: [
            carouselData[currentSlide].title,
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsxs("span", { className: "relative inline-block", children: [
              /* @__PURE__ */ jsx("span", { className: "relative z-10 text-[#B8FF00]", children: carouselData[currentSlide].highlight }),
              /* @__PURE__ */ jsx(
                m.span,
                {
                  initial: { width: 0 },
                  animate: { width: "100%" },
                  transition: { delay: 0.3, duration: 0.8 },
                  className: "absolute bottom-2 left-0 h-3 bg-[#B8FF00]/20 -z-0"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            m.p,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.3, duration: 0.6 },
              className: "text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",
              children: carouselData[currentSlide].description
            }
          ),
          /* @__PURE__ */ jsx(
            m.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6, duration: 0.6 },
              className: "flex flex-col sm:flex-row items-center justify-center gap-4 pt-4",
              children: /* @__PURE__ */ jsx(
                Button,
                {
                  size: "lg",
                  className: "bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold px-8 py-6 text-lg group",
                  asChild: true,
                  children: /* @__PURE__ */ jsxs(Link, { href: "/about", children: [
                    tCommon("learnMore"),
                    /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                  ] })
                }
              )
            }
          )
        ]
      },
      currentSlide
    ) }) })
  ] }) });
}

function TrustStatsBar() {
  const t = useTranslations("home.stats");
  const stats = [
    {
      icon: Award,
      label: t("cgmp.label"),
      description: t("cgmp.description")
    },
    {
      icon: Shield,
      label: t("fda.label"),
      description: t("fda.description")
    },
    {
      icon: FlaskConical,
      label: t("tested.label"),
      description: t("tested.description")
    },
    {
      icon: Globe,
      label: t("shipping.label"),
      description: t("shipping.description")
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "relative -mt-20 z-20", children: /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsx(
    m.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: "glass rounded-2xl overflow-hidden",
      children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10", children: stats.map((stat, index) => {
        const Icon = stat.icon;
        return /* @__PURE__ */ jsx(
          m.div,
          {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1, duration: 0.5 },
            className: "p-8 text-center group hover:bg-white/5 transition-all duration-300",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-[#B8FF00]/10 flex items-center justify-center group-hover:bg-[#B8FF00]/20 transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "w-7 h-7 text-[#B8FF00]" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-1", children: stat.label }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: stat.description })
              ] })
            ] })
          },
          stat.label
        );
      }) })
    }
  ) }) }) });
}

function ProductEcosystem() {
  const t = useTranslations("home.products");
  useLocale();
  const products = [
    {
      title: t("items.0.title"),
      description: t("items.0.description"),
      image: "/images/product-peptides.webp",
      link: "/products?category=Peptide"
    },
    {
      title: t("items.1.title"),
      description: t("items.1.description"),
      image: "/images/product-intermediates.webp",
      link: "/products?category=Pharmaceutical%20Intermediates"
    },
    {
      title: t("items.2.title"),
      description: t("items.2.description"),
      image: "/images/product-plants.webp",
      link: "/products?category=Natural%20Plant%20Extracts"
    },
    {
      title: t("items.3.title"),
      description: t("items.3.description"),
      image: "/images/product-supplements.webp",
      link: "/custom-manufacturing"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-b from-background to-[#0F1612]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx(
        motion.span,
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "inline-block px-4 py-2 rounded-full border border-[#B8FF00]/20 text-[#B8FF00] text-sm font-medium mb-4 uppercase tracking-wider",
          children: t("badge")
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          className: "text-4xl md:text-5xl font-bold text-white mb-4",
          children: t("title")
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.2 },
          className: "text-gray-400 text-lg max-w-2xl mx-auto",
          children: t("description")
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: products.map((product, index) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1, duration: 0.5 },
        children: /* @__PURE__ */ jsx(Link, { href: product.link, className: "group block h-full", children: /* @__PURE__ */ jsxs("div", { className: "relative h-80 rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 h-full w-full", children: [
            /* @__PURE__ */ jsx(
              Image,
              {
                src: product.image,
                alt: product.title,
                className: "object-cover transition-transform duration-500 group-hover:scale-110 h-full w-full"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0A0E0D] via-[#0A0E0D]/60 to-transparent" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative h-full flex flex-col justify-end p-8", children: /* @__PURE__ */ jsxs("div", { className: "glass-subtle rounded-xl p-6 group-hover:bg-white/10 transition-all duration-300", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-2 group-hover:text-[#B8FF00] transition-colors", children: product.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: product.description }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center text-[#B8FF00] font-medium group-hover:translate-x-2 transition-transform", children: [
              "Learn More",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
            ] })
          ] }) })
        ] }) })
      },
      product.title
    )) })
  ] }) });
}

function ManufacturingSection() {
  const t = useTranslations("home.manufacturing");
  useLocale();
  const features = [
    t("features.0"),
    t("features.1"),
    t("features.2"),
    t("features.3"),
    t("features.4"),
    t("features.5")
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-[#0A0E0D]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mb-16",
        children: /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-2 rounded-full border border-[#B8FF00]/20 text-[#B8FF00] text-sm font-medium uppercase tracking-wider", children: t("badge") })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6 leading-tight whitespace-pre-line", children: t("title") }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg mb-8 leading-relaxed", children: t("description") }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8", children: features.map((feature, index) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -10 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: index * 0.1, duration: 0.4 },
                className: "flex items-start gap-3",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mt-1 w-5 h-5 rounded-full bg-[#B8FF00]/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Check, { className: "w-3 h-3 text-[#B8FF00]" }) }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: feature })
                ]
              },
              feature
            )) }),
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "lg",
                className: "bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold px-8",
                asChild: true,
                children: /* @__PURE__ */ jsxs(Link, { href: "/custom-manufacturing", children: [
                  t("cta"),
                  /* @__PURE__ */ jsx(Sparkles, { className: "ml-2 h-5 w-5" })
                ] })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "relative",
          children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl overflow-hidden glass group", children: [
            /* @__PURE__ */ jsx(
              Image,
              {
                src: "/images/manufacturing.webp",
                alt: "Manufacturing Facility",
                className: "w-full h-auto"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { scale: 0.9, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: true },
                transition: { delay: 0.3, duration: 0.5 },
                className: "absolute bottom-8 right-8",
                children: /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-2xl p-6 text-center", children: [
                  /* @__PURE__ */ jsx(Award, { className: "w-8 h-8 text-[#B8FF00] mx-auto mb-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-1", children: "500+ Clients" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "15+ Year" })
                ] })
              }
            )
          ] })
        }
      )
    ] })
  ] }) });
}

function NewsBlogs() {
  useLocale();
  const blogPosts = [
    {
      title: "COSPEP Wins Best Innovation Award at Global Pharma 2026",
      category: "Company News",
      image: "/images/blog-1.webp",
      date: "January 15, 2026",
      link: ""
      // Disabled link
    },
    {
      title: "Breakthrough in Peptide Stability: New Research Published",
      category: "R&D Research",
      image: "/images/blog-2.webp",
      date: "December 28, 2025",
      link: ""
      // Disabled link
    },
    {
      title: "Launching Our New Sustainable Extraction Facility in Oregon",
      category: "Sustainability",
      image: "/images/blog-3.webp",
      date: "December 15, 2025",
      link: "/resources/sustainability"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          motion.span,
          {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "inline-block px-4 py-2 rounded-full border border-[#B8FF00]/20 text-[#B8FF00] text-sm font-medium mb-4 uppercase tracking-wider",
            children: "Latest Updates"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.1 },
            className: "text-4xl md:text-5xl font-bold text-white",
            children: "News & Blogs"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { delay: 0.2 },
          className: "hidden md:flex gap-2",
          children: [
            /* @__PURE__ */ jsx("button", { className: "w-12 h-12 rounded-full glass-subtle hover:bg-white/10 flex items-center justify-center transition-all group", children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5 text-white group-hover:text-[#B8FF00]" }) }),
            /* @__PURE__ */ jsx("button", { className: "w-12 h-12 rounded-full glass-subtle hover:bg-white/10 flex items-center justify-center transition-all group", children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5 text-white group-hover:text-[#B8FF00]" }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: blogPosts.map((post, index) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1, duration: 0.5 },
        children: post.link ? /* @__PURE__ */ jsx(Link, { href: post.link, className: "group block h-full", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden shrink-0", children: [
            /* @__PURE__ */ jsx(
              Image,
              {
                src: post.image,
                alt: post.title,
                className: "object-cover transition-transform duration-500 group-hover:scale-110 h-full w-full"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full bg-[#B8FF00] text-[#0A0E0D] text-xs font-semibold uppercase tracking-wider", children: post.category }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col flex-grow", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-2", children: post.date }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#B8FF00] transition-colors line-clamp-2", children: post.title }),
            /* @__PURE__ */ jsxs("div", { className: "mt-auto flex items-center text-[#B8FF00] text-sm font-medium", children: [
              "Read More",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ] })
          ] })
        ] }) }) : /* @__PURE__ */ jsx("div", { className: "group block h-full cursor-default", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden shrink-0", children: [
            /* @__PURE__ */ jsx(
              Image,
              {
                src: post.image,
                alt: post.title,
                className: "object-cover transition-transform duration-500 group-hover:scale-110 h-full w-full"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full bg-[#B8FF00] text-[#0A0E0D] text-xs font-semibold uppercase tracking-wider", children: post.category }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col flex-grow", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-2", children: post.date }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#B8FF00] transition-colors line-clamp-2", children: post.title }),
            /* @__PURE__ */ jsxs("div", { className: "mt-auto flex items-center text-[#B8FF00] text-sm font-medium opacity-50 cursor-not-allowed", children: [
              "Read More",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
            ] })
          ] })
        ] }) })
      },
      post.title
    )) })
  ] }) });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
function getStaticPaths() {
  return [
    { params: { lang: void 0 } },
    { params: { lang: "es" } },
    { params: { lang: "ru" } },
    { params: { lang: "ar" } }
  ];
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { lang: langParam } = Astro2.params;
  const settings = await client.fetch(getSiteSettings);
  const title = "Top Chinese Peptide Suppliers & Plant Extracts | COSPEP";
  const description = "Looking for high-quality peptides from China? COSPEP is a leading manufacturer offering direct peptide wholesale China and premium plant extracts for global B2B buyers.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "COSPEP",
    "url": "https://cospep.com",
    "logo": "https://cospep.com/logo.webp",
    "description": settings?.heroSubtitle || "Pure, Potent & Naturally Derived Ingredients",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": settings?.address || "Xi'an, Shaanxi, China"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": settings?.whatsapp || "",
      "contactType": "customer service",
      "email": settings?.contactEmail
    },
    "sameAs": [
      "https://www.linkedin.com/company/cospep"
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", '<main class="flex min-h-screen flex-col"> ', " ", " ", " ", " ", " </main> "])), unescapeHTML(JSON.stringify(jsonLd)), maybeRenderHead(), renderComponent($$result2, "HeroSection", HeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/home/hero-section", "client:component-export": "HeroSection" }), renderComponent($$result2, "TrustStatsBar", TrustStatsBar, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/home/trust-stats-bar", "client:component-export": "TrustStatsBar" }), renderComponent($$result2, "ProductEcosystem", ProductEcosystem, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/home/product-ecosystem", "client:component-export": "ProductEcosystem" }), renderComponent($$result2, "ManufacturingSection", ManufacturingSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/home/manufacturing-section", "client:component-export": "ManufacturingSection" }), renderComponent($$result2, "NewsBlogs", NewsBlogs, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/home/news-blogs", "client:component-export": "NewsBlogs" })) })}`;
}, "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang].astro", void 0);

const $$file = "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang].astro";
const $$url = "/[...lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
