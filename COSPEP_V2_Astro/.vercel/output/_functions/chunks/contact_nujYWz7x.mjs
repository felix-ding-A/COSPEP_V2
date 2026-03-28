import { c as createComponent } from './astro-component_DJUp-8MJ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_C_9vr8UG.mjs';
import { a as useLocale, b as useSearchParams, B as Button, $ as $$BaseLayout } from './BaseLayout_DFgKn8dd.mjs';
import { B as Breadcrumbs } from './Breadcrumbs_B2xFpkYI.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useState, useCallback } from 'react';
import { F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl, I as Input, e as FormMessage, T as Textarea } from './textarea_DYF5ZzQM.mjs';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, R as ReCaptchaProvider } from './recaptcha-provider_CHVKK2P4.mjs';
import { toast } from 'sonner';
import { Loader2, MapPin, Mail, Phone } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  type: z.string().min(1, "Please select an inquiry type"),
  productName: z.string().optional(),
  targetPrice: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().optional()
  // Honeypot field
});
function ContactForm() {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const defaultProduct = searchParams.get("product") || "";
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      type: defaultProduct ? "Sourcing Request" : "General",
      productName: defaultProduct,
      targetPrice: "",
      message: "",
      website: ""
      // Honeypot field
    }
  });
  const onSubmit = useCallback(async (values) => {
    if (!executeRecaptcha) {
      toast.error("reCAPTCHA not ready. Please try again.");
      return;
    }
    setIsSubmitting(true);
    try {
      const recaptchaToken = await executeRecaptcha("submit_inquiry");
      const formData = new FormData();
      formData.append("locale", locale);
      formData.append("recaptchaToken", recaptchaToken);
      Object.entries(values).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      const response = await fetch("/api/submit-inquiry", {
        method: "POST",
        body: formData
      });
      const result = await response.json();
      if (result.success) {
        toast.success(result.message);
        form.reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [executeRecaptcha, locale, form]);
  return /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-3xl p-8 border border-white/10 shadow-2xl", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-8", children: "Send an Inquiry" }),
    /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "name",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "Your Name" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "John Doe",
                  ...field,
                  className: "bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#B8FF00]/50 transition-all"
                }
              ) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "Email Address" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "john@company.com",
                  ...field,
                  className: "bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#B8FF00]/50 transition-all"
                }
              ) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "company",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "Company Name" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Your Business Name",
                  ...field,
                  className: "bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#B8FF00]/50 transition-all"
                }
              ) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "phone",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "WhatsApp / TEL (Optional)" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "+1 234 567 890",
                  ...field,
                  className: "bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#B8FF00]/50 transition-all"
                }
              ) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "type",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "Inquiry Type" }),
              /* @__PURE__ */ jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { className: "bg-white/5 border-white/10 text-white h-12", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select type" }) }) }),
                /* @__PURE__ */ jsxs(SelectContent, { className: "bg-[#0F1612] border-white/10 text-white", children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "Product Quote", children: "Product Quote" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Sourcing Request", children: "Sourcing Request" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "General", children: "General Inquiry" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "productName",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "Target Product (Optional)" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "e.g. Curcumin 95%",
                  ...field,
                  className: "bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#B8FF00]/50 transition-all"
                }
              ) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "targetPrice",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "Target Price / Budget (Optional)" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Input,
              {
                placeholder: "e.g. $25/kg",
                ...field,
                className: "bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#B8FF00]/50 transition-all"
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "message",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { className: "text-gray-300", children: "Message" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Textarea,
              {
                placeholder: "Please tell us about your requirements (Quantity, Spec, etc.)",
                className: "min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#B8FF00]/50 transition-all",
                ...field
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "website",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "hidden", children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Website" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Input,
              {
                ...field,
                autoComplete: "off",
                tabIndex: -1
              }
            ) })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "w-full bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-bold text-xl h-14 hover:scale-[1.02] transition-all shadow-lg shadow-[#B8FF00]/20",
          disabled: isSubmitting,
          children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Loader2, { className: "mr-3 h-6 w-6 animate-spin" }),
            "Sending..."
          ] }) : "Send Request"
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 text-center mt-4", children: [
        "This site is protected by reCAPTCHA and the Google",
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://policies.google.com/privacy", target: "_blank", rel: "noopener noreferrer", className: "underline hover:text-gray-400", children: "Privacy Policy" }),
        " ",
        "and",
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://policies.google.com/terms", target: "_blank", rel: "noopener noreferrer", className: "underline hover:text-gray-400", children: "Terms of Service" }),
        " ",
        "apply."
      ] })
    ] }) })
  ] });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Contact;
  const { lang: langParam } = Astro2.params;
  const title = "Contact Us | COSPEP";
  const description = "Get in touch with COSPEP for high-quality botanical ingredients and bioactive peptides. We offer expert sourcing, technical support, and global logistics solutions.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#0A0E0D] text-white"> <div class="bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]"> ${renderComponent($$result2, "Breadcrumbs", Breadcrumbs, {})} </div> <div class="container mx-auto px-4 md:px-6 py-16"> <div class="mb-16 text-center space-y-4"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
