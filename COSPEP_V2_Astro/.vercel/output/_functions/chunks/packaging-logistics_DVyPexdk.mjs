import { c as createComponent } from './astro-component_DJUp-8MJ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_C_9vr8UG.mjs';
import { $ as $$BaseLayout, L as Link } from './BaseLayout_DFgKn8dd.mjs';
import { B as Breadcrumbs } from './Breadcrumbs_B2xFpkYI.mjs';
import { Box, Package, Shield, Thermometer, Plane, Ship, Truck, FileCheck, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from './card_E-5LuT40.mjs';
import 'react';

const $$PackagingLogistics = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PackagingLogistics;
  const { lang: langParam } = Astro2.params;
  const title = "Packaging & Logistics Support | COSPEP";
  const description = "Ensuring product integrity and timely delivery with professional packaging standards and global logistics solutions.";
  const packagingOptions = [
    {
      icon: Box,
      title: "Standard Cartons",
      description: "Durable corrugated boxes ideal for most dry ingredients and smaller shipments.",
      specs: ["Small (5kg)", "Medium (10kg)", "Large (25kg)"]
    },
    {
      icon: Package,
      title: "Fiber Drums",
      description: "Industry-standard fiber drums for bulk powder storage and safe transport.",
      specs: ["25kg Drum", "Moisture Proof", "Tamper Evident"]
    },
    {
      icon: Shield,
      title: "Vacuum Sealing",
      description: "Double-layered polyethylene bags ensuring maximum freshness and protection.",
      specs: ["Food Grade", "Vacuum Sealed", "UV Protection"]
    },
    {
      icon: Thermometer,
      title: "Temp Control",
      description: "Specialized insulated packaging for temperature-sensitive active compounds.",
      specs: ["Cold Packs", "Thermal Liners", "Data Loggers"]
    }
  ];
  const shippingMethods = [
    {
      icon: Plane,
      title: "Air Freight",
      highlight: "3-7 Days",
      description: "Fastest delivery option for urgent orders and samples. Direct flights to major global hubs."
    },
    {
      icon: Ship,
      title: "Sea Freight",
      highlight: "15-30 Days",
      description: "Cost-effective solution for large bulk orders. FCL and LCL options available."
    },
    {
      icon: Truck,
      title: "Land Transport",
      highlight: "Flexible",
      description: "Reliable domestic and cross-border delivery network for regional shipments."
    }
  ];
  const logisticsSteps = [
    { step: 1, title: "Processing", description: "Order verification and secure packing" },
    { step: 2, title: "Documents", description: "Export documentation preparation" },
    { step: 3, title: "Dispatch", description: "Handover to trusted carrier" },
    { step: 4, title: "Delivery", description: "Arrival at your specified destination" }
  ];
  const complianceFeatures = [
    {
      icon: FileCheck,
      title: "Full Documentation",
      description: "Complete set of export documents including COA, MSDS, and packing lists."
    },
    {
      icon: Shield,
      title: "Secure Packaging",
      description: "Tamper-proof sealing and robust materials to prevent damage during transit."
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Monitor your shipment status 24/7 with provided tracking numbers."
    },
    {
      icon: MapPin,
      title: "Global Network",
      description: "Experienced in shipping to over 50 countries with customs expertise."
    }
  ];
  const documents = [
    "Certificate of Analysis (COA)",
    "Material Safety Data Sheet (MSDS)",
    "Commercial Invoice",
    "Packing List",
    "Certificate of Origin",
    "Phytosanitary Certificate"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#0A0E0D]"> <div class="bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]"> ${renderComponent($$result2, "Breadcrumbs", Breadcrumbs, {})} </div>  <section class="relative bg-gradient-to-b from-[#0F1612] to-[#0A0E0D] py-24 lg:py-32 border-b border-white/5 overflow-hidden"> <div class="container relative z-10 mx-auto px-4 md:px-6"> <div class="max-w-4xl mx-auto text-center space-y-8"> <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
Packaging &
<span class="text-[#b8ff00] block mt-2 drop-shadow-[0_0_20px_rgba(184,255,0,0.3)]">Logistics Support</span> </h1> <p class="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
Ensuring product integrity and timely delivery from our facility to your doorstep with professional packaging and global logistics solutions.
</p> </div> </div>  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B8FF00]/5 blur-[150px] rounded-full pointer-events-none"></div> </section>  <section class="py-24 bg-[#0A0E0D]"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-16 space-y-4"> <h2 class="text-4xl font-bold text-white tracking-tight">Packaging Options</h2> <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
Flexible packaging solutions designed to protect your products throughout the supply chain
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${packagingOptions.map((option, index) => renderTemplate`${renderComponent($$result2, "Card", Card, { "className": "bg-[#0F1612]/50 border-white/10 shadow-2xl hover:border-[#B8FF00]/50 hover:bg-[#0F1612] transition-all duration-500 group rounded-[2rem] overflow-hidden flex flex-col" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", CardHeader, { "className": "p-8 pb-4" }, { "default": ($$result4) => renderTemplate` <div class="w-16 h-16 rounded-[1.25rem] bg-[#B8FF00]/10 border border-[#B8FF00]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative"> ${renderComponent($$result4, "option.icon", option.icon, { "class": "w-8 h-8 text-[#B8FF00] relative z-10", "stroke-width": "1.5" })} </div> ${renderComponent($$result4, "CardTitle", CardTitle, { "className": "text-2xl font-bold text-white leading-tight" }, { "default": ($$result5) => renderTemplate`${option.title}` })} ` })} ${renderComponent($$result3, "CardContent", CardContent, { "className": "p-8 pt-0 flex-1 flex flex-col justify-between" }, { "default": ($$result4) => renderTemplate` <p class="text-gray-400 text-lg leading-relaxed font-light mb-8"> ${option.description} </p> <div class="flex flex-wrap gap-2"> ${option.specs.map((spec, i) => renderTemplate`<span class="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#B8FF00]/10 text-[#B8FF00] border border-[#B8FF00]/20"> ${spec} </span>`)} </div> ` })} ` })}`)} </div> </div> </section>  <section class="py-24 bg-[#0F1612]/30 border-y border-white/5 relative overflow-hidden"> <div class="container mx-auto px-4 md:px-6 relative z-10"> <div class="text-center mb-20 space-y-4"> <h2 class="text-4xl font-bold text-white tracking-tight">Global Shipping Solutions</h2> <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
Multiple shipping options to meet your timeline and budget requirements
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto"> ${shippingMethods.map((method, index) => renderTemplate`${renderComponent($$result2, "Card", Card, { "className": "bg-[#0A0E0D]/80 border-white/10 shadow-2xl hover:border-[#B8FF00]/30 transition-all duration-500 rounded-[2.5rem] text-center p-10 group" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", CardContent, { "className": "p-0" }, { "default": ($$result4) => renderTemplate` <div class="w-24 h-24 rounded-full border-4 border-[#B8FF00] flex items-center justify-center mx-auto mb-8 group-hover:bg-[#B8FF00]/10 transition-colors"> ${renderComponent($$result4, "method.icon", method.icon, { "class": "w-12 h-12 text-[#B8FF00]", "stroke-width": "1.5" })} </div> <h3 class="text-2xl font-black text-white mb-3 tracking-tight"> ${method.title} </h3> <p class="text-[#B8FF00] font-black text-2xl mb-6 uppercase tracking-widest"> ${method.highlight} </p> <p class="text-gray-400 text-lg leading-relaxed font-light"> ${method.description} </p> ` })} ` })}`)} </div> </div>  <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#B8FF00]/5 blur-[120px] rounded-full"></div> <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B8FF00]/5 blur-[120px] rounded-full"></div> </section>  <section class="py-24 bg-[#0A0E0D]"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-20 space-y-4"> <h2 class="text-4xl font-bold text-white tracking-tight">Our Logistics Process</h2> <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
A streamlined process ensuring your products arrive safely and on time
</p> </div>  <div class="hidden lg:block relative max-w-6xl mx-auto py-12"> <div class="absolute top-[3.5rem] left-[5%] right-[5%] h-1 bg-white/5 rounded-full"> <div class="h-full bg-gradient-to-r from-[#B8FF00]/20 via-[#B8FF00] to-[#B8FF00]/20 w-full rounded-full shadow-[0_0_15px_rgba(184,255,0,0.3)]"></div> </div> <div class="relative flex items-center justify-between"> ${logisticsSteps.map((step, index) => renderTemplate`<div class="flex flex-col items-center group w-48"> <div class="w-20 h-20 rounded-full bg-[#0A0E0D] border-4 border-[#B8FF00] flex items-center justify-center shadow-2xl mb-8 group-hover:scale-110 transition-all duration-500 relative"> <span class="text-[#B8FF00] font-black text-2xl">${step.step}</span> </div> <h3 class="text-lg font-bold text-white text-center mb-3"> ${step.title} </h3> <p class="text-sm text-gray-500 text-center leading-relaxed"> ${step.description} </p> </div>`)} </div> </div>  <div class="lg:hidden max-w-md mx-auto"> <div class="relative pl-12 space-y-12"> <div class="absolute left-[1.5rem] top-0 bottom-0 w-1 bg-gradient-to-b from-[#B8FF00] to-[#B8FF00]/20 rounded-full"></div> ${logisticsSteps.map((step, index) => renderTemplate`<div class="relative flex flex-col items-start group"> <div class="absolute -left-[2.25rem] w-14 h-14 rounded-full bg-[#0A0E0D] border-4 border-[#B8FF00] flex items-center justify-center shadow-2xl z-10 transition-transform group-hover:scale-110"> <span class="text-[#B8FF00] font-black text-xl">${step.step}</span> </div> <div class="pl-6 pt-1"> <h3 class="text-xl font-bold text-white mb-2 leading-none">${step.title}</h3> <p class="text-gray-500 text-sm leading-relaxed">${step.description}</p> </div> </div>`)} </div> </div> </div> </section>  <section class="py-24 bg-[#0F1612]/50 border-t border-white/5"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-16 space-y-4"> <h2 class="text-4xl font-bold text-white tracking-tight">Quality & Compliance</h2> <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
Meeting international standards with comprehensive documentation and safety protocols
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${complianceFeatures.map((feature, index) => renderTemplate`<div class="text-center p-10 rounded-[2.5rem] bg-[#0A0E0D]/50 border border-white/10 hover:border-[#B8FF00]/30 transition-all duration-300 group"> <div class="w-20 h-20 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "feature.icon", feature.icon, { "class": "w-10 h-10 text-[#B8FF00]", "stroke-width": "1.5" })} </div> <h3 class="text-2xl font-bold text-white mb-4"> ${feature.title} </h3> <p class="text-gray-400 text-lg font-light leading-relaxed"> ${feature.description} </p> </div>`)} </div> </div> </section>  <section class="py-24 bg-[#0A0E0D]"> <div class="container mx-auto px-4 md:px-6"> <div class="max-w-5xl mx-auto glass-strong rounded-[3rem] border border-white/10 p-12 md:p-16 shadow-2xl"> <h2 class="text-3xl font-black text-white text-center mb-12 tracking-tight">
Export Documentation Included
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${documents.map((doc, index) => renderTemplate`<div class="flex items-center gap-4 group"> <div class="w-10 h-10 rounded-xl bg-[#B8FF00]/10 flex items-center justify-center text-[#B8FF00] group-hover:bg-[#B8FF00] group-hover:text-[#0A0E0D] transition-colors"> ${renderComponent($$result2, "CheckCircle2", CheckCircle2, { "class": "w-6 h-6" })} </div> <span class="text-gray-300 text-lg font-light group-hover:text-white transition-colors">${doc}</span> </div>`)} </div> </div> </div> </section>  <section class="py-24 bg-[#0F1612]/50 border-t border-white/5 relative overflow-hidden"> <div class="container relative z-10 mx-auto px-4 md:px-6"> <div class="max-w-4xl mx-auto text-center space-y-10"> <h2 class="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight">
Need a Customized <br> <span class="text-[#B8FF00]">Logistics Plan?</span> </h2> <p class="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
Our logistics team is ready to create a tailored solution for your specific requirements. We handle the complexity so you can focus on your business.
</p> <div class="flex flex-col sm:flex-row justify-center gap-6"> ${renderComponent($$result2, "Link", Link, { "href": "/contact", "className": "inline-flex items-center justify-center gap-4 bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-black uppercase tracking-widest px-12 py-5 rounded-2xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(184,255,0,0.2)]" }, { "default": ($$result3) => renderTemplate`
Contact Our Team
${renderComponent($$result3, "ArrowRight", ArrowRight, { "class": "w-6 h-6" })} ` })} </div> </div> </div>  <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,255,0,0.05)_0%,transparent_70%)]"></div> </section> </main> ` })}`;
}, "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/services/packaging-logistics.astro", void 0);

const $$file = "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/services/packaging-logistics.astro";
const $$url = "/[...lang]/services/packaging-logistics";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PackagingLogistics,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
