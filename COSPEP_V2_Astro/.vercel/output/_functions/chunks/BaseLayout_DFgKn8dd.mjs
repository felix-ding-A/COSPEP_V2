import { c as createComponent } from './astro-component_DJUp-8MJ.mjs';
import 'piccolore';
import { h as addAttribute, p as renderHead, l as renderComponent, q as renderSlot, r as renderTemplate } from './entrypoint_C_9vr8UG.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import React__default from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { c as client } from './sanity_5UM8X-_V.mjs';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon, ChevronDown, Search, Globe, Menu } from 'lucide-react';

const common$3 = {"learnMore":"Learn More","viewDetails":"View Details","viewAll":"View All Products","contact":"Contact","home":"Home","aboutUs":"About Us","products":"Products","services":"Services","allRightsReserved":"All rights reserved"};
const nav$3 = {"products":"Products","about":"About Us","services":{"title":"Services","customManufacturing":"Custom Manufacturing","customFormulations":"Custom Formulations","rdTechnicalSupport":"R&D and Technical Support","packagingLogistics":"Packaging & Logistics Support","afterSalesSupport":"After-Sales Technical Support"},"contact":"Contact","searchPlaceholder":"Search products...","viewAllProducts":"View All Products","loading":"Loading...","resources":{"title":"Resources","industryInsights":"Industry Insights","sustainability":"Sustainability","customerService":"Customer Service"},"sustainability":{"hero":{"title":"Lucid waters and lush mountains are invaluable assets.","subtitle":"Preserving Nature for Future Generations","citation":"Translation Authority: Central Compilation & Translation Bureau Source: Guangming Daily (Nov. 19, 2015)"},"sections":{"sourcing":{"title":"Ethical Sourcing","description":"Our commitment to ethical sourcing ensures that every ingredient is harvested with respect for the environment and the communities that cultivate them."},"manufacturing":{"title":"Green Manufacturing","description":"We employ eco-friendly manufacturing processes to minimize waste and reduce our carbon footprint."},"community":{"title":"Community Support","description":"Supporting local farmers and communities is at the heart of our sustainability mission."}}}};
const footer$3 = {"companyDescription":"Your premier sourcing partner for high-quality botanical ingredients. Bridging the gap between certified standards and global demand.","quickLinks":{"title":"Quick Links","home":"Home","about":"About Us","service":"Packaging & Logistics","contact":"Contact Us"},"products":{"title":"Products","allIngredients":"All Ingredients","readyStock":"Ready Stock","foodAdditives":"Food Additives","cosmeticRaw":"Cosmetic Raw"},"contact":{"title":"Contact"},"privacyPolicy":"Privacy Policy","termsOfService":"Terms of Service","copyright":"Prius Group / COSPEP"};
const home$3 = {"hero":{"slides":[{"badge":"100% Pure • Clinically Tested","title":"Pure, Potent &","highlight":"Naturally Derived","description":"Ethically sourced and sustainably made to empower consistency in health you can trust, for maximum impact on your goals."},{"badge":"Premium Quality • Certified","title":"Innovation Meets","highlight":"Excellence","description":"Cutting-edge formulations backed by science, delivering superior results for your health and wellness journey."},{"badge":"Trusted Worldwide • Proven Results","title":"Your Partner in","highlight":"Health & Wellness","description":"Comprehensive solutions tailored to your needs, supported by industry-leading expertise and quality assurance."}]},"stats":{"cgmp":{"label":"cGMP Certified","description":"Quality Assured"},"fda":{"label":"FDA Regulated","description":"Safety First"},"tested":{"label":"Third-Party Tested","description":"Verified Purity"},"shipping":{"label":"Global Shipping","description":"Worldwide Delivery"}},"products":{"badge":"Our Product","title":"Our Product Ecosystem","description":"A comprehensive portfolio designed to empower a truly diverse range of health and industry provision.","items":[{"title":"Bio-Active Peptides","description":"Advanced peptide formulations for targeted health outcomes"},{"title":"Pharmaceutical Intermediates","description":"High-purity intermediates for pharmaceutical manufacturing"},{"title":"Natural Plant Extracts","description":"Premium botanical extracts with verified potency"},{"title":"Custom Health Supplements","description":"Tailored supplement solutions for your needs"}]},"manufacturing":{"badge":"Full-Service Operation","title":"End-to-End\nSupplement Manufacturing","description":"From concept to shelf-ready product, we guide you through every step of the supplement manufacturing journey with industry-leading expertise and quality assurance.","features":["Validated Formula Design","Turnkey Manufacturing Solutions","Regulatory Compliance Support","Precision Ingredient Sourcing","Very strict compliance support","Packaging & Label Design"],"cta":"Start Your Business","yearsLabel":"15+ Year"},"features":{"title":"Why Partner With COSPEP?","description":"We bridge the gap between quality manufacturing and global demand with rigorous standards.","items":[{"title":"Strict Auditing","description":"Every supplier is vetted against ISO and cGMP standards. We allow no compromise on safety and authenticity."},{"title":"Consolidated Shipping","description":"Save on logistics by combining multiple small orders into one shipment. We handle the export documentation."},{"title":"Third-Party Testing","description":"Independent lab testing available upon request. Verify potency, heavy metals, and pesticide residues."}]},"featuredProducts":{"title":"Featured Ingredients","description":"Discover our most sought-after botanical extracts, verified for quality and potency.","viewDetails":"View Details","viewAll":"View All Products","casNumber":"CAS No.:","stockStatus":{"readyToShip":"Ready to Ship","lowStock":"Low Stock","madeToOrder":"Made to Order"}}};
const en = {
  common: common$3,
  nav: nav$3,
  footer: footer$3,
  home: home$3,
};

