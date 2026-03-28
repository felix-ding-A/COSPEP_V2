import { c as createComponent } from './astro-component_DJUp-8MJ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_C_9vr8UG.mjs';
import { $ as $$BaseLayout, L as Link } from './BaseLayout_DFgKn8dd.mjs';
import { B as Breadcrumbs } from './Breadcrumbs_B2xFpkYI.mjs';
import { Factory, Tag, Pill, FlaskConical, ClipboardList, Microscope, TestTube, Truck, ArrowRight } from 'lucide-react';
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from './card_E-5LuT40.mjs';
import 'react';

const $$CustomManufacturing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CustomManufacturing;
  const { lang: langParam } = Astro2.params;
  const title = "Custom Manufacturing & OEM Services | COSPEP";
  const description = "From Concept to Commercialization – Your Trusted Biotech Partner for large-scale production, private label, and finished product solutions.";
  const oemServices = [
    {
      icon: Factory,
      title: "Large-Scale Enterprise",
      description: "Industrial-scale production capabilities with state-of-the-art facilities designed for high-volume manufacturing."
    },
    {
      icon: Tag,
      title: "Private Label",
      description: "Complete white-label solutions allowing you to market premium products under your own brand identity."
    },
    {
      icon: Pill,
      title: "Finished Product",
      description: "End-to-end manufacturing from raw materials to market-ready products with full quality assurance."
    },
    {
      icon: FlaskConical,
      title: "Supported Formats",
      description: "Versatile formulation options including powders, capsules, tablets, liquids, and custom formats."
    }
  ];
  const processSteps = [
    { icon: ClipboardList, title: "Order Placement", step: 1 },
    { icon: Microscope, title: "Formula Evaluation", step: 2 },
    { icon: TestTube, title: "Sample Development", step: 3 },
    { icon: Factory, title: "Mass Production", step: 4 },
    { icon: Truck, title: "Packaging & Delivery", step: 5 }
  ];
  const successStories = [
    {
      title: "Pet Food Ingredients",
      description: "Premium nutritional supplements and functional ingredients for companion animal nutrition.",
      image: "/images/pet-food-ingredients.webp"
    },
    {
      title: "Livestock Feed Components",
      description: "High-performance feed additives and supplements for agricultural and livestock applications.",
      image: "/images/livestock-feed.webp"
    },
    {
      title: "Nutraceutical Solutions",
      description: "Advanced dietary supplements and functional foods for human health and wellness markets.",
      image: "/images/nutraceuticals.webp"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#0A0E0D]"> <div class="bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]"> ${renderComponent($$result2, "Breadcrumbs", Breadcrumbs, {})} </div>  <section class="relative bg-gradient-to-b from-[#0F1612] to-[#0A0E0D] py-24 lg:py-32 border-b border-white/5 overflow-hidden"> <div class="container relative z-10 mx-auto px-4 md:px-6"> <div class="max-w-4xl mx-auto text-center space-y-8"> <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
Custom Manufacturing &
<span class="text-[#B8FF00] block mt-2 drop-shadow-[0_0_20px_rgba(184,255,0,0.3)]">OEM Services</span> </h1> <p class="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
From Concept to Commercialization – Your Trusted Biotech Partner.
</p> </div> </div>  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B8FF00]/5 blur-[150px] rounded-full pointer-events-none"></div> </section>  <section class="py-24 bg-[#0A0E0D]"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-16 space-y-4"> <h2 class="text-4xl font-bold text-white tracking-tight">Our OEM Services</h2> <p class="text-gray-400 max-w-2xl mx-auto text-lg">
Comprehensive manufacturing solutions tailored to your business needs
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${oemServices.map((service, index) => renderTemplate`${renderComponent($$result2, "Card", Card, { "className": "bg-[#0F1612]/50 border-white/10 shadow-2xl hover:border-[#B8FF00]/50 hover:bg-[#0F1612] transition-all duration-500 group rounded-[2rem] overflow-hidden" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", CardHeader, { "className": "p-8 pb-4" }, { "default": ($$result4) => renderTemplate` <div class="w-16 h-16 rounded-[1.25rem] bg-[#B8FF00]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-br from-[#B8FF00]/20 to-transparent"></div> ${renderComponent($$result4, "service.icon", service.icon, { "class": "w-8 h-8 text-[#B8FF00] relative z-10" })} </div> ${renderComponent($$result4, "CardTitle", CardTitle, { "className": "text-2xl font-bold text-white leading-tight" }, { "default": ($$result5) => renderTemplate`${service.title}` })} ` })} ${renderComponent($$result3, "CardContent", CardContent, { "className": "p-8 pt-0" }, { "default": ($$result4) => renderTemplate` <p class="text-gray-400 text-lg leading-relaxed font-light"> ${service.description} </p> ` })} ` })}`)} </div> </div> </section>  <section class="py-24 bg-[#0F1612]/30 border-y border-white/5 relative overflow-hidden"> <div class="container mx-auto px-4 md:px-6 relative z-10"> <div class="text-center mb-20 space-y-4"> <h2 class="text-4xl font-bold text-white tracking-tight">Our OEM Process</h2> <p class="text-gray-400 max-w-2xl mx-auto text-lg">
Quality Checkpoints integrated at every stage
</p> </div>  <div class="hidden lg:block relative max-w-6xl mx-auto py-12">  <div class="absolute top-[4.5rem] left-[5%] right-[5%] h-1 bg-white/5 rounded-full"> <div class="h-full bg-gradient-to-r from-[#B8FF00]/20 via-[#B8FF00] to-[#B8FF00]/20 w-full rounded-full shadow-[0_0_15px_rgba(184,255,0,0.3)]"></div> </div> <div class="relative flex items-center justify-between"> ${processSteps.map((step, index) => renderTemplate`<div class="flex flex-col items-center group"> <div class="w-24 h-24 rounded-full bg-[#0A0E0D] border-4 border-[#B8FF00] border-t-[#B8FF00]/20 flex items-center justify-center shadow-2xl mb-6 group-hover:scale-110 transition-all duration-500 relative bg-clip-border"> <div class="absolute inset-2 rounded-full bg-gradient-to-br from-[#B8FF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div> ${renderComponent($$result2, "step.icon", step.icon, { "class": "w-10 h-10 text-[#B8FF00]", "stroke-width": "1.5" })} </div> <span class="text-sm font-black text-[#B8FF00] mb-2 uppercase tracking-widest bg-[#B8FF00]/10 px-3 py-1 rounded-full">Step ${step.step}</span> <h3 class="text-lg font-bold text-white text-center whitespace-nowrap"> ${step.title} </h3> </div>`)} </div> </div>  <div class="lg:hidden max-w-md mx-auto"> <div class="relative pl-12 space-y-12">  <div class="absolute left-[1.5rem] top-0 bottom-0 w-1 bg-gradient-to-b from-[#B8FF00] to-[#B8FF00]/20 rounded-full"></div> ${processSteps.map((step, index) => renderTemplate`<div class="relative flex flex-col items-start group"> <div class="absolute -left-[2.25rem] w-14 h-14 rounded-full bg-[#0A0E0D] border-4 border-[#B8FF00] flex items-center justify-center shadow-2xl z-10 transition-transform group-hover:scale-110"> ${renderComponent($$result2, "step.icon", step.icon, { "class": "w-6 h-6 text-[#B8FF00]", "stroke-width": "1.5" })} </div> <div class="pl-6 pt-1"> <span class="text-xs font-black text-[#B8FF00] uppercase tracking-widest bg-[#B8FF00]/10 px-2 py-0.5 rounded-full">Step ${step.step}</span> <h3 class="text-xl font-bold text-white mt-2 leading-none">${step.title}</h3> </div> </div>`)} </div> </div> </div>  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B8FF00]/5 blur-[120px] rounded-full"></div> <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B8FF00]/5 blur-[120px] rounded-full"></div> </section>  <section class="py-24 bg-[#0A0E0D]"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-16 space-y-4"> <h2 class="text-4xl font-bold text-white tracking-tight">Success Stories</h2> <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
Discover how we've helped businesses across industries achieve their goals
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"> ${successStories.map((story, index) => renderTemplate`${renderComponent($$result2, "Card", Card, { "className": "bg-[#0F1612]/50 border-white/10 shadow-2xl hover:shadow-[#B8FF00]/10 hover:border-[#B8FF00]/30 transition-all duration-500 overflow-hidden group rounded-[2.5rem]" }, { "default": ($$result3) => renderTemplate` <div class="relative overflow-hidden aspect-[16/10]"> <img${addAttribute(story.image, "src")}${addAttribute(story.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"> <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E0D] to-transparent opacity-60"></div> <div class="absolute bottom-0 left-0 right-0 h-1.5 bg-[#B8FF00] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 shadow-[0_0_15px_rgba(184,255,0,0.5)]"></div> </div> ${renderComponent($$result3, "CardContent", CardContent, { "className": "p-8" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-[#B8FF00] transition-colors"> ${story.title} </h3> <p class="text-gray-400 text-lg leading-relaxed font-light"> ${story.description} </p> ` })} ` })}`)} </div> </div> </section>  <section class="py-24 bg-[#0F1612]/50 border-t border-white/5 relative overflow-hidden"> <div class="container relative z-10 mx-auto px-4 md:px-6"> <div class="max-w-4xl mx-auto text-center space-y-10"> <h2 class="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight">
Ready to Start <br> <span class="text-[#B8FF00]">Your Project?</span> </h2> <p class="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
Partner with us for reliable, high-quality custom manufacturing solutions. We bring your vision to life with precision.
</p> <div class="flex flex-col sm:flex-row justify-center gap-6"> ${renderComponent($$result2, "Link", Link, { "href": "/contact", "className": "inline-flex items-center justify-center gap-3 bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-black uppercase tracking-widest px-10 py-5 rounded-2xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(184,255,0,0.2)]" }, { "default": ($$result3) => renderTemplate`
Get Started Today
${renderComponent($$result3, "ArrowRight", ArrowRight, { "class": "w-6 h-6" })} ` })} </div> </div> </div>  <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,255,0,0.05)_0%,transparent_70%)]"></div> </section> </main> ` })}`;
}, "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/custom-manufacturing.astro", void 0);

const $$file = "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/custom-manufacturing.astro";
const $$url = "/[...lang]/custom-manufacturing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CustomManufacturing,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
