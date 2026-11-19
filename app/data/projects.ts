// Texte et médias des études de cas : modifier ce fichier pour ajuster le contenu.
// Les images sont servies depuis /public/projects/{slug}/.

export interface ProjectSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  tone?: "neutral" | "soft";
}

export interface PortfolioProject {
  slug: string;
  number: string;
  name: string;
  category: string;
  headline: string;
  headlineAccent: string;
  introduction: string;
  cover: string;
  coverAlt: string;
  context: { label: string; value: string }[];
  tags: string[];
  sections: ProjectSection[];
  technology: string[];
  role: string[];
  externalUrl: string;
  externalLabel: string;
  relatedOffer: { label: string; title: string; text: string; to: string };
  nextSlug: string;
  theme: "sigma" | "vizcab";
}

export const projects: PortfolioProject[] = [
  {
    slug: "sigma-2000",
    number: "01",
    name: "Sigma.2000",
    category: "Portfolio artistique · Boutique e-commerce",
    headline: "Quand une pratique artistique devient",
    headlineAccent: "une expérience digitale.",
    introduction:
      "Sigma.2000 réunit mon univers d’artiste pluridisciplinaire, une galerie et une boutique en ligne dédiée aux œuvres originales et aux tirages d’art. J’ai conçu et développé cette plateforme sur mesure, des premières maquettes jusqu’à sa mise en ligne et ses évolutions.",
    cover: "/projects/sigma2000.png",
    coverAlt:
      "Composition présentant les interfaces mobiles de Sigma.2000 en modes clair et sombre",
    context: [
      { label: "Nature", value: "Projet artistique personnel" },
      { label: "Mon rôle", value: "Design, front-end, back-end, déploiement" },
      {
        label: "Périmètre",
        value: "Galerie, boutique, comptes et administration",
      },
    ],
    tags: ["Design & UX", "Vue.js", "Node.js", "MongoDB", "Stripe"],
    sections: [
      {
        id: "contexte",
        eyebrow: "01 / LE CONTEXTE",
        title: "Un espace numérique pour prolonger une démarche artistique.",
        paragraphs: [
          "À la croisée du graffiti, des pratiques plastiques et de l’art numérique, Sigma.2000 explore différents supports et modes d’expression.",
          "Le projet est né d’un besoin concret : présenter mes réalisations dans un espace personnel tout en permettant la vente d’œuvres originales et de prints. Initié dans le cadre d’une soutenance, il a ensuite évolué vers une plateforme en ligne que je continue d’améliorer.",
        ],
        image: "/projects/sigma2000-conception.png",
        imageAlt: "Maquettes et écrans de conception de la galerie Sigma.2000",
        imageCaption:
          "Conception des écrans et des parcours, avec une approche mobile first.",
      },
      {
        id: "experience",
        eyebrow: "02 / CONCEPTION & EXPÉRIENCE",
        title: "Laisser les œuvres occuper le premier plan.",
        paragraphs: [
          "J’ai imaginé une interface épurée : typographie discrète, séparations fines et navigation lisible. Le cadre graphique s’efface pour laisser les œuvres, souvent colorées et complexes, prendre toute leur place.",
          "Les maquettes ont été pensées d’abord pour les usages mobiles. Le site propose une navigation multilingue et une présentation claire ou sombre, avec une attention particulière portée à la cohérence du parcours d’un écran à l’autre.",
        ],
        image: "/projects/sigma2000-mobile.png",
        imageAlt: "Vue mobile de l’accueil de Sigma.2000",
        imageCaption: "Une expérience mobile pensée autour des œuvres.",
        tone: "soft",
      },
      {
        id: "boutique",
        eyebrow: "03 / GALERIE & E-COMMERCE",
        title: "De la découverte d’une œuvre à son acquisition.",
        paragraphs: [
          "Le site relie galerie artistique et boutique avec deux types de créations : œuvres originales et tirages d’art. Chaque produit dispose d’une présentation détaillée et d’un parcours d’achat adapté.",
          "J’ai développé la gestion du panier, des comptes clients, des commandes et l’intégration du paiement Stripe. Un espace administrateur permet de gérer les produits et de suivre les commandes, tandis que des emails personnalisés accompagnent le parcours client.",
        ],
        image: "/projects/sigma2000-boutique.png",
        imageAlt: "Maquettes mobiles des interfaces de la boutique Sigma.2000",
        imageCaption:
          "Parcours boutique : catalogue, fiches produits et administration.",
      },
      {
        id: "technique",
        eyebrow: "04 / DÉVELOPPEMENT & ÉVOLUTION",
        title: "Une application complète, de l’interface à la base de données.",
        paragraphs: [
          "J’ai développé le front-end en Vue.js, le back-end en Node.js et la base de données avec MongoDB. Cela couvre aussi bien les interfaces publiques que les fonctionnalités métier nécessaires à la boutique.",
          "J’ai assuré le déploiement, puis la maintenance et les améliorations continues du site. Sigma.2000 reste un projet vivant, à la fois artistique et technique.",
        ],
      },
    ],
    technology: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    role: [
      "Direction visuelle et maquettage",
      "UX/UI et développement front-end",
      "Back-end et base de données",
      "Paiement, comptes et administration",
      "Déploiement, maintenance et évolutions",
    ],
    externalUrl: "https://sigma2000.com/",
    externalLabel: "Visiter Sigma.2000",
    relatedOffer: {
      label: "UN PROJET E-COMMERCE ?",
      title: "Une boutique à l’image de votre univers.",
      text: "Concevoir une boutique, c’est penser ensemble l’identité, l’expérience d’achat et les outils de gestion.",
      to: "/offres/boutiques-e-commerce",
    },
    nextSlug: "vizcab",
    theme: "sigma",
  },
  {
    slug: "vizcab",
    number: "02",
    name: "Vizcab",
    category: "Extension Excel · Application métier",
    headline: "Rendre les données carbone plus accessibles,",
    headlineAccent: "directement dans Excel.",
    introduction:
      "L’extension Excel Vizcab aide les professionnels de la construction à exploiter des données environnementales et à évaluer l’impact carbone de leurs matériaux. J’ai assuré en autonomie son développement front-end, en collaboration avec les équipes back-end, design, métier et DevOps.",
    cover: "/projects/vizcab.png",
    coverAlt: "Composition des interfaces de l’extension Excel Vizcab",
    context: [
      {
        label: "Cadre",
        value: "Alternance, puis poste de développeuse front-end",
      },
      {
        label: "Mon rôle",
        value: "Développement front-end en autonomie, participation UX/UI",
      },
      { label: "Collaboration", value: "Back-end, design, métier et DevOps" },
    ],
    tags: ["Vue.js", "Excel Add-in", "API", "Stripe", "Multilingue"],
    sections: [
      {
        id: "contexte",
        eyebrow: "01 / LE CONTEXTE",
        title: "Faire entrer l’analyse carbone dans les outils du quotidien.",
        paragraphs: [
          "Dans le bâtiment, l’évaluation de l’impact environnemental mobilise de nombreuses données techniques. Excel est déjà un outil courant pour organiser les quantitatifs et suivre les projets.",
          "L’extension Vizcab permet d’accéder à des données environnementales depuis ce contexte familier, sans imposer un changement complet des habitudes de travail. J’ai participé au développement du produit pendant mon alternance, puis en tant que développeuse front-end.",
        ],
        image: "/projects/vizcab.png",
        imageAlt:
          "Interface de l’extension Vizcab intégrée à l’environnement Excel",
        imageCaption:
          "Des données environnementales accessibles depuis l’environnement Excel.",
      },
      {
        id: "experience",
        eyebrow: "02 / CONCEPTION & UX",
        title: "Concevoir une interface claire dans un espace contraint.",
        paragraphs: [
          "Le panneau latéral Excel impose des contraintes fortes : recherche, filtres, paramètres, sélection de fiches et résultats doivent rester compréhensibles dans une surface réduite.",
          "J’ai participé aux maquettes et aux choix UI/UX avec le designer et l’équipe métier. Nous avons travaillé sur la hiérarchie de l’information, les états de l’interface et la fluidité des interactions.",
        ],
        image: "/projects/vizcab/recherche.webp",
        imageAlt:
          "Captures des fonctions de recherche de données et d’analyse dans Vizcab",
        imageCaption: "Recherche, sélection et restitution de données métier.",
        tone: "soft",
      },
      {
        id: "developpement",
        eyebrow: "03 / FRONT-END & INTÉGRATIONS",
        title: "Une application Vue.js connectée à Excel et aux API.",
        paragraphs: [
          "J’ai pris en charge le développement front-end de l’extension en Vue.js : écrans de recherche, formulaires, paramètres, navigation et gestion des états de chargement ou d’erreur. L’application prend aussi en charge plusieurs langues.",
          "En lien avec l’ingénieur back-end, j’ai intégré les API pour transmettre les données nécessaires aux traitements et afficher les résultats renvoyés par le serveur. J’ai également travaillé sur les échanges de données avec Excel, dont les parcours d’import et d’export.",
        ],
      },
      {
        id: "produit",
        eyebrow: "04 / FONCTIONNALITÉS & COLLABORATION",
        title: "Des parcours métier au sein d’un produit en production.",
        paragraphs: [
          "J’ai contribué à l’intégration front-end des parcours d’authentification, de gestion des accès et d’abonnement payant via Stripe. Ces parcours nécessitent de gérer les différents états utilisateurs et les retours des services back-end.",
          "Autonome sur le front-end, j’ai collaboré avec les équipes design, métier, back-end et DevOps, notamment pour la validation des fonctionnalités, les évolutions du produit et les étapes de déploiement.",
        ],
      },
    ],
    technology: [
      "Vue.js",
      "Microsoft Excel",
      "API",
      "Stripe",
      "Internationalisation",
    ],
    role: [
      "Développement front-end de l’extension",
      "Participation au maquettage et aux choix UX/UI",
      "Intégration des API et échanges avec Excel",
      "Parcours d’authentification et d’abonnement côté front-end",
      "Collaboration avec les équipes et participation au déploiement",
    ],
    externalUrl: "https://vizcab.io/excelextensionvizcab/",
    externalLabel: "Découvrir l’extension Vizcab",
    relatedOffer: {
      label: "DES BESOINS MÉTIER SPÉCIFIQUES ?",
      title: "Des interfaces adaptées à vos usages.",
      text: "Intégrations d’API, données, fonctionnalités spécifiques : construisons une expérience adaptée à votre activité.",
      to: "/offres/accompagnement-evolutions",
    },
    nextSlug: "sigma-2000",
    theme: "vizcab",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