const common$2 = {"learnMore":"Leer más","viewDetails":"Ver detalles","viewAll":"Ver todos los productos","contact":"Contacto","home":"Inicio","aboutUs":"Sobre nosotros","products":"Productos","services":"Servicios","allRightsReserved":"Todos los derechos reservados"};
const nav$2 = {"products":"Productos","pharmaSolutions":"Fabricación Personalizada","about":"Sobre Nosotros","contact":"Contacto","searchPlaceholder":"Buscar productos...","viewAllProducts":"Ver Todos los Productos","loading":"Cargando...","resources":{"title":"Recursos","news":"Noticias","blogs":"Blogs","customerService":"Servicio al Cliente"}};
const footer$2 = {"companyDescription":"Su socio principal de abastecimiento de ingredientes botánicos de alta calidad. Cerrando la brecha entre estándares certificados y demanda global.","quickLinks":{"title":"Enlaces Rápidos","home":"Inicio","about":"Sobre Nosotros","service":"Servicio Logístico","contact":"Contáctenos"},"products":{"title":"Productos","allIngredients":"Todos los Ingredientes","readyStock":"Stock Listo","foodAdditives":"Aditivos Alimentarios","cosmeticRaw":"Materias Primas Cosméticas"},"contact":{"title":"Contacto"},"privacyPolicy":"Política de Privacidad","termsOfService":"Términos de Servicio","copyright":"Prius Group / COSPEP"};
const home$2 = {"hero":{"slides":[{"badge":"100% Puro • Clínicamente probado","title":"Puro, potente y","highlight":"Derivado naturalmente","description":"Abastecido éticamente y fabricado de manera sostenible para potenciar la consistencia en la salud en la que puede confiar."},{"badge":"Calidad Premium • Certificado","title":"La innovación se une a","highlight":"La Excelencia","description":"Formulaciones de vanguardia respaldadas por la ciencia, que ofrecen resultados superiores para su bienestar."},{"badge":"Confianza mundial • Resultados probados","title":"Su socio en","highlight":"Salud y Bienestar","description":"Soluciones integrales adaptadas a sus necesidades, respaldadas por la experiencia líder en la industria."}]},"stats":{"cgmp":{"label":"Certificado cGMP","description":"Calidad garantizada"},"fda":{"label":"Regulado por FDA","description":"Seguridad primero"},"tested":{"label":"Pruebas de terceros","description":"Pureza verificada"},"shipping":{"label":"Envío global","description":"Entrega mundial"}},"products":{"badge":"Nuestro producto","title":"Nuestro ecosistema de productos","description":"Un portafolio integral diseñado para potenciar una gama diversa de provisión industrial y de salud.","items":[{"title":"Péptidos bioactivos","description":"Formulaciones avanzadas para resultados de salud específicos"},{"title":"Intermedios farmacéuticos","description":"Intermedios de alta pureza para la fabricación farmacéutica"},{"title":"Extractos de plantas naturales","description":"Extractos botánicos premium con potencia verificada"},{"title":"Suplementos de salud personalizados","description":"Soluciones de suplementos a medida para sus necesidades"}]},"manufacturing":{"badge":"Operación de servicio completo","title":"Fabricación integral de suplementos","description":"Desde el concepto hasta el producto listo para la venta, lo guiamos en cada paso con experiencia y garantía de calidad.","features":["Diseño de fórmulas validado","Soluciones de fabricación llave en mano","Soporte de cumplimiento regulatorio","Abastecimiento preciso de ingredientes","Soporte de cumplimiento estricto","Diseño de empaque y etiquetas"],"cta":"Inicie su proyecto","yearsLabel":"100+ Años"},"features":{"title":"¿Por qué asociarse con COSPEP?","description":"Unimos la fabricación de calidad con la demanda global mediante estándares rigurosos.","items":[{"title":"Auditoría estricta","description":"Cada proveedor es evaluado bajo estándares ISO y cGMP. Sin compromisos en seguridad."},{"title":"Envío consolidado","description":"Ahorre en logística combinando pedidos pequeños en un solo envío. Manejamos la exportación."},{"title":"Pruebas de terceros","description":"Pruebas de laboratorio independientes disponibles para verificar potencia y metales pesados."}]},"featuredProducts":{"title":"Ingredientes destacados","description":"Descubra nuestros extractos botánicos más solicitados, verificados en calidad y potencia.","viewDetails":"Ver detalles","viewAll":"Ver todos los productos","casNumber":"CAS No.:","stockStatus":{"readyToShip":"Listo para enviar","lowStock":"Stock bajo","madeToOrder":"Bajo pedido"}}};
const es = {
  common: common$2,
  nav: nav$2,
  footer: footer$2,
  home: home$2,
};

