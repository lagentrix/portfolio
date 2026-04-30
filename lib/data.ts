export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  demo: string;
  accent: string;
  image: string;
  screenshots: string[];
  features: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    description:
      "Interface de visualisation de données temps réel avec filtres dynamiques, graphiques interactifs et export CSV.",
    longDescription:
      "Ce projet est un tableau de bord complet permettant de visualiser des données en temps réel. Il intègre des filtres dynamiques, plusieurs types de graphiques interactifs (courbes, barres, camemberts) et une fonctionnalité d'export CSV. L'interface est responsive et optimisée pour les performances.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind"],
    github: "https://github.com/lagentrix/dashboard",
    demo: "https://dashboard.vercel.app",
    accent: "#d6d3d1",
    image: "/projects/dashboard.png",
    screenshots: [
      "/projects/dashboard.png",
      "/projects/dashboard.png",
    ],
    features: [
      "Visualisation de données en temps réel",
      "Filtres dynamiques multi-critères",
      "Export CSV des données filtrées",
      "Graphiques interactifs (courbes, barres, camemberts)",
      "Interface responsive",
    ],
  },
  {
    id: 2,
    slug: "site-ecommerce",
    title: "Site E-commerce",
    description:
      "Boutique complète avec panier persistant, authentification JWT et intégration paiement. Score Lighthouse 98.",
    longDescription:
      "Une boutique en ligne complète développée avec Next.js. Elle inclut un système de panier persistant, une authentification sécurisée par JWT, et une intégration Stripe pour les paiements. Le site obtient un score Lighthouse de 98 grâce aux optimisations de performance Next.js.",
    tags: ["Next.js", "Tailwind", "Stripe", "Prisma"],
    github: "https://github.com/lagentrix/shop",
    demo: "https://shop.vercel.app",
    accent: "#e7e5e4",
    image: "/projects/ecommerce.png",
    screenshots: [
      "/projects/ecommerce.png",
      "/projects/ecommerce.png",
    ],
    features: [
      "Panier persistant (localStorage)",
      "Authentification JWT sécurisée",
      "Paiement en ligne via Stripe",
      "Gestion des commandes",
      "Score Lighthouse 98",
    ],
  },
  {
    id: 3,
    slug: "design-system",
    title: "Design System",
    description:
      "Bibliothèque de composants UI documentée avec Storybook, design tokens CSS et support thème sombre natif.",
    longDescription:
      "Un design system complet documenté avec Storybook. Il regroupe une bibliothèque de composants réutilisables, des design tokens CSS pour la cohérence visuelle, et un support natif du thème sombre. Chaque composant est documenté avec ses variantes et ses props.",
    tags: ["React", "Storybook", "CSS Modules", "Figma"],
    github: "https://github.com/lagentrix/design-system",
    demo: "https://storybook.vercel.app",
    accent: "#f5f5f4",
    image: "/projects/design-system.png",
    screenshots: [
      "/projects/design-system.png",
      "/projects/design-system.png",
    ],
    features: [
      "Composants UI réutilisables",
      "Documentation Storybook",
      "Design tokens CSS",
      "Support thème sombre natif",
      "Maquettes Figma incluses",
    ],
  },
];

export const experiences = [
  {
    period: "2024 — auj.",
    role: "Formation CDA",
    company: "Concepteur Développeur d'Applications",
    detail:
      "Titre RNCP niveau 6. React, Node.js, bases de données relationnelles, méthodes Agile.",
  },
  {
    period: "2022 — auj.",
    role: "Technicien Support IT",
    company: "Nantes",
    detail:
      "Support N1/N2, gestion de parc informatique, environnement ITIL, méthodologie Agile.",
  },
  {
    period: "2005 — 2022",
    role: "Designer & Chef de Projet",
    company: "18 ans d'expérience",
    detail:
      "Direction artistique, identité visuelle, coordination équipes pluridisciplinaires, relation client.",
  },
];

export const skills = {
  core: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  tools: ["HTML5", "CSS3", "JavaScript ES6+", "Git / GitHub", "Figma"],
  soft: ["Accessibilité WCAG", "UI Design", "Gestion de projet", "Agile"],
};
