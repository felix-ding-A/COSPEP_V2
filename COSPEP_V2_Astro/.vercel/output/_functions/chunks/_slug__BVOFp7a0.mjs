import { c as createComponent } from './astro-component_DJUp-8MJ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, u as unescapeHTML } from './entrypoint_C_9vr8UG.mjs';
import { g as getBlogPostBySlug, $ as $$BaseLayout } from './BaseLayout_DFgKn8dd.mjs';
import { PortableText } from '@portabletext/react';
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from './accordion_kr07DEy6.mjs';
import { B as Breadcrumbs } from './Breadcrumbs_B2xFpkYI.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { u as urlFor } from './sanity_5UM8X-_V.mjs';
import 'react';

const blogPortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: urlFor(value).url(),
            alt: value.alt || "Blog image",
            className: "rounded-2xl w-full h-auto border border-white/10"
          }
        ),
        value.caption && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mt-4 text-center italic", children: value.caption })
      ] });
    },
    video: ({ value }) => {
      if (!value?.asset) return null;
      const videoUrl = typeof value.asset === "string" ? value.asset : "";
      return /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
        /* @__PURE__ */ jsxs("video", { controls: true, className: "w-full rounded-2xl border border-white/10", children: [
          /* @__PURE__ */ jsx("source", { src: videoUrl, type: "video/mp4" }),
          "Your browser does not support the video tag."
        ] }),
        value.caption && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mt-4 text-center italic", children: value.caption })
      ] });
    }
  }
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug, lang: langParam } = Astro2.params;
  const lang = langParam || "en";
  if (!slug) {
    return Astro2.redirect(`/${lang}/industry-insights`);
  }
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return Astro2.redirect("/404");
  }
  const faqTitle = lang === "es" ? "Preguntas Frecuentes" : lang === "ru" ? "Часто задаваемые вопросы" : "Frequently Asked Questions";
  const title = post.title || "Industry Insights";
  const description = post.seoDescription || post.excerpt || "Read our latest insights and articles";
  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.mainImage ? post.mainImage : void 0,
    "datePublished": post.publishedAt,
    "dateModified": post._updatedAt || post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "COSPEP Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "COSPEP",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cospep.com/logo.webp"
      }
    },
    "description": post.seoDescription || post.excerpt
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate(_b || (_b = __template(["", '<script type="application/ld+json">', "<\/script> ", '<main class="min-h-screen bg-[#0A0E0D]"> <div class="bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]"> ', ' </div> <article class="container mx-auto px-4 py-12 md:px-6 lg:py-16"> <div class="mx-auto max-w-3xl">  ', "  ", '  <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-white leading-tight"> ', " </h1>  ", "  ", "  ", " </div> </article> </main> "])), faqSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(faqSchema))), unescapeHTML(JSON.stringify(articleSchema)), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", Breadcrumbs, { "title": post.title }), post.mainImage && renderTemplate`<div class="relative aspect-video w-full overflow-hidden rounded-2xl mb-10 border border-white/10"> <img${addAttribute(post.mainImage, "src")}${addAttribute(post.title || "Blog post image", "alt")} class="object-cover w-full h-full"> <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E0D] to-transparent opacity-40"></div> </div>`, post.publishedAt && renderTemplate`<div class="mb-6 text-sm text-[#B8FF00] font-medium tracking-wide uppercase"> ${new Date(post.publishedAt).toLocaleDateString(
    lang === "cn" ? "zh-CN" : lang === "es" ? "es-ES" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  )} </div>`, post.title || "Untitled Post", post.excerpt && renderTemplate`<p class="text-xl text-gray-400 mb-10 italic border-l-4 border-[#B8FF00] pl-6 py-2 leading-relaxed"> ${post.excerpt} </p>`, post.body && Array.isArray(post.body) && post.body.length > 0 && renderTemplate`<div class="prose prose-lg prose-invert max-w-none text-gray-300 leading-relaxed
                        prose-headings:text-white prose-headings:font-bold
                        prose-a:text-[#B8FF00] prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-white prose-blockquote:border-[#B8FF00]
                        prose-img:rounded-2xl prose-img:border prose-img:border-white/10"> ${renderComponent($$result2, "PortableText", PortableText, { "value": post.body, "components": blogPortableTextComponents })} </div>`, post.faqs && post.faqs.length > 0 && renderTemplate`<div class="mt-16 border-t border-white/10 pt-16"> <h2 class="text-3xl font-bold mb-8 text-white flex items-center gap-4"> <span class="w-8 h-1 bg-[#B8FF00] rounded-full"></span> ${faqTitle} </h2> ${renderComponent($$result2, "Accordion", Accordion, { "client:load": true, "type": "single", "collapsible": true, "class": "w-full space-y-4", "client:component-hydration": "load", "client:component-path": "@/components/ui/accordion", "client:component-export": "Accordion" }, { "default": async ($$result3) => renderTemplate`${post.faqs.map((faq, index) => renderTemplate`${renderComponent($$result3, "AccordionItem", AccordionItem, { "key": index, "value": `faq-${index}`, "class": "border border-white/10 rounded-xl overflow-hidden glass px-6 py-2" }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "AccordionTrigger", AccordionTrigger, { "class": "text-left font-semibold text-white hover:text-[#B8FF00] transition-colors py-4" }, { "default": async ($$result5) => renderTemplate`${faq.question}` })} ${renderComponent($$result4, "AccordionContent", AccordionContent, { "class": "text-gray-400 whitespace-pre-line pb-6 leading-relaxed" }, { "default": async ($$result5) => renderTemplate`${faq.answer}` })} ` })}`)}` })} </div>`) })}`;
}, "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/industry-insights/[slug].astro", void 0);

const $$file = "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/industry-insights/[slug].astro";
const $$url = "/[...lang]/industry-insights/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