const common$1 = {"learnMore":"Подробнее","viewDetails":"Детали","viewAll":"Все продукты","contact":"Контакты","home":"Главная","aboutUs":"О нас","products":"Продукты","services":"Услуги","allRightsReserved":"Все права защищены"};
const nav$1 = {"products":"Продукты","pharmaSolutions":"Индивидуальное производство","about":"О нас","contact":"Контакт","searchPlaceholder":"Поиск продуктов...","viewAllProducts":"Посмотреть все продукты","loading":"Загрузка...","resources":{"title":"Ресурсы","news":"Новости","blogs":"Блоги","customerService":"Служба поддержки"}};
const footer$1 = {"companyDescription":"Ваш ведущий партнер по поставкам высококачественных растительных ингредиентов. Мост между сертифицированными стандартами и мировым спросом.","quickLinks":{"title":"Быстрые ссылки","home":"Главная","about":"О нас","service":"Логистические услуги","contact":"Связаться с нами"},"products":{"title":"Продукты","allIngredients":"Все ингредиенты","readyStock":"Готовый склад","foodAdditives":"Пищевые добавки","cosmeticRaw":"Косметическое сырье"},"contact":{"title":"Контакт"},"privacyPolicy":"Политика конфиденциальности","termsOfService":"Условия обслуживания","copyright":"Prius Group / COSPEP"};
const home$1 = {"hero":{"slides":[{"badge":"100% Чистота • Протестировано","title":"Чистые, мощные и","highlight":"Натуральные","description":"Этичное производство и экологичность для стабильного качества здоровья, которому можно доверять."},{"badge":"Премиум качество • Сертифицировано","title":"Инновации встречают","highlight":"Совершенство","description":"Передовые формулы, основанные на науке, обеспечивают превосходные результаты для вашего здоровья."},{"badge":"Доверие по всему миру","title":"Ваш партнер в","highlight":"Сфере здоровья","description":"Комплексные решения, адаптированные под ваши нужды, при поддержке отраслевых экспертов."}]},"stats":{"cgmp":{"label":"Сертификат cGMP","description":"Гарантия качества"},"fda":{"label":"Регулировка FDA","description":"Безопасность прежде всего"},"tested":{"label":"Сторонние тесты","description":"Чистота подтверждена"},"shipping":{"label":"Глобальная доставка","description":"По всему миру"}},"products":{"badge":"Наш продукт","title":"Экосистема продуктов","description":"Комплексный портфель, созданный для обеспечения широкого спектра потребностей индустрии здоровья.","items":[{"title":"Биоактивные пептиды","description":"Современные пептидные формулы для здоровья"},{"title":"Фарм-субстанции","description":"Высокочистые интермедиаты для производства"},{"title":"Растительные экстракты","description":"Премиальные экстракты с подтвержденной эффективностью"},{"title":"Индивидуальные добавки","description":"Решения для БАД под ваши задачи"}]},"manufacturing":{"badge":"Полный цикл услуг","title":"Производство БАД под ключ","description":"От концепции до готового продукта: мы сопровождаем вас на каждом этапе производства с контролем качества.","features":["Разработка формул","Производственные решения под ключ","Регуляторная поддержка","Поиск качественных ингредиентов","Строгий контроль соответствия","Дизайн упаковки и этикеток"],"cta":"Начать проект","yearsLabel":"100+ лет"},"features":{"title":"Почему выбирают COSPEP?","description":"Мы объединяем качественное производство и глобальный спрос через строгие стандарты.","items":[{"title":"Строгий аудит","description":"Проверка поставщиков по ISO и cGMP. Без компромиссов в безопасности."},{"title":"Сборные грузы","description":"Экономия на логистике: объединяем малые заказы в одну отправку."},{"title":"Сторонние тесты","description":"Независимая проверка чистоты, металлов и пестицидов по запросу."}]},"featuredProducts":{"title":"Популярные ингредиенты","description":"Откройте для себя востребованные экстракты, проверенные на качество и эффективность.","viewDetails":"Подробнее","viewAll":"Все продукты","casNumber":"CAS No.:","stockStatus":{"readyToShip":"Готов к отправке","lowStock":"Мало на складе","madeToOrder":"Под заказ"}}};
const ru = {
  common: common$1,
  nav: nav$1,
  footer: footer$1,
  home: home$1,
};

