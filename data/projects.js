export const projects = [
  {
    slug: "mediscan",
    number: "01",
    title: "MediScan",
    category: "Multi-role Medical Platform",
    shortCategory: "Healthcare Platform",
    year: "2026",
    role: "Product design & full-stack development",
    description:
      "A multi-interface healthcare platform connecting patients, doctors and administrators in one calm, operational system.",
    overview:
      "MediScan turns a fragmented healthcare workflow into a focused digital experience. Each role gets the right information at the right moment, from patient onboarding to doctor scheduling and administration.",
    problem:
      "Healthcare products often make every user navigate the same complexity. The challenge was to give three distinct audiences clear, role-specific paths without creating three disconnected products.",
    solution:
      "A shared system language, composable interface primitives and a permission-aware information architecture keep the platform consistent while allowing every workspace to feel purpose-built.",
    features: ["Role-based workspaces", "Appointment orchestration", "Patient records", "Operational dashboards"],
    technologies: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    image: "/projects/mediscan.svg",
    liveUrl: "",
    githubUrl: ""
  },
  {
    slug: "pet-care",
    number: "02",
    title: "Pet Care",
    category: "Community Platform",
    shortCategory: "Community Platform",
    year: "2026",
    role: "Interface engineering & API integration",
    description:
      "A warm community platform helping pet owners find useful guidance, trusted services and one another.",
    overview:
      "Pet Care is a community-first product concept designed around useful exchange rather than endless feeds. It brings local discovery, care records and expert content into one approachable place.",
    problem:
      "Pet owners tend to stitch together advice, reminders and local services across disconnected tools. The product needed to make that information feel dependable and easy to act on.",
    solution:
      "A modular feed, clear service discovery and small moments of reassurance create a product that feels friendly without sacrificing structure.",
    features: ["Community posts", "Care reminders", "Service discovery", "Pet profiles"],
    technologies: ["Next.js", "Laravel", "PostgreSQL", "Prisma"],
    image: "/projects/pet-care.svg",
    liveUrl: "",
    githubUrl: ""
  },
  {
    slug: "workforce",
    number: "03",
    title: "Workforce",
    category: "HR Management System",
    shortCategory: "People Operations",
    year: "2025",
    role: "Front-end development & systems thinking",
    description:
      "A focused people-operations workspace for teams that need clarity across time, performance and everyday work.",
    overview:
      "Workforce brings the quiet, repetitive work of HR into a single reliable workspace. The interface is designed to help teams scan, understand and act on people data quickly.",
    problem:
      "Operational tools can become dense archives of tables and forms. The product needed to surface decisions, not just data.",
    solution:
      "A dashboard-led architecture pairs concise summaries with deeper drill-downs, giving managers a clear starting point and teams a dependable source of truth.",
    features: ["Team directory", "Leave management", "Performance cycles", "Reports"],
    technologies: ["React.js", "ASP.NET Core", "SQL Server"],
    image: "/projects/workforce.svg",
    liveUrl: "",
    githubUrl: ""
  },
  {
    slug: "eb-store",
    number: "04",
    title: "EB Store",
    category: "Electronics E-Commerce",
    shortCategory: "Commerce Interface",
    year: "2025",
    role: "UI development & responsive systems",
    description:
      "A product-led electronics storefront built to make comparison, confidence and checkout feel effortless.",
    overview:
      "EB Store is an e-commerce experience that puts product understanding before promotion. It balances a rich catalogue with a focused path to purchase.",
    problem:
      "Electronics shoppers often need to compare small technical details before committing. The experience had to support considered decisions without overwhelming the page.",
    solution:
      "Structured product information, sharp filtering and responsive comparison patterns make the catalogue feel fast and legible on any screen.",
    features: ["Product filtering", "Comparison view", "Cart flow", "Responsive catalogue"],
    technologies: ["React.js", "Bootstrap", "REST API"],
    image: "/projects/eb-store.svg",
    liveUrl: "",
    githubUrl: ""
  },
  {
    slug: "e-learning",
    number: "05",
    title: "E-Learning",
    category: "Educational Platform",
    shortCategory: "Learning Platform",
    year: "2025",
    role: "Front-end development & interaction design",
    description:
      "A practical learning platform that gives students a clean route from first lesson to finished course.",
    overview:
      "E-Learning explores how a course platform can feel motivating without becoming noisy. Progress, content and next steps remain visible throughout the experience.",
    problem:
      "Learning interfaces frequently hide the path through a course behind menus and dashboards. Students needed context and momentum at every step.",
    solution:
      "A clear curriculum structure, focused lesson views and visible progress make the product feel like a helpful guide rather than a content warehouse.",
    features: ["Course pathways", "Progress tracking", "Lesson library", "Student dashboard"],
    technologies: ["JavaScript", "Bootstrap", "Fetch API"],
    image: "/projects/e-learning.svg",
    liveUrl: "",
    githubUrl: ""
  },
  {
    slug: "sillage",
    number: "06",
    title: "Sillage",
    category: "Full-Stack Commerce",
    shortCategory: "Full-Stack Commerce",
    year: "2024",
    role: "Full-stack development",
    description:
      "A considered commerce experiment with a simple catalogue, a direct purchase path and a memorable visual voice.",
    overview:
      "Sillage is a compact full-stack commerce project focused on turning a small product catalogue into an intentional, editorial shopping experience.",
    problem:
      "Small commerce brands often inherit large-store patterns that make their experience feel generic. This concept needed a stronger point of view.",
    solution:
      "A restrained visual system, direct content hierarchy and a lightweight PHP/MySQL foundation keep the experience expressive and maintainable.",
    features: ["Editorial catalogue", "Product details", "Session cart", "Admin-ready data model"],
    technologies: ["PHP", "MySQL", "Bootstrap"],
    image: "/projects/sillage.svg",
    liveUrl: "",
    githubUrl: ""
  }
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
