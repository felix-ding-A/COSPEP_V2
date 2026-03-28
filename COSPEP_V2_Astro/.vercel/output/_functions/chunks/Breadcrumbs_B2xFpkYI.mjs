import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { a as useLocale, L as Link, l as usePathname } from './BaseLayout_DFgKn8dd.mjs';
import 'react';

const BASE_URL = "https://cospep.com";
function formatLabel(slug) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
function Breadcrumbs({ title } = {}) {
  const pathname = usePathname();
  const locale = useLocale();
  if (pathname === "/" || pathname === "") return null;
  const segments = pathname.split("/").filter(Boolean);
  const items = [
    { label: "Home", href: "/" },
    ...segments.map((segment, index) => ({
      label: formatLabel(segment),
      href: "/" + segments.slice(0, index + 1).join("/")
    }))
  ];
  if (title && items.length > 1) {
    items[items.length - 1].label = title;
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: index < items.length - 1 ? `${BASE_URL}/${locale}${item.href === "/" ? "" : item.href}` : void 0
      // Google recommends omitting `item` for the last breadcrumb
    }))
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
      }
    ),
    /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "container mx-auto px-4 md:px-6 py-3", children: /* @__PURE__ */ jsx("ol", { className: "flex flex-wrap items-center gap-1 text-sm", children: items.map((item, index) => {
      const isLast = index === items.length - 1;
      return /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1", children: [
        index > 0 && /* @__PURE__ */ jsx("span", { className: "text-gray-500 select-none mx-1", children: "/" }),
        isLast ? (
          // Current page — not clickable, gray text
          /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-medium truncate max-w-[200px]", children: item.label })
        ) : (
          // Clickable link
          /* @__PURE__ */ jsx(
            Link,
            {
              href: item.href,
              className: "text-gray-500 hover:text-[#B8FF00] transition-colors",
              children: item.label
            }
          )
        )
      ] }, item.href);
    }) }) })
  ] });
}

export { Breadcrumbs as B };