Contact Us <span class="text-[#B8FF00]">Now</span> </h1> <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
Whether you need a quick quote, a specific ingredient sourcing, or have a logistical question, we are here to help.
</p> </div> <div class="grid lg:grid-cols-2 gap-16 items-start">  <div class="space-y-10"> <div class="glass-strong rounded-3xl p-10 border border-white/10 space-y-8 bg-gradient-to-br from-[#0F1612] to-[#0A0E0D]"> <div class="flex items-start space-x-6"> <div class="w-12 h-12 rounded-2xl bg-[#B8FF00]/10 flex items-center justify-center flex-shrink-0 text-[#B8FF00]"> ${renderComponent($$result2, "MapPin", MapPin, { "class": "h-7 w-7" })} </div> <div> <h3 class="font-bold text-xl mb-2 text-white">Headquarters</h3> <p class="text-gray-400 text-lg leading-relaxed">
No. 10108, 1st Floor, Unit 1, Building DK8-8, CR Future City, International Trade and Logistics Park, Xi'an City, Shaanxi Province
</p> </div> </div> <div class="flex items-start space-x-6"> <div class="w-12 h-12 rounded-2xl bg-[#B8FF00]/10 flex items-center justify-center flex-shrink-0 text-[#B8FF00]"> ${renderComponent($$result2, "Mail", Mail, { "class": "h-7 w-7" })} </div> <div> <h3 class="font-bold text-xl mb-2 text-white">Email Us</h3> <p class="text-gray-400 text-lg"> <a href="mailto:info@cospep.com" class="hover:text-[#B8FF00] transition-colors decoration-[#B8FF00]/30 underline underline-offset-4 font-medium">
info@cospep.com
</a> </p> </div> </div> <div class="flex items-start space-x-6"> <div class="w-12 h-12 rounded-2xl bg-[#B8FF00]/10 flex items-center justify-center flex-shrink-0 text-[#B8FF00]"> ${renderComponent($$result2, "Phone", Phone, { "class": "h-7 w-7" })} </div> <div> <h3 class="font-bold text-xl mb-2 text-white">Call / WhatsApp</h3> <p class="text-gray-400 text-lg font-mono"> <a href="tel:+8613201818603" class="hover:text-[#B8FF00] transition-colors">
+86 13201818603
</a> </p> <div class="mt-6"> <a href="https://wa.me/8613201818603" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-all hover:scale-105 shadow-lg shadow-[#25D366]/20"> <svg class="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.171.823-.299.043-.687.072-1.109-.064-.242-.078-.545-.184-.897-.337-1.493-.65-2.457-2.164-2.532-2.264-.074-.1-.611-.813-.611-1.549 0-.736.386-1.1.528-1.248.143-.148.312-.185.416-.185.105 0 .208.001.301.004.098.004.228-.037.357.275.13.312.443 1.079.481 1.157.039.079.066.17.013.275-.053.106-.079.171-.16.265-.079.094-.171.21-.243.284-.084.085-.172.178-.073.348.099.17.442.729.948 1.18.652.58 1.202.76 1.371.844.17.085.269.071.369-.043.1-.114.428-.497.545-.668.114-.171.228-.143.385-.084.157.058 1.001.472 1.171.557.17.085.284.128.327.2.043.071.043.411-.101.816z"></path> <path d="M12.094 2c-5.468 0-9.911 4.442-9.911 9.911 0 1.758.459 3.474 1.33 4.99L2 22l5.221-1.371c1.5.816 3.189 1.247 4.918 1.247a9.911 9.911 0 009.911-9.911c0-5.468-4.442-9.911-9.911-9.911zm1.034 1.4c3.085 0 5.604 2.519 5.604 5.604 0 3.085-2.519 5.604-5.604 5.604-3.085 0-5.604-2.519-5.604-5.604 0-3.085 2.519-5.604 5.604-5.604z"></path> </svg>
Chat on WhatsApp
</a> </div> </div> </div> </div>  <div class="aspect-video w-full rounded-3xl bg-[#0F1612] overflow-hidden border border-white/10 shadow-2xl relative"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102877.29415896357!2d108.878!3d34.229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x366379e922ac17b9%3A0x85d466fda5a67!2sXi%27an%2C%20Shaanxi%2C%20China!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" width="100%" height="100%" style="border: 0;" allowfullscreen="" loading="lazy" class="grayscale opacity-70 contrast-125"></iframe> <div class="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl"></div> </div> </div>  ${renderComponent($$result2, "ReCaptchaProvider", ReCaptchaProvider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/providers/recaptcha-provider", "client:component-export": "ReCaptchaProvider" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/contact/contact-form", "client:component-export": "ContactForm" })} ` })} </div> </div> </main> ` })}`;
}, "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/contact.astro", void 0);

const $$file = "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/pages/[...lang]/contact.astro";
const $$url = "/[...lang]/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
