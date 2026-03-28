import { c as createComponent } from './astro-component_DJUp-8MJ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_C_9vr8UG.mjs';
import { $ as $$BaseLayout, u as useTranslations } from './BaseLayout_DFgKn8dd.mjs';
import { B as Breadcrumbs } from './Breadcrumbs_B2xFpkYI.mjs';
import { Leaf, Recycle, HeartHandshake } from 'lucide-react';
import { C as Card, a as CardContent } from './card_E-5LuT40.mjs';

const $$Sustainability = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Sustainability;
  const { lang: langParam } = Astro2.params;
  const lang = langParam || "en";
  const t = useTranslations(lang, "nav.sustainability");
  const title = "Sustainability | COSPEP";
  const description = "Our commitment to ethical sourcing, green manufacturing, and community support in the Qinling Mountains.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#0A0E0D] text-white"> <div class="bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]"> ${renderComponent($$result2, "Breadcrumbs", Breadcrumbs, {})} </div>  <section class="relative py-32 lg:py-48 bg-[#0F1612] border-b border-white/5 overflow-hidden"> <div class="absolute inset-0 w-full h-full"> <img src="/images/sustainability-hero.webp" alt="Sustainability" class="object-cover w-full h-full opacity-40 grayscale contrast-125"> <div class="absolute inset-0 bg-gradient-to-b from-[#0A0E0D]/20 via-[#0A0E0D]/60 to-[#0A0E0D]"></div> </div> <div class="container relative z-10 mx-auto px-4 md:px-6 text-center"> <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight max-w-5xl mx-auto"> ${t("hero.title")} </h1> <p class="text-xs md:text-sm text-gray-500 max-w-2xl mx-auto italic mb-10 opacity-60 font-mono tracking-wider"> ${t("hero.citation")} </p> <div class="w-12 h-1 bg-[#B8FF00] mx-auto mb-10 rounded-full opacity-50 shadow-[0_0_10px_rgba(184,255,0,0.5)]"></div> <p class="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"> ${t("hero.subtitle")} </p> </div> </section>  <section class="py-24 bg-[#0A0E0D]"> <div class="container mx-auto px-4 md:px-6"> <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">  ${renderComponent($$result2, "Card", Card, { "className": "bg-[#0F1612]/50 border-white/10 hover:border-[#B8FF00]/40 hover:shadow-2xl hover:shadow-[#B8FF00]/5 transition-all duration-500 rounded-3xl group" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", CardContent, { "className": "pt-12 text-center flex flex-col items-center p-10 h-full" }, { "default": ($$result4) => renderTemplate` <div class="w-20 h-20 rounded-2xl bg-[#B8FF00]/10 flex items-center justify-center mb-8 text-[#B8FF00] group-hover:scale-110 transition-transform"> ${renderComponent($$result4, "Leaf", Leaf, { "class": "w-10 h-10" })} </div> <h3 class="text-2xl font-bold mb-6 text-white">${t("sections.sourcing.title")}</h3> <p class="text-gray-400 text-lg leading-relaxed font-light"> ${t("sections.sourcing.description")} </p> ` })} ` })}  ${renderComponent($$result2, "Card", Card, { "className": "bg-[#0F1612]/50 border-white/10 hover:border-[#B8FF00]/40 hover:shadow-2xl hover:shadow-[#B8FF00]/5 transition-all duration-500 rounded-3xl group " }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", CardContent, { "className": "pt-12 text-center flex flex-col items-center p-10 h-full" }, { "default": ($$result4) => renderTemplate` <div class="w-20 h-20 rounded-2xl bg-[#B8FF00]/10 flex items-center justify-center mb-8 text-[#B8FF00] group-hover:scale-110 transition-transform"> ${renderComponent($$result4, "Recycle", Recycle, { "class": "w-10 h-10" })} </div> <h3 class="text-2xl font-bold mb-6 text-white">${t("sections.manufacturing.title")}</h3> <p class="text-gray-400 text-lg leading-relaxed font-light"> ${t("sections.manufacturing.description")} </p> ` })} ` })}  ${renderComponent($$result2, "Card", Card, { "className": "bg-[#0F1612]/50 border-white/10 hover:border-[#B8FF00]/40 hover:shadow-2xl hover:shadow-[#B8FF00]/5 transition-all duration-500 rounded-3xl group" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", CardContent, { "className": "pt-12 text-center flex flex-col items-center p-10 h-full" }, { "default": ($$result4) => renderTemplate` <div class="w-20 h-20 rounded-2xl bg-[#B8FF00]/10 flex items-center justify-center mb-8 text-[#B8FF00] group-hover:scale-110 transition-transform"> ${renderComponent($$result4, "HeartHandshake", HeartHandshake, { "class": "w-10 h-10" })} </div> <h3 class="text-2xl font-bold mb-6 text-white">${t("sections.community.title")}</h3> <p class="text-gray-400 text-lg leading-relaxed font-light"> ${t("sections.community.description")} </p> ` })} ` })} </div> </div> </section>  <section class="py-24 bg-[#0F1612]/30 border-y border-white/5 relative overflow-hidden"> <div class="container mx-auto px-4 md:px-6 relative z-10"> <div class="max-w-4xl mx-auto text-center space-y-8"> <span class="text-[#B8FF00] font-black text-6xl opacity-20 font-serif">"</span> <p class="text-3xl md:text-4xl font-light italic text-gray-300 leading-snug">
Sustainability is not just a goal, but a responsibility we owe to the ancestors who preserved these mountains and the children who will inherit them.
</p> <div class="pt-4"> <p class="text-gray-500 font-bold uppercase tracking-[0.3em]">COSPEP Philosophy</p> </div> </div> </div>  <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#B8FF00]/5 blur-[120px] rounded-full"></div> <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-[#B8FF00]/5 blur-[120px] rounded-full"></div> </section> </main> ` })}`;
}, "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/resources/sustainability.astro", void 0);

const $$file = "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/resources/sustainability.astro";
const $$url = "/[...lang]/resources/sustainability";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Sustainability,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
