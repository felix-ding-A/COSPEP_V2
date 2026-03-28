import { c as createComponent } from './astro-component_DJUp-8MJ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_C_9vr8UG.mjs';
import { $ as $$BaseLayout } from './BaseLayout_DFgKn8dd.mjs';
import { B as Breadcrumbs } from './Breadcrumbs_B2xFpkYI.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Terms;
  const { lang: langParam } = Astro2.params;
  const title = "Terms of Service | COSPEP";
  const description = "Review the terms and conditions governing your use of the COSPEP website and our services.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#0A0E0D] text-white"> <div class="bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]"> ${renderComponent($$result2, "Breadcrumbs", Breadcrumbs, {})} </div> <div class="container mx-auto px-4 md:px-6 py-16"> <article class="prose prose-invert prose-slate max-w-4xl mx-auto prose-headings:text-[#B8FF00] prose-a:text-[#B8FF00] prose-strong:text-white prose-p:text-gray-400 prose-li:text-gray-400"> <h1 class="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-8">Terms of Service</h1> <p class="text-sm font-mono opacity-60 uppercase tracking-widest mb-12">Last Updated: February 4, 2026</p> <section class="mb-12"> <h2 class="text-2xl font-bold mb-6">1. Agreement to Terms</h2> <p>
These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and COSPEP (“Company,” “we,” “us,” or “our”), concerning your access to and use of the website [www.cospep.com].
</p> <p>
By accessing the Site, you confirm that you have read, understood, and agreed to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
</p> </section> <section class="mb-12"> <h2 class="text-2xl font-bold mb-6">2. Intellectual Property Rights</h2> <p>
Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.
</p> <p>
The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. No part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
</p> </section> <section class="mb-12"> <h2 class="text-2xl font-bold mb-6">3. User Representations</h2> <p>
By using the Site, you represent and warrant that:
</p> <ul class="list-disc pl-6 space-y-4"> <li>(1) You are accessing the Site for business or professional purposes (B2B context) and have the authority to bind the entity you represent;</li> <li>(2) All registration information you submit will be true, accurate, current, and complete;</li> <li>(3) You will maintain the accuracy of such information and promptly update such registration information as necessary;</li> <li>(4) You are not a minor in the jurisdiction in which you reside;</li> <li>(5) Your use of the Site will not violate any applicable law or regulation.</li> </ul> </section> <section class="mb-12 p-8 glass-strong rounded-3xl border border-[#B8FF00]/20"> <h2 class="text-2xl font-bold mb-6 text-[#B8FF00]">4. Products and Use Restrictions (⚠️ Important)</h2> <p>
COSPEP supplies raw materials (Peptides, Plant Extracts) intended for Research & Development (R&D), industrial manufacturing, or cosmetic formulation purposes only.
</p> <p class="mt-4"> <strong>Not for End Use:</strong> Our products are NOT intended for direct human consumption, diagnosis, treatment, or use as finished drugs unless explicitly stated and certified.
</p> <p class="mt-4"> <strong>Compliance:</strong> You are solely responsible for complying with all applicable laws and regulations regarding the handling, storage, and use of these materials in your specific region.
</p> </section> <section class="mb-12"> <h2 class="text-2xl font-bold mb-6">5. Limitation of Liability</h2> <p>
In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site or our products.
</p> </section> <section class="mb-12"> <h2 class="text-2xl font-bold mb-6">6. Governing Law</h2> <p>
These Terms shall be governed by and defined following the laws of the People's Republic of China. COSPEP and yourself irrevocably consent that the courts of Xi'an, Shaanxi shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
</p> </section> <section class="mb-12 border-t border-white/10 pt-12"> <h2 class="text-2xl font-bold mb-6">7. Contact Us</h2> <p>
In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
</p> <div class="mt-4 space-y-2"> <p class="font-bold text-white">COSPEP</p> <p>Xi'an, Shaanxi, China</p> <p><strong>Email:</strong> <a href="mailto:info@cospep.com" class="text-[#B8FF00] hover:underline">info@cospep.com</a></p> </div> </section> </article> </div> </main> ` })}`;
}, "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/terms.astro", void 0);

const $$file = "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/terms.astro";
const $$url = "/[...lang]/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Terms,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