const common = {"learnMore":"تعرف على المزيد","viewDetails":"عرض التفاصيل","viewAll":"عرض جميع المنتجات","contact":"اتصل بنا","home":"الرئيسية","aboutUs":"من نحن","products":"المنتجات","services":"خدماتنا","allRightsReserved":"جميع الحقوق محفوظة"};
const nav = {"products":"المنتجات","pharmaSolutions":"التصنيع المخصص","about":"معلومات عنا","contact":"اتصل بنا","searchPlaceholder":"البحث عن المنتجات...","viewAllProducts":"عرض جميع المنتجات","loading":"جار التحميل...","resources":{"title":"الموارد","news":"الأخبار","blogs":"المدونات","customerService":"خدمة العملاء"}};
const footer = {"companyDescription":"شريكك الرئيسي في توريد المكونات النباتية عالية الجودة. سد الفجوة بين المعايير المعتمدة والطلب العالمي.","quickLinks":{"title":"روابط سريعة","home":"الصفحة الرئيسية","about":"معلومات عنا","service":"الخدمات اللوجستية","contact":"اتصل بنا"},"products":{"title":"المنتجات","allIngredients":"جميع المكونات","readyStock":"المخزون الجاهز","foodAdditives":"المضافات الغذائية","cosmeticRaw":"المواد الخام للتجميل"},"contact":{"title":"اتصل بنا"},"privacyPolicy":"سياسة الخصوصية","termsOfService":"شروط الخدمة","copyright":"Prius Group / COSPEP"};
const home = {"hero":{"slides":[{"badge":"نقي 100% • مختبر سريرياً","title":"نقي وقوي و","highlight":"مشتق طبيعياً","description":"مصادر أخلاقية وصناعة مستدامة لتعزيز صحتك بجودة يمكنك الوثوق بها."},{"badge":"جودة ممتازة • معتمد","title":"الابتكار يلتقي بـ","highlight":"التميز","description":"تركيبات متطورة مدعومة بالعلم، تقدم نتائج فائقة لرحلة صحتك وعافيتك."},{"badge":"موثوق عالمياً • نتائج مثبتة","title":"شريكك في","highlight":"الصحة والعافية","description":"حلول شاملة مصممة خصيصاً لاحتياجاتك، مدعومة بخبرة رائدة في الصناعة."}]},"stats":{"cgmp":{"label":"شهادة cGMP","description":"جودة مضمونة"},"fda":{"label":"خاضع لرقابة FDA","description":"السلامة أولاً"},"tested":{"label":"مختبر من جهة خارجية","description":"نقاء موثق"},"shipping":{"label":"شحن عالمي","description":"توصيل لجميع الدول"}},"products":{"badge":"منتجنا","title":"منظومة منتجاتنا","description":"محفظة شاملة مصممة لتمكين مجموعة متنوعة من احتياجات الصحة والصناعة.","items":[{"title":"الببتيدات النشطة حيوياً","description":"تركيبات ببتيدية متقدمة لنتائج صحية محددة"},{"title":"الوسائط الدوائية","description":"وسائط عالية النقاء للتصنيع الدوائي"},{"title":"مستخلصات نباتية طبيعية","description":"مستخلصات نباتية فاخرة بفاعلية مثبتة"},{"title":"مكملات صحية مخصصة","description":"حلول مكملات غذائية مفصلة حسب احتياجاتك"}]},"manufacturing":{"badge":"خدمة كاملة","title":"تصنيع المكملات من الألف إلى الياء","description":"من المفهوم إلى المنتج الجاهز، نوجهك في كل خطوة بخبرة رائدة وضمان للجودة.","features":["تصميم تركيبات معتمد","حلول تصنيع متكاملة","دعم الامتثال التنظيمي","توريد دقيق للمكونات","دعم صارم للامتثال","تصميم العبوات والملصقات"],"cta":"ابدأ مشروعك","yearsLabel":"أكثر من 100 عام"},"features":{"title":"لماذا تشارك COSPEP؟","description":"نحن نربط بين جودة التصنيع والطلب العالمي بمعايير صارمة.","items":[{"title":"تدقيق صارم","description":"يتم فحص كل مورد وفقاً لمعايير ISO و cGMP. لا تهاون في السلامة."},{"title":"شحن مجمع","description":"وفر في التكاليف بدمج عدة طلبيات صغيرة في شحنة واحدة. نتولى وثائق التصدير."},{"title":"فحص جهة خارجية","description":"يتوفر فحص معملي مستقل للتحقق من الفعالية والمعادن الثقيلة عند الطلب."}]},"featuredProducts":{"title":"مكونات مميزة","description":"اكتشف المستخلصات النباتية الأكثر طلباً، الموثقة من حيث الجودة والفعالية.","viewDetails":"عرض التفاصيل","viewAll":"عرض جميع المنتجات","casNumber":"CAS No.:","stockStatus":{"readyToShip":"جاهز للشحن","lowStock":"مخزون منخفض","madeToOrder":"صنع حسب الطلب"}}};
const ar = {
  common,
  nav,
  footer,
  home,
};

const messages = {
  en,
  es,
  ru,
  ar
};
function useTranslations$1(lang, namespace) {
  return function t(key) {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const keys = fullKey.split(".");
    let value = messages[lang];
    for (const k of keys) {
      if (value === void 0 || value === null) break;
      value = value[k];
    }
    return value || key;
  };
}

function Link({ href, children, ...props }) {
  const getLocale = () => {
    if (typeof window === "undefined") return "en";
    const [, lang] = window.location.pathname.split("/");
    return ["en", "es", "ru", "ar"].includes(lang) ? lang : "en";
  };
  const locale = getLocale();
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  const hasLocalePrefix = /^\/(en|es|ru|ar)(\/|$)/.test(href);
  let finalHref = href;
  if (isInternal && !hasLocalePrefix && locale !== "en") {
    finalHref = `/${locale}${href === "/" ? "" : href}`;
  }
  return /* @__PURE__ */ jsx("a", { href: finalHref, ...props, children });
}

