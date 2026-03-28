import { c as createComponent } from './astro-component_DJUp-8MJ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_C_9vr8UG.mjs';
import { d as getPosts, $ as $$BaseLayout } from './BaseLayout_DFgKn8dd.mjs';
import { B as Breadcrumbs } from './Breadcrumbs_B2xFpkYI.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { lang: langParam } = Astro2.params;
  const lang = langParam || "en";
  const posts = await getPosts();
  const title = "Industry Insights | COSPEP";
  const description = "Stay updated with the latest trends in botanical ingredients and industry news.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#0A0E0D]"> <div class="bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]"> ${renderComponent($$result2, "Breadcrumbs", Breadcrumbs, {})} </div> <div class="container mx-auto px-4 py-12 md:px-6 lg:py-16"> <div class="mx-auto max-w-4xl text-center mb-12"> <h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-white">
Latest Insights & News
</h1> <p class="text-lg text-gray-400">
Stay updated with the latest trends in botanical ingredients and industry news.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.length > 0 ? posts.map((post) => renderTemplate`<a${addAttribute(`/${lang === "en" ? "" : `${lang}/`}industry-insights/${post.slug.current}`, "href")} class="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0F1612]/50 hover:bg-[#0F1612] transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#B8FF00]/10 duration-300"> <div class="relative aspect-video w-full overflow-hidden"> ${post.mainImage && renderTemplate`<img${addAttribute(post.mainImage, "src")}${addAttribute(post.title, "alt")} class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110">`} <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E0D] to-transparent opacity-60"></div> </div> <div class="p-6 flex flex-col flex-1"> <div class="mb-3 text-sm text-[#B8FF00]"> ${new Date(post.publishedAt).toLocaleDateString(lang === "cn" ? "zh-CN" : lang === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </div> <h3 class="text-xl font-bold tracking-tight mb-3 text-white group-hover:text-[#B8FF00] transition-colors line-clamp-2"> ${post.title} </h3> <p class="text-gray-400 line-clamp-3 text-sm flex-1 leading-relaxed"> ${post.excerpt} </p> <div class="mt-6 text-[#B8FF00] font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
Read More <span class="ml-2">→</span> </div> </div> </a>`) : renderTemplate`<div class="col-span-full py-20 text-center glass rounded-2xl border border-dashed border-white/10"> <p class="text-gray-500 text-lg">No posts found.</p> </div>`} </div> </div> </main> ` })}`;
}, "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/industry-insights/index.astro", void 0);

const $$file = "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/industry-insights/index.astro";
const $$url = "/[...lang]/industry-insights";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
