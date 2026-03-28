import { c as createComponent } from './astro-component_DJUp-8MJ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './entrypoint_C_9vr8UG.mjs';
import { I as Image, c as cn, B as Button, a as useLocale, e as getProductBySlug, $ as $$BaseLayout } from './BaseLayout_DFgKn8dd.mjs';
import { P as ProductCard, B as Badge } from './product-card_BM4u2Kwq.mjs';
import { ChevronRight, Check, Circle, Share2, Link2, Heart, Download, ShieldCheck, FileText, Truck } from 'lucide-react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva } from 'class-variance-authority';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl, I as Input, e as FormMessage, T as Textarea } from './textarea_DYF5ZzQM.mjs';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, R as ReCaptchaProvider } from './recaptcha-provider_CHVKK2P4.mjs';
import { PortableText } from '@portabletext/react';
import { u as urlFor } from './sanity_5UM8X-_V.mjs';
import { B as Breadcrumbs } from './Breadcrumbs_B2xFpkYI.mjs';

function ImageZoom({ src, alt, className = "" }) {
  return /* @__PURE__ */ jsx("div", { className: `relative overflow-hidden h-full w-full ${className}`, children: /* @__PURE__ */ jsx(
    Image,
    {
      src,
      alt,
      className: "object-cover transition-transform duration-500 ease-out hover:scale-110 h-full w-full"
    }
  ) });
}