function useLocale() {
  if (typeof window === "undefined") return "en";
  const [, lang] = window.location.pathname.split("/");
  return ["en", "es", "ru", "ar"].includes(lang) ? lang : "en";
}
function useParams() {
  const locale = useLocale();
  return { lang: locale };
}
function useSearchParams() {
  if (typeof window === "undefined") return new URLSearchParams();
  return new URLSearchParams(window.location.search);
}
function useTranslations(namespace) {
  const locale = useLocale();
  return useTranslations$1(locale, namespace);
}
function usePathname() {
  if (typeof window === "undefined") return "/";
  return window.location.pathname;
}
function useRouter() {
  return {
    push: (url) => {
      window.location.href = url;
    },
    replace: (url, options) => {
      if (options?.locale) {
        const parts = window.location.pathname.split("/");
        if (["en", "es", "ru", "ar"].includes(parts[1])) {
          parts[1] = options.locale;
        } else {
          parts.splice(1, 0, options.locale);
        }
        window.location.replace(parts.join("/"));
      } else {
        window.location.replace(url);
      }
    },
    back: () => {
      window.history.back();
    }
  };
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

function Image({ src, alt, width, height, priority, className, ...props }) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt,
      width,
      height,
      className,
      loading: priority ? "eager" : "lazy",
      ...props
    }
  );
}

