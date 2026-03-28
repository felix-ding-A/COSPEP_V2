import { c as createComponent } from './astro-component_DJUp-8MJ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_C_9vr8UG.mjs';
import { $ as $$BaseLayout, L as Link } from './BaseLayout_DFgKn8dd.mjs';
import { B as Breadcrumbs } from './Breadcrumbs_B2xFpkYI.mjs';
import { Headphones, Wrench, FileQuestion, MessageCircle, Zap, Clock, Shield, Users, Target, BookOpen, Award, ArrowRight } from 'lucide-react';
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from './card_E-5LuT40.mjs';
import 'react';

const $$AfterSalesSupport = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AfterSalesSupport;
  const { lang: langParam } = Astro2.params;
  const title = "After-Sales Technical Support | COSPEP";
  const description = "Comprehensive post-purchase support ensuring your success with our products through expert guidance and responsive assistance.";
  const supportServices = [
    {
      icon: Headphones,
      title: "Technical Consultation",
      description: "Expert guidance on product application, formulation adjustments, and regulatory compliance.",
      features: ["24/7 Availability", "Expert Chemists", "Regulatory Guidance"]
    },
    {
      icon: Wrench,
      title: "Formulation Support",
      description: "Assistance with integrating our ingredients into your specific product formulations.",
      features: ["Review & optimizing", "Stability Testing", "Dosage Recommendations"]
    },
    {
      icon: FileQuestion,
      title: "Documentation",
      description: "Full access to technical data sheets, safety data sheets, and certificates of analysis.",
      features: ["COA & MSDS", "Technical Specs", "Quality Certs"]
    },
    {
      icon: MessageCircle,
      title: "Complaint Resolution",
      description: "Dedicated process for handling any product quality issues or delivery concerns.",
      features: ["Fast Resolution", "Root Cause Analysis", "Corrective Actions"]
    }
  ];
  const responseTimes = [
    {
      icon: Zap,
      tier: "Priority",
      time: "< 2 Hours",
      description: "For critical production-stopping issues",
      color: "text-[#b8ff00]",
      bgColor: "bg-[#b8ff00]/10"
    },
    {
      icon: Clock,
      tier: "Standard",
      time: "< 24 Hours",
      description: "For general technical inquiries",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      icon: Shield,
      tier: "Compliance",
      time: "< 48 Hours",
      description: "For regulatory documentation requests",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    }
  ];
  const supportProcess = [
    { step: 1, title: "Submission", description: "Submit your inquiry via our portal or email" },
    { step: 2, title: "Triage", description: "Automatic routing to the relevant expert" },
    { step: 3, title: "Analysis", description: "Technical assessment of your requirement" },
    { step: 4, title: "Resolution", description: "Detailed response and follow-up support" }
  ];
  const commitments = [
    {
      icon: Users,
      title: "Dedicated Team",
      description: "A team of experts assigned to your account for personalized support."
    },
    {
      icon: Target,
      title: "Solution Focused",
      description: "We don't just answer questions; we help you find solutions."
    },
    {
      icon: BookOpen,
      title: "Knowledge Sharing",
      description: "Regular updates on industry trends and technical advancements."
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "We stand behind the quality of our products and support."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#0A0E0D]"> <div class="bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]"> ${renderComponent($$result2, "Breadcrumbs", Breadcrumbs, {})} </div>  <section class="relative bg-[#0A0E0D] py-20 lg:py-32 border-b border-white/5 overflow-hidden"> <div class="container relative z-10 mx-auto px-4 md:px-6"> <div class="max-w-4xl mx-auto text-center space-y-8"> <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
After-Sales
<span class="text-[#b8ff00] block mt-2 drop-shadow-[0_0_20px_rgba(184,255,0,0.3)]">Technical Support</span> </h1> <p class="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
Comprehensive post-purchase support ensuring your success with our products through expert guidance and responsive assistance.
</p> </div> </div>  <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#B8FF00]/5 blur-[120px] rounded-full"></div> <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#b8ff00] to-transparent opacity-30"></div> </section>  <section class="py-24 bg-[#0A0E0D]"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-16 space-y-4"> <h2 class="text-4xl font-bold text-white tracking-tight">Our Support Services</h2> <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
Comprehensive technical support designed to maximize the value of your investment
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${supportServices.map((service, index) => renderTemplate`${renderComponent($$result2, "Card", Card, { "className": "bg-[#0F1612]/50 border-white/10 shadow-2xl hover:border-[#B8FF00]/50 hover:bg-[#0F1612] transition-all duration-500 group rounded-[2rem] overflow-hidden h-full flex flex-col" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", CardHeader, { "className": "p-8 pb-4" }, { "default": ($$result4) => renderTemplate` <div class="w-16 h-16 rounded-[1.25rem] bg-[#B8FF00]/10 border border-[#B8FF00]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative"> ${renderComponent($$result4, "service.icon", service.icon, { "class": "w-8 h-8 text-[#B8FF00] relative z-10", "stroke-width": "1.5" })} </div> ${renderComponent($$result4, "CardTitle", CardTitle, { "className": "text-2xl font-bold text-white leading-tight" }, { "default": ($$result5) => renderTemplate`${service.title}` })} ` })} ${renderComponent($$result3, "CardContent", CardContent, { "className": "p-8 pt-0 flex-1 flex flex-col justify-between" }, { "default": ($$result4) => renderTemplate` <p class="text-gray-400 text-lg leading-relaxed font-light mb-8"> ${service.description} </p> <div class="flex flex-wrap gap-2"> ${service.features.map((feature, i) => renderTemplate`<span class="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#B8FF00]/10 text-[#B8FF00] border border-[#B8FF00]/20"> ${feature} </span>`)} </div> ` })} ` })}`)} </div> </div> </section>  <section class="py-24 bg-[#0F1612]/30 border-y border-white/5 relative overflow-hidden"> <div class="container mx-auto px-4 md:px-6 relative z-10"> <div class="text-center mb-20 space-y-4"> <h2 class="text-4xl font-bold text-white tracking-tight">Response Time Commitment</h2> <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
We prioritize your inquiries based on urgency to ensure timely resolution
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto"> ${responseTimes.map((item, index) => renderTemplate`${renderComponent($$result2, "Card", Card, { "className": "bg-[#0A0E0D]/80 border-white/10 shadow-2xl hover:shadow-[#B8FF00]/10 hover:border-[#B8FF00]/30 transition-all duration-500 rounded-[2.5rem] text-center p-10 group" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", CardContent, { "className": "p-0" }, { "default": ($$result4) => renderTemplate` <div${addAttribute(`w-24 h-24 rounded-full ${item.bgColor} flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform`, "class")}> ${renderComponent($$result4, "item.icon", item.icon, { "class": `w-12 h-12 ${item.color}`, "stroke-width": "1.5" })} </div> <h3 class="text-sm font-black text-gray-500 uppercase tracking-[0.3em] mb-4"> ${item.tier} </h3> <p${addAttribute(`${item.color} font-black text-5xl mb-6 tracking-tighter`, "class")}> ${item.time} </p> <p class="text-gray-400 text-lg leading-relaxed font-light"> ${item.description} </p> ` })} ` })}`)} </div> </div>  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B8FF00]/5 blur-[150px] rounded-full pointer-events-none"></div> </section>  <section class="py-24 bg-[#0A0E0D]"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-20 space-y-4"> <h2 class="text-4xl font-bold text-white tracking-tight">Support Process</h2> <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
A streamlined process to ensure quick and effective resolution of your inquiries
</p> </div>  <div class="hidden lg:block relative max-w-6xl mx-auto py-12">  <div class="absolute top-[3.5rem] left-[5%] right-[5%] h-1 bg-white/5 rounded-full"> <div class="h-full bg-gradient-to-r from-[#B8FF00]/20 via-[#B8FF00] to-[#B8FF00]/20 w-full rounded-full shadow-[0_0_15px_rgba(184,255,0,0.3)]"></div> </div> <div class="relative flex items-center justify-between"> ${supportProcess.map((step, index) => renderTemplate`<div class="flex flex-col items-center group w-48"> <div class="w-20 h-20 rounded-full bg-[#0A0E0D] border-4 border-[#B8FF00] flex items-center justify-center shadow-2xl mb-8 group-hover:scale-110 transition-all duration-500 relative"> <span class="text-[#B8FF00] font-black text-2xl">${step.step}</span> </div> <h3 class="text-lg font-bold text-white text-center mb-3"> ${step.title} </h3> <p class="text-sm text-gray-500 text-center leading-relaxed"> ${step.description} </p> </div>`)} </div> </div>  <div class="lg:hidden max-w-md mx-auto"> <div class="relative pl-12 space-y-12">  <div class="absolute left-[1.5rem] top-0 bottom-0 w-1 bg-gradient-to-b from-[#B8FF00] to-[#B8FF00]/20 rounded-full"></div> ${supportProcess.map((step, index) => renderTemplate`<div class="relative flex flex-col items-start group"> <div class="absolute -left-[2.25rem] w-14 h-14 rounded-full bg-[#0A0E0D] border-4 border-[#B8FF00] flex items-center justify-center shadow-2xl z-10 transition-transform group-hover:scale-110"> <span class="text-[#B8FF00] font-black text-xl">${step.step}</span> </div> <div class="pl-6 pt-1"> <h3 class="text-xl font-bold text-white mb-2 leading-none">${step.title}</h3> <p class="text-gray-500 text-sm leading-relaxed">${step.description}</p> </div> </div>`)} </div> </div> </div> </section>  <section class="py-24 bg-[#0F1612]/50 border-t border-white/5"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-16 space-y-4"> <h2 class="text-4xl font-bold text-white tracking-tight">Our Commitment to You</h2> <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
We are dedicated to your success with unwavering support and partnership
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${commitments.map((item, index) => renderTemplate`<div class="text-center p-10 rounded-[2.5rem] bg-[#0A0E0D]/50 border border-white/10 hover:border-[#B8FF00]/30 transition-all duration-300 group"> <div class="w-20 h-20 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "item.icon", item.icon, { "class": "w-10 h-10 text-[#B8FF00]", "stroke-width": "1.5" })} </div> <h3 class="text-2xl font-bold text-white mb-4"> ${item.title} </h3> <p class="text-gray-400 text-lg font-light leading-relaxed"> ${item.description} </p> </div>`)} </div> </div> </section>  <section class="py-24 bg-[#0A0E0D] relative overflow-hidden"> <div class="container relative z-10 mx-auto px-4 md:px-6"> <div class="max-w-4xl mx-auto glass-strong rounded-[3rem] border border-[#B8FF00]/20 p-12 md:p-20 text-center space-y-10 shadow-2xl shadow-[#B8FF00]/5"> <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
Need Technical <br> <span class="text-[#B8FF00]">Assistance?</span> </h2> <p class="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
Our expert team is ready to help you get the most out of our products. Submit your inquiry today.
</p> <div class="flex justify-center"> ${renderComponent($$result2, "Link", Link, { "href": "/contact", "className": "inline-flex items-center justify-center gap-4 bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-black uppercase tracking-widest px-12 py-5 rounded-2xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(184,255,0,0.2)]" }, { "default": ($$result3) => renderTemplate`
Contact Support
${renderComponent($$result3, "ArrowRight", ArrowRight, { "class": "w-6 h-6" })} ` })} </div> </div> </div>  <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#B8FF00]/5 blur-[120px] rounded-full"></div> <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B8FF00]/5 blur-[120px] rounded-full"></div> </section> </main> ` })}`;
}, "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/services/after-sales-support.astro", void 0);

const $$file = "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/services/after-sales-support.astro";
const $$url = "/[...lang]/services/after-sales-support";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AfterSalesSupport,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
