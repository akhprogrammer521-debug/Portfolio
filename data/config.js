export const siteConfig = {
  activeLocale: "en",
  direction: "ltr",
  locales: {
    en: {
      name: "Ahmad Ibrahim",
      shortName: "AI",
      role: "Junior Front-End / Full-Stack Developer",
      label: "Front-end developer / builder",
      tagline:
        "I build modern digital experiences that combine clean interfaces, scalable architecture, and real-world functionality.",
      about:
        "Ahmad is a Junior Front-End / Full-Stack Developer focused on building responsive, scalable, and user-friendly web applications. His work spans React and Next.js interfaces, REST APIs, database-driven systems, role-based applications, and backend development across multiple technologies.",
      education: {
        degree: "Bachelor of Science in Computer Science",
        school: "Arab International University",
        location: "Daraa, Syria",
        period: "September 2021 — June 2026"
      },
      availability: "Availability status not set"
    },
    ar: {
      name: "أحمد إبراهيم",
      shortName: "أ إ",
      role: "مطور واجهات أمامية / فول ستاك مبتدئ",
      label: "مطور واجهات / صانع منتجات",
      tagline:
        "أبني تجارب رقمية حديثة تجمع بين الواجهات النظيفة والبنية القابلة للتوسع والوظائف العملية.",
      about:
        "أحمد مطور واجهات أمامية وفول ستاك مبتدئ يركز على بناء تطبيقات ويب متجاوبة وقابلة للتوسع وسهلة الاستخدام.",
      education: {
        degree: "بكالوريوس في علوم الحاسوب",
        school: "الجامعة العربية الدولية",
        location: "درعا، سوريا",
        period: "سبتمبر 2021 — يونيو 2026"
      },
      availability: "حالة التوفر غير محددة"
    }
  },
  email: "akhprogrammer521@gmail.com",
  github: "",
  linkedin: "",
  location: "Daraa, Syria",
  siteUrl: "https://ahmad-ibrahim.dev"
};

export const navLinks = [
  { number: "01", label: "About", href: "#about" },
  { number: "02", label: "Work", href: "#work" },
  { number: "03", label: "Stack", href: "#stack" },
  { number: "04", label: "Contact", href: "#contact" }
];

export const socialLinks = [
  { label: "Email", href: `mailto:${siteConfig.email}`, available: true },
  { label: "LinkedIn", href: siteConfig.linkedin, available: Boolean(siteConfig.linkedin) },
  { label: "GitHub", href: siteConfig.github, available: Boolean(siteConfig.github) }
];