function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ar", name: "العربية", flag: "🇸🇦" }
];
function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("nav");
  const [categories, setCategories] = React__default.useState([]);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = React__default.useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = React__default.useState(null);
  const [expandedDesktopCategory, setExpandedDesktopCategory] = React__default.useState(null);
  const mainCategories = [
    { title: "Botanical Extracts", value: "botanical-extracts" },
    { title: "Fruit & Vegetable Powders", value: "fruit-vegetable-powders" },
    { title: "Peptides", value: "peptides" },
    { title: "Custom Solutions", value: "custom-solutions" }
  ];
  const groupedCategories = React__default.useMemo(() => {
    const grouped = {};
    mainCategories.forEach((mc) => {
      grouped[mc.value] = categories.filter((cat) => cat.parentCategory === mc.value);
    });
    return grouped;
  }, [categories]);
  const resourcesMenu = [
    { href: "/industry-insights", label: t("resources.industryInsights") },
    { href: "/resources/sustainability", label: t("resources.sustainability") }
  ];
  const servicesMenu = [
    { href: "/custom-manufacturing", label: t("services.customManufacturing") },
    { href: "/services/packaging-logistics", label: t("services.packagingLogistics") },
    { href: "/services/after-sales-support", label: t("services.afterSalesSupport") }
  ];
  const handleLanguageChange = (newLocale) => {
    router.replace(pathname, { locale: newLocale });
    setIsLangDropdownOpen(false);
  };
  React__default.useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "category"] | order(parentCategory asc, order asc) {
                title, 
                slug, 
                parentCategory,
                order
            }`;
      try {
        const data = await client.fetch(query);
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: "sticky top-0 z-50 w-full transition-all duration-300 glass-strong",
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex h-20 items-center justify-between px-4 md:px-6", children: [
        /* @__PURE__ */ jsxs(Link, { href: "/", className: "flex items-center gap-3 group", children: [
          /* @__PURE__ */ jsx(
            Image,
            {
              src: "/logo.webp",
              alt: "COSPEP Logo",
              width: 40,
              height: 40,
              className: "object-contain group-hover:scale-110 transition-transform",
              priority: true
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-white tracking-tight group-hover:text-[#B8FF00] transition-colors", children: "COSPEP" })
        ] }),
        /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm font-medium", children: [
          /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
            /* @__PURE__ */ jsxs(Link, { href: "/products", className: "flex items-center gap-1 text-white hover:text-[#B8FF00] transition-colors py-4", children: [
              t("products"),
              /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-full hidden group-hover:block", children: /* @__PURE__ */ jsxs("div", { className: "flex rounded-lg glass-strong border border-white/10 shadow-lg overflow-hidden animate-in fade-in-0 slide-in-from-top-2 duration-300", children: [
              /* @__PURE__ */ jsxs("div", { className: "w-72 h-96 border-r border-white/10 p-2 flex flex-col", children: [
                mainCategories.map((mainCat) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "group/cat relative",
                    onMouseEnter: () => setExpandedDesktopCategory(mainCat.value),
                    children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-md px-3 py-2 text-sm text-white hover:bg-[#B8FF00]/10 hover:text-[#B8FF00] transition-colors cursor-pointer", children: [
                      /* @__PURE__ */ jsx("span", { children: mainCat.title }),
                      /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 -rotate-90" })
                    ] })
                  },
                  mainCat.value
                )),
                /* @__PURE__ */ jsx("div", { className: "border-t border-white/10 my-1" }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/products",
                    className: "block rounded-md px-3 py-2 text-sm text-white hover:bg-[#B8FF00]/10 hover:text-[#B8FF00] font-semibold transition-colors",
                    children: t("viewAllProducts")
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-80 h-96 p-3 bg-white/5", children: expandedDesktopCategory && groupedCategories[expandedDesktopCategory]?.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 uppercase tracking-wider mb-2 px-2", children: mainCategories.find((cat) => cat.value === expandedDesktopCategory)?.title }),
                groupedCategories[expandedDesktopCategory].map((subCat) => /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: `/products?categories=${subCat.slug.current}`,
                    className: "block rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#B8FF00]/10 hover:text-[#B8FF00] transition-colors",
                    children: subCat.title
                  },
                  subCat.slug.current
                ))
              ] }) : /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-full text-sm text-gray-500", children: "Hover over a category" }) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
            /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-1 text-white hover:text-[#B8FF00] transition-colors py-4", children: [
              t("services.title"),
              /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-full hidden w-72 rounded-lg glass-strong border border-white/10 p-2 shadow-lg group-hover:block transition-all animate-in fade-in-0 slide-in-from-top-2 duration-300", children: servicesMenu.map((item) => /* @__PURE__ */ jsx(
              Link,
              {
                href: item.href,
                className: "block rounded-md px-3 py-2 text-sm text-white hover:bg-[#B8FF00]/10 hover:text-[#B8FF00] transition-colors",
                children: item.label
              },
              item.href
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
            /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-1 text-white hover:text-[#B8FF00] transition-colors py-4", children: [
              t("resources.title"),
              /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-full hidden w-56 rounded-lg glass-strong border border-white/10 p-2 shadow-lg group-hover:block transition-all animate-in fade-in-0 slide-in-from-top-2 duration-300", children: resourcesMenu.map((item) => /* @__PURE__ */ jsx(
              Link,
              {
                href: item.href,
                className: "block rounded-md px-3 py-2 text-sm text-white hover:bg-[#B8FF00]/10 hover:text-[#B8FF00] transition-colors",
                children: item.label
              },
              item.href
            )) })
          ] }),
          /* @__PURE__ */ jsx(Link, { href: "/about", className: "text-white hover:text-[#B8FF00] transition-colors", children: t("about") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Search products...",
                className: "w-64 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B8FF00] focus:border-transparent transition-all",
                onKeyDown: (e) => {
                  if (e.key === "Enter") {
                    const query = e.currentTarget.value.trim();
                    if (query) {
                      router.push(`/search?q=${encodeURIComponent(query)}`);
                    }
                  }
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              className: "bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold",
              asChild: true,
              children: /* @__PURE__ */ jsx(Link, { href: "/contact", children: "Contact" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setIsLangDropdownOpen(!isLangDropdownOpen),
                onBlur: (e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setTimeout(() => setIsLangDropdownOpen(false), 200);
                  }
                },
                className: "flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all",
                children: [
                  /* @__PURE__ */ jsx(Globe, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium uppercase", children: currentLocale }),
                  /* @__PURE__ */ jsx(ChevronDown, { className: `w-4 h-4 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}` })
                ]
              }
            ),
            isLangDropdownOpen && /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-full mt-2 w-48 rounded-lg glass-strong border border-white/10 p-2 shadow-lg animate-in fade-in-0 slide-in-from-top-2 duration-300 z-50", children: languages.map((lang) => /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleLanguageChange(lang.code),
                className: `w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${currentLocale === lang.code ? "bg-[#B8FF00]/20 text-[#B8FF00]" : "text-white hover:bg-[#B8FF00]/10 hover:text-[#B8FF00]"}`,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-lg", children: lang.flag }),
                  /* @__PURE__ */ jsx("span", { children: lang.name })
                ]
              },
              lang.code
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsxs(Sheet, { children: [
          /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", "aria-label": "Open Menu", children: /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6 text-white" }) }) }),
          /* @__PURE__ */ jsx(SheetContent, { side: "right", className: "glass-strong border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(
                Image,
                {
                  src: "/logo.webp",
                  alt: "COSPEP Logo",
                  width: 32,
                  height: 32,
                  className: "object-contain"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-white", children: "COSPEP" })
            ] }) }),
            /* @__PURE__ */ jsxs("nav", { className: "flex flex-col gap-4 mt-6 flex-1 min-h-0 overflow-y-auto overscroll-contain pb-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Link, { href: "/products", className: "text-lg font-medium text-white hover:text-[#B8FF00] mb-2 block", children: "Products" }),
                /* @__PURE__ */ jsx("div", { className: "pl-4 flex flex-col gap-3 border-l-2 border-white/20 ml-1", children: mainCategories.map((mainCat) => /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => setExpandedMobileCategory(
                        expandedMobileCategory === mainCat.value ? null : mainCat.value
                      ),
                      className: "flex items-center justify-between w-full text-base text-gray-300 hover:text-[#B8FF00] transition-colors",
                      children: [
                        /* @__PURE__ */ jsx("span", { children: mainCat.title }),
                        /* @__PURE__ */ jsx(ChevronDown, { className: `w-4 h-4 transition-transform ${expandedMobileCategory === mainCat.value ? "rotate-180" : ""}` })
                      ]
                    }
                  ),
                  expandedMobileCategory === mainCat.value && groupedCategories[mainCat.value]?.length > 0 && /* @__PURE__ */ jsx("div", { className: "pl-3 mt-2 flex flex-col gap-2 border-l border-white/10", children: groupedCategories[mainCat.value].map((subCat) => /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      href: `/products?categories=${subCat.slug.current}`,
                      className: "text-sm text-gray-400 hover:text-[#B8FF00]",
                      children: subCat.title
                    }
                  ) }, subCat.slug.current)) })
                ] }, mainCat.value)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-lg font-medium text-white mb-2", children: t("services.title") }),
                /* @__PURE__ */ jsx("div", { className: "pl-4 flex flex-col gap-2 border-l-2 border-white/20 ml-1", children: servicesMenu.map((item) => /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: item.href,
                    className: "text-base text-gray-400 hover:text-[#B8FF00]",
                    children: item.label
                  }
                ) }, item.href)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-lg font-medium text-white mb-2", children: "Resources" }),
                /* @__PURE__ */ jsx("div", { className: "pl-4 flex flex-col gap-2 border-l-2 border-white/20 ml-1", children: resourcesMenu.map((item) => /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: item.href,
                    className: "text-base text-gray-400 hover:text-[#B8FF00]",
                    children: item.label
                  }
                ) }, item.href)) })
              ] }),
              /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/about", className: "text-lg font-medium text-white hover:text-[#B8FF00]", children: "About Us" }) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t border-white/20", children: [
                /* @__PURE__ */ jsx("div", { className: "text-lg font-medium text-white mb-3", children: "Language" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: languages.map((lang) => /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => handleLanguageChange(lang.code),
                    className: `flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${currentLocale === lang.code ? "bg-[#B8FF00]/20 text-[#B8FF00]" : "text-gray-400 hover:bg-[#B8FF00]/10 hover:text-[#B8FF00]"}`,
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-lg", children: lang.flag }),
                      /* @__PURE__ */ jsx("span", { children: lang.name })
                    ]
                  },
                  lang.code
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "pt-4 border-t border-white/20 shrink-0", children: /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(
              Button,
              {
                size: "lg",
                className: "bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold w-full",
                asChild: true,
                children: /* @__PURE__ */ jsx(Link, { href: "/contact", children: "Contact" })
              }
            ) }) })
          ] }) })
        ] }) })
      ] })
    }
  );
}

const groq = (strings, ...values) => {
  return strings.reduce((acc, str, i) => acc + str + (values[i] || ""), "");
};
async function getProducts(search, categorySlug, stockStatus, parentCategory) {
  if (parentCategory && !categorySlug) {
    const subcategories = await client.fetch(
      groq`*[_type == "category" && parentCategory == $parentCategory]{slug}`,
      { parentCategory }
    );
    const subcategorySlugs = subcategories.map((c) => c.slug.current);
    if (subcategorySlugs.length > 0) {
      const query2 = groq`*[_type == "product" && (
        !defined($search) || name match $search + "*" || casNumber match $search + "*" || synonyms match $search + "*" || latinName match $search + "*"
      ) && (isVisible == true || !defined(isVisible)) && (
        count((categories[]->slug.current)[@ in $subcategorySlugs]) > 0
      ) && (
        !defined($stockStatus) || stockStatus == $stockStatus
      )] {
        _id,
        name,
        slug,
        casNumber,
        latinName,
        synonyms,
        stockStatus,
        "categories": categories[]->{title, slug},
        "imageUrl": image.asset->url,
        description
      }`;
      return client.fetch(query2, {
        search: search || null,
        subcategorySlugs,
        stockStatus: stockStatus || null
      });
    }
  }
  const query = groq`*[_type == "product" && (
        !defined($search) || name match $search + "*" || casNumber match $search + "*" || synonyms match $search + "*" || latinName match $search + "*"
      ) && (isVisible == true || !defined(isVisible)) && (
        !defined($categorySlug) || $categorySlug in categories[]->slug.current
      ) && (
        !defined($stockStatus) || stockStatus == $stockStatus
      )] {
        _id,
        name,
        slug,
        casNumber,
        latinName,
        synonyms,
        stockStatus,
        "categories": categories[]->{title, slug},
        "imageUrl": image.asset->url,
        description
      }`;
  return client.fetch(query, { search: search || null, categorySlug: categorySlug || null, stockStatus: stockStatus || null });
}
async function getCategories() {
  const query = groq`*[_type == "category"] | order(parentCategory asc, order asc) {
        title,
        slug,
        parentCategory,
        order
    }`;
  return client.fetch(query);
}
async function getProductBySlug(slug) {
  const query = groq`*[_type == "product" && slug.current == $slug && (isVisible == true || !defined(isVisible))][0] {
        _id,
        name,
        slug,
        casNumber,
        latinName,
        stockStatus,
        "categories": categories[]->{title, slug},
        "imageUrl": image.asset->url,
        specs,
        inciName,
        purity,
        usageRate,
        patentNo,
        functions,
        grade,
        moq,
        leadTime,
        packaging,
        storage,
        recommendedProducts[]->{  
          _id,
          name,
          slug,
          casNumber,
          latinName,
          stockStatus,
          "categories": categories[]->{title, slug},
          "imageUrl": image.asset->url
        },
        seoTitle,
        seoDesc,
        description,
        documents[] {
          title,
          "file": {
            "asset": {
              "url": file.asset->url,
              "originalFilename": file.asset->originalFilename
            }
          }
        }
    }`;
  return client.fetch(query, { slug });
}
async function getSettings() {
  return client.fetch(groq`*[_id == "settings"][0]{
    heroText,
    "heroImageUrl": heroImage.asset->url,
    contactEmail,
    whatsapp,
    address
  }`);
}
const getSiteSettings = groq`*[_id == "settings"][0]{
  heroTitle,
  heroText, // Legacy fallback
  heroSubtitle,
  "heroImageUrl": heroImage.asset->url,
  contactEmail,
  whatsapp,
  address
}`;
async function getPosts() {
  const query = groq`*[_type == "post" && (isVisible == true || !defined(isVisible))] | order(publishedAt desc) {
        _id,
        title,
        slug,
        "mainImage": mainImage.asset->url,
        publishedAt,
        excerpt
    }`;
  return client.fetch(query);
}
async function getBlogPostBySlug(slug) {
  const query = groq`*[_type == "post" && slug.current == $slug && (isVisible == true || !defined(isVisible))][0] {
        _id,
        title,
        slug,
        "mainImage": mainImage.asset->url,
        publishedAt,
        _updatedAt,
        excerpt,
        seoDescription,
        body,
        faqs[] {
            question,
            answer
        }
    }`;
  return client.fetch(query, { slug });
}

const LinkedinIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
  /* @__PURE__ */ jsx("rect", { width: "4", height: "12", x: "2", y: "9" }),
  /* @__PURE__ */ jsx("circle", { cx: "4", cy: "4", r: "2" })
] });
const FacebookIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: /* @__PURE__ */ jsx("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }) });
const TwitterIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: /* @__PURE__ */ jsx("path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" }) });
function Footer() {
  const [settings, setSettings] = React__default.useState(null);
  const t = useTranslations("footer");
  React__default.useEffect(() => {
    const fetchSettings = async () => {
      const data = await client.fetch(getSiteSettings);
      setSettings(data);
    };
    fetchSettings();
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "w-full h-[450px] bg-muted", children: /* @__PURE__ */ jsx("footer", { className: "bg-muted text-muted-foreground border-t h-full", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6 py-12 lg:py-16 h-full flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-2 md:col-span-1 space-y-4", children: [
        /* @__PURE__ */ jsxs(Link, { href: "/", className: "flex items-center gap-3 group", children: [
          /* @__PURE__ */ jsx(
            Image,
            {
              src: "/logo.webp",
              alt: "COSPEP Logo",
              width: 32,
              height: 32,
              className: "object-contain group-hover:scale-110 transition-transform"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-primary", children: "COSPEP" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed max-w-xs", children: settings?.heroSubtitle || "Your premier sourcing partner for high-quality botanical ingredients. Bridging the gap between certified standards and global demand." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-foreground font-semibold", children: t("quickLinks.title") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", className: "hover:text-primary", children: t("quickLinks.home") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/about", className: "hover:text-primary", children: t("quickLinks.about") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/services/packaging-logistics", className: "hover:text-primary", children: t("quickLinks.service") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/contact", className: "hover:text-primary", children: t("quickLinks.contact") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-foreground font-semibold", children: t("products.title") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/products", className: "hover:text-primary", children: t("products.allIngredients") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/products?status=Ready%20to%20Ship", className: "hover:text-primary", children: t("products.readyStock") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/products?category=Food", className: "hover:text-primary", children: t("products.foodAdditives") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/products?category=Cosmetics", className: "hover:text-primary", children: t("products.cosmeticRaw") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-foreground font-semibold", children: t("contact.title") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: settings?.address || "Xi'an, Shaanxi, China" }),
          settings?.contactEmail && /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `mailto:${settings.contactEmail}`, className: "hover:text-primary", children: settings.contactEmail }) }),
          settings?.whatsapp && /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, "")}`, target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary", children: settings.whatsapp }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 pt-2", children: [
          /* @__PURE__ */ jsx(Link, { href: "#", className: "hover:text-primary", children: /* @__PURE__ */ jsx(LinkedinIcon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx(Link, { href: "#", className: "hover:text-primary", children: /* @__PURE__ */ jsx(FacebookIcon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx(Link, { href: "#", className: "hover:text-primary", children: /* @__PURE__ */ jsx(TwitterIcon, { className: "h-5 w-5" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs mt-auto", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        settings?.heroText || "Prius Group / COSPEP",
        ". All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-4 md:mt-0", children: [
        /* @__PURE__ */ jsx(Link, { href: "/privacy", className: "hover:text-foreground", children: t("privacyPolicy") }),
        /* @__PURE__ */ jsx(Link, { href: "/terms", className: "hover:text-foreground", children: t("termsOfService") })
      ] })
    ] })
  ] }) }) });
}

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "COSPEP - Pure, Potent & Naturally Derived" } = Astro2.props;
  const { lang = "en" } = Astro2.params;
  const dir = lang === "ar" ? "rtl" : "ltr";
  return renderTemplate`<html${addAttribute(lang, "lang")}${addAttribute(dir, "dir")} class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/webp" href="/favicon.webp"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(new URL(Astro2.url.pathname, Astro2.site), "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL("/og-image.webp", Astro2.site), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL("/og-image.webp", Astro2.site), "content")}>${renderHead()}</head> <body class="min-h-screen bg-[#0A0E0D] font-sans antialiased text-white flex flex-col"> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/layout/navbar", "client:component-export": "Navbar" })} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/layout/footer", "client:component-export": "Footer" })}</body></html>`;
}, "E:/03-Web_code/COSPEP_V2/COSPEP_V2_Astro/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, Button as B, Image as I, Link as L, useLocale as a, useSearchParams as b, cn as c, getPosts as d, getProductBySlug as e, useParams as f, getBlogPostBySlug as g, useRouter as h, getProducts as i, getCategories as j, getSettings as k, usePathname as l, useTranslations as m, getSiteSettings as n, useTranslations$1 as u };
