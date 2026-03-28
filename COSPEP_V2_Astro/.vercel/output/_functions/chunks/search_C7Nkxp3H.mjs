import { c as createComponent } from './astro-component_DJUp-8MJ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_C_9vr8UG.mjs';
import { $ as $$BaseLayout, L as Link } from './BaseLayout_DFgKn8dd.mjs';
import { B as Breadcrumbs } from './Breadcrumbs_B2xFpkYI.mjs';
import { c as client, u as urlFor } from './sanity_5UM8X-_V.mjs';
import 'react';
import { Search, Package, ChevronRight, FileText } from 'lucide-react';

const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Search;
  const { lang: langParam } = Astro2.params;
  const query = Astro2.url.searchParams.get("q") || "";
  async function getSearchResults(q) {
    if (!q) return { products: [], posts: [] };
    const groqQuery = `{
        "products": *[_type == "product" && (isVisible == true || !defined(isVisible)) && title match $q + "*"] {
            _id,
            title,
            slug,
            "imageUrl": images[0].asset->url,
            description
        },
        "posts": *[_type == "post" && (isVisible == true || !defined(isVisible)) && title match $q + "*"] {
            _id,
            title,
            slug,
            mainImage,
            excerpt,
            publishedAt
        }
    }`;
    const params = { q };
    return client.fetch(groqQuery, params);
  }
  const { products, posts } = await getSearchResults(query);
  const title = `Search Results for "${query}" | COSPEP`;
  const description = `Search results for ${query} on COSPEP. Find botanical ingredients, bioactive peptides, and industry insights.`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#0A0E0D] text-white"> <div class="bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]"> ${renderComponent($$result2, "Breadcrumbs", Breadcrumbs, {})} </div> <div class="container mx-auto px-4 md:px-6 py-16"> <div class="mb-16 space-y-4"> <div class="inline-flex items-center px-4 py-2 rounded-full bg-[#B8FF00]/10 text-[#B8FF00] text-sm font-bold border border-[#B8FF00]/20"> ${renderComponent($$result2, "Search", Search, { "class": "w-4 h-4 mr-2" })}
Search Results
</div> <h1 class="text-4xl md:text-5xl font-black text-white tracking-tighter">
Results for <span class="text-[#B8FF00]">"${query}"</span> </h1> <p class="text-gray-400 text-lg">
Found <span class="text-white font-bold">${products.length}</span> products and <span class="text-white font-bold">${posts.length}</span> articles.
</p> </div> ${products.length > 0 && renderTemplate`<section class="mb-24"> <div class="flex items-center gap-4 mb-10"> <div class="w-10 h-10 rounded-xl bg-[#B8FF00]/10 flex items-center justify-center text-[#B8FF00]"> ${renderComponent($$result2, "Package", Package, { "class": "w-6 h-6" })} </div> <h2 class="text-2xl font-bold text-white border-b border-white/5 pb-2 flex-1">Products</h2> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> ${products.map((product) => renderTemplate`${renderComponent($$result2, "Link", Link, { "href": `/products/${product.slug.current}`, "className": "group block glass-strong rounded-3xl border border-white/10 overflow-hidden hover:border-[#B8FF00]/50 transition-all duration-500 shadow-2xl" }, { "default": async ($$result3) => renderTemplate` <div class="aspect-square relative overflow-hidden bg-[#0F1612]"> ${product.imageUrl ? renderTemplate`<img${addAttribute(product.imageUrl, "src")}${addAttribute(product.title, "alt")} class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110">` : renderTemplate`<div class="flex items-center justify-center h-full text-gray-600">
No Image
</div>`} <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E0D]/60 to-transparent"></div> </div> <div class="p-6"> <h3 class="font-bold text-xl text-white group-hover:text-[#B8FF00] transition-colors line-clamp-2 leading-tight">${product.title}</h3> <div class="mt-4 flex items-center text-[#B8FF00] text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
View Details ${renderComponent($$result3, "ChevronRight", ChevronRight, { "class": "ml-1 w-4 h-4" })} </div> </div> ` })}`)} </div> </section>`} ${posts.length > 0 && renderTemplate`<section> <div class="flex items-center gap-4 mb-10"> <div class="w-10 h-10 rounded-xl bg-[#B8FF00]/10 flex items-center justify-center text-[#B8FF00]"> ${renderComponent($$result2, "FileText", FileText, { "class": "w-6 h-6" })} </div> <h2 class="text-2xl font-bold text-white border-b border-white/5 pb-2 flex-1">Industry Insights</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "Link", Link, { "href": `/industry-insights/${post.slug.current}`, "className": "group flex flex-col glass-strong rounded-[2.5rem] border border-white/10 overflow-hidden hover:border-[#B8FF00]/50 transition-all duration-500 shadow-2xl" }, { "default": async ($$result3) => renderTemplate` <div class="relative aspect-video w-full overflow-hidden"> ${post.mainImage && renderTemplate`<img${addAttribute(urlFor(post.mainImage).width(800).height(450).url(), "src")}${addAttribute(post.title, "alt")} class="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110">`} <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E0D]/80 via-transparent to-transparent"></div> </div> <div class="p-8 flex flex-col flex-1"> <div class="mb-4 text-sm font-mono text-gray-500 uppercase tracking-widest"> ${new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} </div> <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-[#B8FF00] transition-colors leading-tight"> ${post.title} </h3> <p class="text-gray-400 line-clamp-3 text-lg font-light leading-relaxed flex-1"> ${post.excerpt} </p> <div class="mt-8 flex items-center text-[#B8FF00] font-black uppercase tracking-[0.2em] text-xs">
Read Article ${renderComponent($$result3, "ChevronRight", ChevronRight, { "class": "ml-2 w-4 h-4" })} </div> </div> ` })}`)} </div> </section>`} ${products.length === 0 && posts.length === 0 && renderTemplate`<div class="text-center py-32 glass-strong rounded-[3rem] border border-dashed border-white/10 max-w-4xl mx-auto shadow-2xl"> <div class="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mx-auto mb-8 text-gray-500"> ${renderComponent($$result2, "Search", Search, { "class": "w-10 h-10" })} </div> <h3 class="text-3xl font-black text-white tracking-tighter mb-4">No results found</h3> <p class="text-gray-400 text-lg max-w-sm mx-auto font-light">Try adjusting your search terms or explore our product categories below.</p> <div class="mt-12 flex justify-center"> ${renderComponent($$result2, "Link", Link, { "href": "/products", "className": "bg-[#B8FF00] text-[#0A0E0D] px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-[#B8FF00]/20" }, { "default": async ($$result3) => renderTemplate`
Browse All Products
` })} </div> </div>`} </div> </main> ` })}`;
}, "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/search.astro", void 0);

const $$file = "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/search.astro";
const $$url = "/[...lang]/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Search,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