const FAVORITES_KEY = "cospep_favorites";
function useFavorites() {
  const [favorites, setFavorites] = useState([]);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    loadFavorites();
  }, []);
  const loadFavorites = useCallback(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setFavorites(parsed.map((f) => f.slug));
      }
    } catch (error) {
      console.error("Failed to load favorites:", error);
      setFavorites([]);
    }
  }, []);
  const saveFavorites = useCallback((slugs) => {
    try {
      const products = slugs.map((slug) => ({
        slug,
        addedAt: Date.now()
      }));
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(products));
    } catch (error) {
      console.error("Failed to save favorites:", error);
    }
  }, []);
  const addFavorite = useCallback((slug) => {
    setFavorites((prev) => {
      if (prev.includes(slug)) return prev;
      const updated = [...prev, slug];
      saveFavorites(updated);
      return updated;
    });
  }, [saveFavorites]);
  const removeFavorite = useCallback((slug) => {
    setFavorites((prev) => {
      const updated = prev.filter((s) => s !== slug);
      saveFavorites(updated);
      return updated;
    });
  }, [saveFavorites]);
  const toggleFavorite = useCallback((slug) => {
    if (favorites.includes(slug)) {
      removeFavorite(slug);
      return false;
    } else {
      addFavorite(slug);
      return true;
    }
  }, [favorites, addFavorite, removeFavorite]);
  const isFavorite = useCallback((slug) => {
    return favorites.includes(slug);
  }, [favorites]);
  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    isClient
    // Prevent hydration mismatch
  };
}

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const FacebookIcon = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    children: /* @__PURE__ */ jsx("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" })
  }
);
const TwitterIcon = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    children: /* @__PURE__ */ jsx("path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" })
  }
);
const LinkedinIcon = ({ className }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
      /* @__PURE__ */ jsx("rect", { width: "4", height: "12", x: "2", y: "9" }),
      /* @__PURE__ */ jsx("circle", { cx: "4", cy: "4", r: "2" })
    ]
  }
);
function ShareMenu({ productSlug, productName, productDescription }) {
  const [isOpen, setIsOpen] = useState(false);
  const getShareUrl = () => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/products/${productSlug}`;
  };
  const copyToClipboard = async () => {
    const url = getShareUrl();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = url;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand("copy");
          toast.success("Link copied to clipboard!");
        } catch (err) {
          toast.error("Failed to copy link");
        } finally {
          document.body.removeChild(textArea);
        }
      }
      setIsOpen(false);
    } catch (error) {
      console.error("Copy failed:", error);
      toast.error("Failed to copy link");
    }
  };
  const shareToLinkedIn = () => {
    const url = getShareUrl();
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, "_blank", "width=600,height=600");
    setIsOpen(false);
    toast.success("Opening LinkedIn share...");
  };
  const shareToTwitter = () => {
    const url = getShareUrl();
    const text = `Check out ${productName} - High-quality pharmaceutical ingredient`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, "_blank", "width=600,height=600");
    setIsOpen(false);
    toast.success("Opening X (Twitter) share...");
  };
  const shareToFacebook = () => {
    const url = getShareUrl();
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, "_blank", "width=600,height=600");
    setIsOpen(false);
    toast.success("Opening Facebook share...");
  };
  return /* @__PURE__ */ jsxs(DropdownMenu, { open: isOpen, onOpenChange: setIsOpen, children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
      "button",
      {
        className: "w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 active:scale-95",
        "aria-label": "Share product",
        title: "Share product",
        children: /* @__PURE__ */ jsx(Share2, { className: "w-5 h-5 text-white" })
      }
    ) }),
    /* @__PURE__ */ jsxs(
      DropdownMenuContent,
      {
        align: "start",
        className: "w-56 bg-[#0F1612]/95 backdrop-blur-lg border border-white/10",
        children: [
          /* @__PURE__ */ jsx("div", { className: "px-2 py-1.5 text-sm font-semibold text-white", children: "Share this product" }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, { className: "bg-white/10" }),
          /* @__PURE__ */ jsxs(
            DropdownMenuItem,
            {
              onClick: copyToClipboard,
              className: "flex items-center gap-3 px-3 py-2.5 cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white",
              children: [
                /* @__PURE__ */ jsx(Link2, { className: "w-4 h-4 text-[#B8FF00]" }),
                /* @__PURE__ */ jsx("span", { children: "Copy Link" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, { className: "bg-white/10" }),
          /* @__PURE__ */ jsxs(
            DropdownMenuItem,
            {
              onClick: shareToLinkedIn,
              className: "flex items-center gap-3 px-3 py-2.5 cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white",
              children: [
                /* @__PURE__ */ jsx(LinkedinIcon, { className: "w-4 h-4 text-[#0A66C2]" }),
                /* @__PURE__ */ jsx("span", { children: "Share on LinkedIn" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            DropdownMenuItem,
            {
              onClick: shareToTwitter,
              className: "flex items-center gap-3 px-3 py-2.5 cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white",
              children: [
                /* @__PURE__ */ jsx(TwitterIcon, { className: "w-4 h-4 text-[#1DA1F2]" }),
                /* @__PURE__ */ jsx("span", { children: "Share on X (Twitter)" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            DropdownMenuItem,
            {
              onClick: shareToFacebook,
              className: "flex items-center gap-3 px-3 py-2.5 cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white",
              children: [
                /* @__PURE__ */ jsx(FacebookIcon, { className: "w-4 h-4 text-[#1877F2]" }),
                /* @__PURE__ */ jsx("span", { children: "Share on Facebook" })
              ]
            }
          )
        ]
      }
    )
  ] });
}

function ProductActions({ productSlug, productName, productDescription }) {
  const { isFavorite, toggleFavorite, isClient } = useFavorites();
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    if (isClient) {
      setIsFav(isFavorite(productSlug));
    }
  }, [isClient, isFavorite, productSlug]);
  const handleFavoriteClick = () => {
    const added = toggleFavorite(productSlug);
    setIsFav(added);
    if (added) {
      toast.success("Added to favorites!", {
        description: `${productName} has been added to your favorites.`
      });
    } else {
      toast.info("Removed from favorites", {
        description: `${productName} has been removed from your favorites.`
      });
    }
  };
  if (!isClient) {
    return /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white/20 transition-colors",
          disabled: true,
          children: /* @__PURE__ */ jsx(Heart, { className: "w-5 h-5 text-white" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full glass-strong flex items-center justify-center opacity-50", children: /* @__PURE__ */ jsx(ShareMenu, { productSlug, productName }) })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleFavoriteClick,
        className: "w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 active:scale-95",
        "aria-label": isFav ? "Remove from favorites" : "Add to favorites",
        title: isFav ? "Remove from favorites" : "Add to favorites",
        children: /* @__PURE__ */ jsx(
          Heart,
          {
            className: `w-5 h-5 transition-all ${isFav ? "fill-red-500 text-red-500" : "text-white"}`
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      ShareMenu,
      {
        productSlug,
        productName,
        productDescription
      }
    )
  ] });
}

function ProductImageCTAButtons() {
  const handleRequestDataSheet = () => {
    const tabsSection = document.getElementById("product-tabs");
    if (tabsSection) {
      tabsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const documentsTab = document.querySelector('[value="documents"]');
        if (documentsTab) documentsTab.click();
      }, 300);
    }
  };
  const handleContactSales = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 w-full mt-4 max-w-md", children: [
    /* @__PURE__ */ jsxs(
      Button,
      {
        size: "default",
        onClick: handleRequestDataSheet,
        className: "w-full bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold group",
        children: [
          "Request Data Sheet",
          /* @__PURE__ */ jsx(Download, { className: "ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "default",
        onClick: handleContactSales,
        className: "w-full border-white/20 text-white hover:bg-white/10 hover:border-[#B8FF00] hover:text-[#B8FF00] transition-colors",
        children: "Contact Sales"
      }
    )
  ] });
}

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      "data-orientation": orientation,
      orientation,
      className: cn(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        className
      ),
      ...props
    }
  );
}
const tabsListVariants = cva(
  "rounded-lg p-[3px] group-data-[orientation=horizontal]/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function TabsList({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      "data-variant": variant,
      className: cn(tabsListVariants({ variant }), className),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 data-[state=active]:text-foreground",
        "after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}

function ProductCTAButtons({ onRequestDataSheet, onContactSales }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 w-full mt-4", children: [
    /* @__PURE__ */ jsxs(
      Button,
      {
        size: "lg",
        onClick: onRequestDataSheet,
        className: "flex-1 bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold text-lg h-14 group",
        children: [
          "Request Data Sheet",
          /* @__PURE__ */ jsx(Download, { className: "ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "lg",
        onClick: onContactSales,
        className: "flex-1 border-white/20 text-white hover:bg-white/10 hover:border-[#B8FF00] hover:text-[#B8FF00] h-14 transition-colors",
        children: "Contact Sales"
      }
    )
  ] });
}

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  type: z.string().min(1, "Please select an inquiry type"),
  productName: z.string().optional(),
  targetPrice: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().optional()
  // Honeypot field
});
function ProductContactForm({ productName }) {
  const locale = useLocale();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      type: "Product Quote",
      productName: productName || "",
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
  return /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-2xl p-6 md:p-8 border border-white/10", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Contact Sales for This Product" }),
    /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "name",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "Your Name" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "John Doe",
                  ...field,
                  className: "bg-white/5 border-white/10 text-white placeholder:text-gray-500 hover:border-[#B8FF00]/50 transition-colors"
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
              /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "Email Address" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "john@company.com",
                  ...field,
                  className: "bg-white/5 border-white/10 text-white placeholder:text-gray-500 hover:border-[#B8FF00]/50 transition-colors"
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
          name: "company",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "Company Name" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Input,
              {
                placeholder: "Your Business Name",
                ...field,
                className: "bg-white/5 border-white/10 text-white placeholder:text-gray-500 hover:border-[#B8FF00]/50 transition-colors"
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "type",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "Inquiry Type" }),
              /* @__PURE__ */ jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { className: "bg-white/5 border-white/10 text-white", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select type" }) }) }),
                /* @__PURE__ */ jsxs(SelectContent, { className: "bg-[#0F1612] border-white/10 text-white", children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "Product Quote", children: "Product Quote" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Sourcing Request", children: "Sourcing Request" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "General", children: "General Inquiry" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "productName",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "Product Name" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "e.g. Curcumin 95%",
                  ...field,
                  className: "bg-white/5 border-white/10 text-white placeholder:text-gray-500 hover:border-[#B8FF00]/50 transition-colors"
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
          name: "targetPrice",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "Target Price / Budget (Optional)" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Input,
              {
                placeholder: "e.g. $25/kg",
                ...field,
                className: "bg-white/5 border-white/10 text-white placeholder:text-gray-500 hover:border-[#B8FF00]/50 transition-colors"
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
          name: "message",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "Message" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Textarea,
              {
                placeholder: "Please tell us about your requirements (Quantity, Spec, etc.)",
                className: "min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-gray-500 hover:border-[#B8FF00]/50 transition-colors",
                ...field
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
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "w-full bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold text-lg h-12 hover:scale-[1.02] transition-all",
          children: "Send Request"
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 text-center mt-3", children: [
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
    ] }) })
  ] });
}

function RecommendedProducts({ products }) {
  if (!products || products.length === 0) return null;
  return /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3 text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "hidden sm:block w-12 h-0.5 bg-gradient-to-r from-transparent to-[#B8FF00]" }),
      "Featured Products",
      /* @__PURE__ */ jsx("span", { className: "hidden sm:block w-12 h-0.5 bg-gradient-to-l from-transparent to-[#B8FF00]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: products.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product._id)) })
  ] });
}

function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsx(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}

function SpecTable({ specs, grade, usageRate, patentNo }) {
  return /* @__PURE__ */ jsx("div", { className: "rounded-md border border-white/10 overflow-hidden glass", children: /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx(TableHeader, { className: "bg-white/5", children: /* @__PURE__ */ jsxs(TableRow, { className: "hover:bg-transparent border-white/10", children: [
      /* @__PURE__ */ jsx(TableHead, { className: "text-gray-300", children: "Specification Item" }),
      /* @__PURE__ */ jsx(TableHead, { className: "text-gray-300", children: "Standard" })
    ] }) }),
    /* @__PURE__ */ jsxs(TableBody, { children: [
      grade && /* @__PURE__ */ jsxs(TableRow, { className: "border-white/10 hover:bg-white/5", children: [
        /* @__PURE__ */ jsx(TableCell, { className: "font-medium text-gray-200", children: "Grade" }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-gray-300", children: grade })
      ] }),
      usageRate && /* @__PURE__ */ jsxs(TableRow, { className: "border-white/10 hover:bg-white/5", children: [
        /* @__PURE__ */ jsx(TableCell, { className: "font-medium text-gray-200", children: "Recommended Usage" }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-gray-300", children: usageRate })
      ] }),
      patentNo && /* @__PURE__ */ jsxs(TableRow, { className: "border-white/10 hover:bg-white/5", children: [
        /* @__PURE__ */ jsx(TableCell, { className: "font-medium text-gray-200", children: "Patent Number" }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-gray-300", children: patentNo })
      ] }),
      specs && specs.length > 0 ? specs.map((spec, index) => /* @__PURE__ */ jsxs(TableRow, { className: "border-white/10 hover:bg-white/5", children: [
        /* @__PURE__ */ jsx(TableCell, { className: "font-medium text-gray-200", children: spec.includes(":") ? spec.split(":")[0] : `Property ${index + 1}` }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-gray-300", children: spec.includes(":") ? spec.split(":")[1] : spec })
      ] }, index)) : !grade && !usageRate && !patentNo && /* @__PURE__ */ jsx(TableRow, { className: "border-white/10", children: /* @__PURE__ */ jsx(TableCell, { colSpan: 2, className: "text-center text-gray-500 py-6", children: "No specifications available." }) })
    ] })
  ] }) });
}

const productDescriptionComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return /* @__PURE__ */ jsxs("div", { className: "my-6", children: [
        /* @__PURE__ */ jsx(
          Image,
          {
            src: urlFor(value).url(),
            alt: value.alt || "Product image",
            className: "rounded-lg w-full h-auto"
          }
        ),
        value.caption && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mt-2 text-center italic", children: value.caption })
      ] });
    },
    video: ({ value }) => {
      if (!value?.asset) return null;
      const videoUrl = typeof value.asset === "string" ? value.asset : "";
      return /* @__PURE__ */ jsxs("div", { className: "my-6", children: [
        /* @__PURE__ */ jsxs("video", { controls: true, className: "w-full rounded-lg", children: [
          /* @__PURE__ */ jsx("source", { src: videoUrl, type: "video/mp4" }),
          "Your browser does not support the video tag."
        ] }),
        value.caption && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mt-2 text-center italic", children: value.caption })
      ] });
    }
  }
};
function ProductDetailClient({ product, siteConfig }) {
  const [activeTab, setActiveTab] = useState("specs");
  const handleRequestDataSheet = () => {
    setActiveTab("documents");
    setTimeout(() => {
      const tabsSection = document.getElementById("product-tabs");
      if (tabsSection) {
        tabsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };
  const handleContactSales = () => {
    setTimeout(() => {
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };
  return /* @__PURE__ */ jsxs(ReCaptchaProvider, { children: [
    /* @__PURE__ */ jsxs("div", { id: "product-tabs", className: "glass-strong rounded-2xl p-6 md:p-8 border border-white/10 scroll-mt-20", children: [
      /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "space-y-8", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-3 max-w-[600px] bg-white/5 border border-white/10", children: [
          /* @__PURE__ */ jsx(
            TabsTrigger,
            {
              value: "specs",
              className: "data-[state=active]:bg-[#B8FF00] data-[state=active]:text-[#0A0E0D] text-gray-300",
              children: "Specifications"
            }
          ),
          /* @__PURE__ */ jsx(
            TabsTrigger,
            {
              value: "documents",
              className: "data-[state=active]:bg-[#B8FF00] data-[state=active]:text-[#0A0E0D] text-gray-300",
              children: "Documents"
            }
          ),
          /* @__PURE__ */ jsx(
            TabsTrigger,
            {
              value: "logistics",
              className: "data-[state=active]:bg-[#B8FF00] data-[state=active]:text-[#0A0E0D] text-gray-300",
              children: "Logistics"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "specs", className: "space-y-8", children: [
          product.functions && product.functions.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-white mb-4 flex items-center", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "mr-2 h-6 w-6 text-[#B8FF00]" }),
              "Functions / Benefits"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: product.functions.map((func, i) => /* @__PURE__ */ jsx(
              Badge,
              {
                className: "bg-[#B8FF00]/10 text-[#B8FF00] border border-[#B8FF00]/20 text-base py-2 px-4 hover:bg-[#B8FF00]/20 transition-colors",
                children: func
              },
              i
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Quality Specifications" }),
            /* @__PURE__ */ jsx("div", { className: "glass rounded-lg overflow-hidden border border-white/10", children: /* @__PURE__ */ jsx(
              SpecTable,
              {
                specs: product.specs || [],
                grade: product.grade,
                usageRate: product.usageRate,
                patentNo: product.patentNo
              }
            ) })
          ] }),
          product.description && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Description" }),
            Array.isArray(product.description) ? /* @__PURE__ */ jsx("div", { className: "prose prose-invert max-w-none text-gray-300", children: /* @__PURE__ */ jsx(
              PortableText,
              {
                value: product.description,
                components: productDescriptionComponents
              }
            ) }) : /* @__PURE__ */ jsx("p", { className: "text-gray-300 leading-relaxed", children: product.description })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "documents", className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-white flex items-center", children: [
            /* @__PURE__ */ jsx(FileText, { className: "mr-2 h-6 w-6 text-[#B8FF00]" }),
            "Technical Documents"
          ] }),
          product.documents && product.documents.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: product.documents.map((doc, i) => /* @__PURE__ */ jsxs(
              "a",
              {
                href: doc.file.asset.url,
                download: true,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "glass rounded-lg p-5 border border-white/10 hover:border-[#B8FF00]/50 transition-all cursor-pointer group",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "h-10 w-10 text-[#B8FF00] group-hover:scale-110 transition-transform" }),
                    /* @__PURE__ */ jsx(Download, { className: "h-5 w-5 text-gray-400 group-hover:text-[#B8FF00] transition-colors" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "font-medium text-white group-hover:text-[#B8FF00] transition-colors", children: doc.title }),
                  doc.file.asset.originalFilename && /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mt-2 truncate", children: doc.file.asset.originalFilename })
                ]
              },
              i
            )) }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Click any document to download or view" })
          ] }) : /* @__PURE__ */ jsxs("div", { className: "glass rounded-lg p-8 border border-white/10 text-center", children: [
            /* @__PURE__ */ jsx(FileText, { className: "h-16 w-16 text-gray-600 mx-auto mb-4" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "No technical documents available for this product yet." }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mt-2", children: "Contact us to request product documentation." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "logistics", className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-white flex items-center", children: [
            /* @__PURE__ */ jsx(Truck, { className: "mr-2 h-6 w-6 text-[#B8FF00]" }),
            "Packaging & Storage"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "glass rounded-lg p-6 border border-white/10", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Standard Packaging" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: (product.packaging && product.packaging.length > 0 ? product.packaging : siteConfig.packaging).map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-gray-300", children: [
                /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#B8FF00] mt-2 flex-shrink-0" }),
                item
              ] }, i)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "glass rounded-lg p-6 border border-white/10", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Storage Conditions" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: (product.storage && product.storage.length > 0 ? product.storage : siteConfig.storage).map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-gray-300", children: [
                /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#B8FF00] mt-2 flex-shrink-0" }),
                item
              ] }, i)) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        ProductCTAButtons,
        {
          onRequestDataSheet: handleRequestDataSheet,
          onContactSales: handleContactSales
        }
      )
    ] }),
    product.recommendedProducts && product.recommendedProducts.length > 0 && /* @__PURE__ */ jsx(RecommendedProducts, { products: product.recommendedProducts }),
    /* @__PURE__ */ jsx("div", { id: "contact-form", className: "scroll-mt-20", children: /* @__PURE__ */ jsx(ProductContactForm, { productName: product.name }) })
  ] });
}

const SITE_CONFIG = {
  warehouse: "Shanghai Warehouse",
  moq: "1kg",
  leadTime: "3 Days",
  documents: ["COA", "MSDS", "TDS", "ISO"],
  packaging: [
    "25kg / Fiber Drum",
    "Double plastic bag inside",
    "1kg / Aluminum Foil Bag (Sample)"
  ],
  storage: [
    "Store in a cool, dry place",
    "Keep away from strong light and heat",
    "Shelf Life: 24 Months"
  ]
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug, lang: langParam } = Astro2.params;
  const lang = langParam || "en";
  if (!slug) {
    return Astro2.redirect(`/${lang}/products`);
  }
  const product = await getProductBySlug(slug);
  if (!product) {
    return Astro2.redirect("/404");
  }
  const isReadyStock = product.stockStatus === "Ready to Ship";
  const title = product.seoTitle || `${product.name} | COSPEP`;
  const description = product.seoDesc || `Buy high-quality ${product.name} at COSPEP. Trusted Chinese peptide supplier.`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cospep.com" },
          { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://cospep.com/products" },
          { "@type": "ListItem", "position": 3, "name": product.name }
        ]
      },
      {
        "@type": "Product",
        "name": product.name,
        "image": product.imageUrl,
        "description": product.description || product.seoDesc || `Wholesale ${product.name}`,
        "sku": product.casNumber,
        "mpn": product.casNumber,
        "brand": { "@type": "Brand", "name": "COSPEP" },
        "offers": {
          "@type": "Offer",
          "url": `https://cospep.com/products/${product.slug.current}`,
          "availability": isReadyStock ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
          "priceCurrency": "USD",
          "price": "0.00",
          "priceValidUntil": "2025-12-31"
        }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", '<div class="min-h-screen bg-[#0A0E0D]">  <div class="bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]"> ', ' </div> <div class="container mx-auto px-4 md:px-6 py-10">  <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">  <div> <div class="w-full aspect-[4/3] glass rounded-2xl overflow-hidden flex items-center justify-center border border-white/10 relative group"> ', "  ", '  <div className="absolute inset-0 pointer-events-none group-hover:pointer-events-auto"> ', " </div> </div>  ", ' </div>  <div class="space-y-6">  <div> <h1 class="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"> ', ' </h1> <div class="flex flex-wrap gap-4 text-gray-300"> ', ' </div>  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6"> <div class="glass rounded-lg p-4 border border-white/10"> <div class="text-sm text-gray-400 mb-1">CAS Number</div> <div class="text-lg font-semibold text-white font-mono"> ', " </div> </div> ", " ", " </div> </div>  ", "  ", '  <div class="glass-strong rounded-xl p-6 border border-white/10 space-y-3"> <div class="flex justify-between py-2 border-b border-white/10"> <span class="text-gray-400">MOQ</span> <span class="text-white font-medium">', '</span> </div> <div class="flex justify-between py-2 border-b border-white/10"> <span class="text-gray-400">Lead Time</span> <span class="text-white font-medium">', "</span> </div> ", ' <div class="flex justify-between py-2"> <span class="text-gray-400">Documents</span> <span class="text-white font-medium">', "</span> </div> </div> </div> </div>  ", " </div> </div> "])), unescapeHTML(JSON.stringify(jsonLd)), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", Breadcrumbs, { "title": product.name }), product.imageUrl ? renderTemplate`${renderComponent($$result2, "ImageZoom", ImageZoom, { "src": product.imageUrl, "alt": product.name, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/products/image-zoom", "client:component-export": "ImageZoom" })}` : renderTemplate`<span className="text-gray-500 text-lg">No Image Available</span>`, isReadyStock && renderTemplate`<div className="absolute top-4 right-4 z-10"> ${renderComponent($$result2, "Badge", Badge, { "className": "bg-green-500/90 backdrop-blur-sm text-white border-none px-3 py-1" }, { "default": async ($$result3) => renderTemplate` <span className="relative flex h-2 w-2 mr-2"> <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span> <span className="relative inline-flex rounded-full h-2 w-2 bg-green-200"></span> </span>
In Stock
` })} </div>`, renderComponent($$result2, "ProductActions", ProductActions, { "client:load": true, "productSlug": product.slug.current, "productName": product.name, "productDescription": product.description, "client:component-hydration": "load", "client:component-path": "@/components/products/product-actions", "client:component-export": "ProductActions" }), renderComponent($$result2, "ProductImageCTAButtons", ProductImageCTAButtons, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/products/product-image-cta-buttons", "client:component-export": "ProductImageCTAButtons" }), product.name, product.latinName && renderTemplate`<span class="italic text-lg">${product.latinName}</span>`, product.casNumber || "N/A", product.purity && renderTemplate`<div class="glass rounded-lg p-4 border border-white/10"> <div class="text-sm text-gray-400 mb-1">Purity</div> <div class="text-lg font-semibold text-[#B8FF00]"> ${product.purity} </div> </div>`, product.inciName && renderTemplate`<div class="glass rounded-lg p-4 border border-white/10 sm:col-span-2"> <div class="text-sm text-gray-400 mb-1">INCI Name</div> <div class="text-lg font-semibold text-white"> ${product.inciName} </div> </div>`, isReadyStock && renderTemplate`<div class="glass-strong rounded-lg p-4 border border-green-500/20"> <div class="flex items-center gap-3"> <div class="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center"> ${renderComponent($$result2, "Truck", Truck, { "className": "w-6 h-6 text-green-400" })} </div> <div> <div class="font-semibold text-white">Ready to Ship</div> <div class="text-sm text-gray-400">
Available from <span class="text-[#B8FF00]">${SITE_CONFIG.warehouse}</span> </div> </div> </div> </div>`, product.categories && product.categories.length > 0 && renderTemplate`<div> <div class="text-sm text-gray-400 mb-2">Categories</div> <div class="flex flex-wrap gap-2"> ${product.categories.map((cat) => renderTemplate`${renderComponent($$result2, "Badge", Badge, { "variant": "outline", "className": "border-white/20 text-gray-300 hover:border-[#B8FF00] hover:text-[#B8FF00] transition-colors cursor-pointer" }, { "default": async ($$result3) => renderTemplate`${cat.title}` })}`)} </div> </div>`, product.moq || SITE_CONFIG.moq, product.leadTime || SITE_CONFIG.leadTime, product.grade && renderTemplate`<div class="flex justify-between py-2 border-b border-white/10"> <span class="text-gray-400">Grade</span> <span class="text-white font-medium">${product.grade}</span> </div>`, SITE_CONFIG.documents.join(", "), renderComponent($$result2, "ProductDetailClient", ProductDetailClient, { "client:load": true, "product": product, "siteConfig": SITE_CONFIG, "client:component-hydration": "load", "client:component-path": "@/components/products/product-detail-client", "client:component-export": "ProductDetailClient" })) })}`;
}, "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/products/[slug].astro", void 0);

const $$file = "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/products/[slug].astro";
const $$url = "/[...lang]/products/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
