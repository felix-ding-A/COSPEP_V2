import { jsx, jsxs } from 'react/jsx-runtime';
import { c as cn, L as Link, I as Image, B as Button } from './BaseLayout_DFgKn8dd.mjs';
import 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { Eye, ShoppingCart } from 'lucide-react';

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      "data-variant": variant,
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

function ProductCard({ product }) {
  const isReadyStock = product.stockStatus === "Ready to Ship";
  return /* @__PURE__ */ jsxs("div", { className: "group relative flex flex-col rounded-xl glass border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#B8FF00]/30 transition-all duration-500 overflow-hidden", children: [
    /* @__PURE__ */ jsx(Link, { href: `/products/${product.slug.current}`, className: "block", children: /* @__PURE__ */ jsxs("div", { className: "aspect-[4/3] w-full overflow-hidden bg-white/5 flex items-center justify-center relative cursor-pointer", children: [
      product.imageUrl ? /* @__PURE__ */ jsx(
        Image,
        {
          src: product.imageUrl,
          alt: product.name,
          className: "object-cover group-hover:scale-110 transition-transform duration-700 ease-out h-full w-full"
        }
      ) : /* @__PURE__ */ jsx("div", { className: "text-gray-500 text-sm", children: "No Image" }),
      isReadyStock && /* @__PURE__ */ jsxs("div", { className: "absolute top-3 right-3 flex items-center gap-1 bg-green-500/90 backdrop-blur-sm px-2 py-1 rounded-full", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" }),
          /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-green-200" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-white", children: "In Stock" })
      ] }),
      product.categories && product.categories.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsx(Badge, { className: "bg-[#B8FF00]/90 text-[#0A0E0D] hover:bg-[#B8FF00] border-none font-medium", children: product.categories[0].title }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 p-5 space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-white group-hover:text-[#B8FF00] transition-colors duration-300 line-clamp-2 mb-2", children: product.name }),
        product.latinName && /* @__PURE__ */ jsx("p", { className: "text-sm italic text-gray-400 line-clamp-1 mb-3", children: product.latinName }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm mb-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "CAS:" }),
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-xs border-white/20 text-gray-300", children: product.casNumber || "N/A" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx("span", { className: `px-2.5 py-1 rounded-full text-xs font-medium ${isReadyStock ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-white/5 text-gray-400 border border-white/10"}`, children: product.stockStatus || "Made to Order" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 pt-3 border-t border-white/10", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            asChild: true,
            className: "flex-1 bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold hover:scale-[1.02] transition-all duration-300 group/btn",
            children: /* @__PURE__ */ jsxs(Link, { href: `/products/${product.slug.current}`, children: [
              /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" }),
              "Details"
            ] })
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            className: "flex-1 border-white/20 text-white hover:bg-white/10 hover:border-[#B8FF00] hover:text-[#B8FF00] hover:scale-[1.02] transition-all duration-300 group/btn",
            children: [
              /* @__PURE__ */ jsx(ShoppingCart, { className: "w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" }),
              "Quote"
            ]
          }
        )
      ] })
    ] })
  ] });
}

export { Badge as B, ProductCard as P };
