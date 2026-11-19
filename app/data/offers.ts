export interface OfferDetail {
  id: string;
  title: string;
  eyebrow: string;
  hook: string;
  paragraphs: string[];
  benefits: string[];
  note?: string;
}

export interface OfferFamily {
  slug: string;
  number: string;
  category: string;
  name: string;
  accent: string;
  introduction: string;
  description: string;
  offers: OfferDetail[];
  relatedProject?: { label: string; title: string; text: string; to: string };
}

export const offerFamilies: OfferFamily[] = [
  {
    slug: "strategie",
    number: "01",
    category: "STRATÉGIE & ACCOMPAGNEMENT",
    name: "Clarifier &",
    accent: "améliorer.",
    introduction:
      "Des conseils pour prendre les bonnes décisions et faire évoluer votre site dans la durée.",
    description:
      "De l'audit initial à la refonte, en passant par la maintenance et les améliorations continues, je vous accompagne pour construire sur l'existant, résoudre les points de friction et adapter votre présence en ligne à l'évolution de votre activité.",
    offers: [
      {
        id: "audit-conseil",
        eyebrow: "01 / ANALYSER",
        title: "Audit & conseil",
        hook: "Avant de développer, définissons ce dont votre projet a réellement besoin.",
        paragraphs: [
          "Nous échangeons autour de votre activité, de vos objectifs, de vos utilisateurs et de vos contraintes pour identifier les solutions pertinentes.",
          "Si vous disposez déjà d'un site, l'analyse peut porter sur sa structure, son expérience utilisateur, son design, ses performances, son référencement et ses fonctionnalités.",
        ],
        benefits: [
          "Clarification des besoins",
          "Identification des priorités",
          "Pistes d'amélioration concrètes",
        ],
        note: "Objectif : disposer d'une vision claire avant d'investir dans la création ou l'évolution de votre site.",
      },
      {
        id: "refonte-ameliorations",
        eyebrow: "02 / FAIRE ÉVOLUER",
        title: "Refonte & améliorations",
        hook: "Conserver ce qui fonctionne, améliorer ce qui freine votre activité.",
        paragraphs: [
          "Un site peut perdre en efficacité lorsque son image, sa structure ou ses fonctionnalités ne correspondent plus à vos usages.",
          "Je peux intervenir sur le design, l'UX, le mobile, la performance, le SEO, les contenus ou les fonctionnalités existantes : optimisation ciblée ou refonte plus complète selon les besoins.",
        ],
        benefits: [
          "Modernisation visuelle",
          "Amélioration UX et responsive",
          "SEO et performances",
          "Évolutions fonctionnelles",
        ],
      },
      {
        id: "maintenance-evolution",
        eyebrow: "03 / DANS LA DURÉE",
        title: "Maintenance & évolution",
        hook: "Un site ne s'arrête pas le jour de sa mise en ligne.",
        paragraphs: [
          "Après la mise en ligne, je reste disponible pour assurer les corrections nécessaires, améliorer l'existant et accompagner les évolutions de votre site au rythme de votre activité.",
          "Contenus, nouvelles pages, optimisations ou fonctionnalités supplémentaires : votre site peut évoluer avec votre activité sans devoir repartir de zéro.",
        ],
        benefits: [
          "Suivi et corrections",
          "Ajout de contenu",
          "Nouvelles pages",
          "Optimisations",
          "Évolutions fonctionnelles",
        ],
      },
    ],
  },
  {
    slug: "sites-web",
    number: "02",
    category: "SITES WEB",
    name: "Créer une présence",
    accent: "singulière.",
    introduction:
      "Des sites qui présentent clairement votre activité et reflètent votre identité.",
    description:
      "Du site vitrine essentiel à une expérience plus complète, chaque projet est pensé pour être lisible, agréable à utiliser et adapté à vos objectifs.",
    offers: [
      {
        id: "site-essentiel",
        eyebrow: "01 / L'ESSENTIEL",
        title: "Site Essentiel",
        hook: "Un site vitrine ne doit pas seulement présenter votre activité. Il doit donner envie de vous choisir.",
        paragraphs: [
          "Je conçois un site personnalisé pour valoriser votre savoir-faire et vos services, avec une navigation claire et une expérience adaptée aux mobiles et tablettes.",
          "Une base technique soignée vous permet de disposer d'un site professionnel, fiable et capable d'évoluer avec votre activité.",
        ],
        benefits: [
          "3 à 4 pages",
          "Design personnalisé",
          "Responsive",
          "SEO de base et performances",
          "Formulaire de contact",
          "Mise en ligne",
        ],
        note: "1 à 2 options simples à définir ensemble : galerie, témoignages, FAQ, carte, réservation externe, blog, animations légères, newsletter ou réseaux sociaux.",
      },
      {
        id: "site-signature",
        eyebrow: "02 / ALLER PLUS LOIN",
        title: "Site Signature",
        hook: "Une expérience plus complète, construite autour de vos besoins réels.",
        paragraphs: [
          "Cette formule s'adresse aux sites qui nécessitent davantage d'interactions, d'intégrations ou de personnalisation.",
          "Réservation, espace utilisateur, recherche avancée, carte, formulaires spécifiques, visualisation de données ou connexion à des services externes : nous choisissons les fonctionnalités utiles à votre activité.",
          "Des animations avancées et des expériences 3D peuvent aussi enrichir le projet lorsque cela a du sens.",
        ],
        benefits: [
          "4 à 5 pages ou plus",
          "Responsive et SEO",
          "Fonctionnalités avancées",
          "Intégrations spécifiques",
          "Interactions sur mesure",
          "3D en option",
        ],
        note: "Le document d'offre prévoit 3 à 4 fonctionnalités avancées, définies sur devis selon leur complexité et le périmètre du projet.",
      },
    ],
  },
  {
    slug: "boutiques-e-commerce",
    number: "03",
    category: "E-COMMERCE",
    name: "Vendre",
    accent: "en ligne.",
    introduction:
      "Une boutique qui met vos produits en valeur et simplifie l'achat.",
    description:
      "Une expérience d'achat claire côté client, et des outils adaptés à votre organisation pour gérer votre activité au quotidien.",
    offers: [
      {
        id: "shopify",
        eyebrow: "01 / BOUTIQUE SHOPIFY",
        title: "E-commerce Shopify",
        hook: "Vendre en ligne avec une boutique personnalisée et facile à administrer.",
        paragraphs: [
          "Je conçois des boutiques Shopify qui mettent en avant vos produits et offrent un parcours d'achat fluide sur ordinateur comme sur mobile.",
          "L'objectif est aussi de vous rendre autonome dans la gestion des produits, commandes, promotions et contenus après la mise en ligne.",
        ],
        benefits: [
          "Shopify",
          "Design personnalisé",
          "Responsive",
          "Paiement sécurisé",
          "Administration",
          "Prise en main et accompagnement",
        ],
        note: "Selon le projet : multilingue, intégrations externes, réservation, visualisation 3D ou expériences interactives.",
      },
      {
        id: "e-commerce-sur-mesure",
        eyebrow: "02 / LIBERTÉ DE CONCEPTION",
        title: "E-commerce sur mesure",
        hook: "Quand un fonctionnement standard ne suffit pas à votre manière de vendre.",
        paragraphs: [
          "Je conçois et développe une boutique autour de vos usages : catalogue spécifique, parcours d'achat personnalisé, paiement Stripe, comptes clients, administration ou gestion particulière des produits.",
          "Cette approche permet d'intégrer des fonctionnalités adaptées à votre activité sans se limiter aux parcours imposés par une solution standard.",
        ],
        benefits: [
          "Design et développement sur mesure",
          "Stripe",
          "Espace d'administration",
          "Comptes utilisateurs",
          "Emails transactionnels",
          "Intégrations et fonctionnalités avancées",
        ],
        note: "Le périmètre technique, la sécurité, l'hébergement et les fonctionnalités sont définis ensemble selon les besoins.",
      },
    ],
    relatedProject: {
      label: "PROJET ASSOCIÉ",
      title: "Sigma.2000",
      text: "Une galerie et une boutique e-commerce développées sur mesure, de l'interface à l'administration.",
      to: "/projets/sigma-2000",
    },
  },
  {
    slug: "evolutions",
    number: "04",
    category: "ÉVOLUTIONS & EXPÉRIMENTATION",
    name: "Explorer d'autres",
    accent: "possibles.",
    introduction:
      "Des fonctionnalités spécifiques aux expériences interactives, au-delà du site classique.",
    description:
      "Interfaces métier, expériences 3D et accompagnement dans le temps : je développe des solutions adaptées à des besoins qui ne rentrent pas toujours dans un modèle prêt à l'emploi.",
    offers: [
      {
        id: "3d-photogrammetrie",
        eyebrow: "01 / EXPÉRIENCES INTERACTIVES",
        title: "3D, photogrammétrie & expériences immersives",
        hook: "Donner du volume aux objets, aux œuvres et aux histoires que vous souhaitez partager.",
        paragraphs: [
          "La 3D interactive peut permettre d'explorer un produit sous tous ses angles, de mettre en scène une œuvre ou de présenter une collection autrement.",
          "La photogrammétrie permet de numériser des objets et des espaces réels pour en proposer une représentation 3D sur le web : une piste intéressante pour les artistes, artisans, musées et acteurs du patrimoine.",
          "Animations au scroll, scènes manipulables et catalogues virtuels sont envisagés au service du contenu et des usages.",
        ],
        benefits: [
          "3D interactive et WebGL",
          "Photogrammétrie",
          "Visualisation produit",
          "Catalogue virtuel",
          "Animations au scroll",
          "Valorisation patrimoniale",
        ],
        note: "La faisabilité, les performances et les supports sont à étudier en fonction de chaque expérience.",
      },
      {
        id: "developpement-sur-mesure",
        eyebrow: "02 / DÉVELOPPEMENT",
        title: "Développement sur mesure",
        hook: "Votre activité a ses propres besoins. Votre site peut s'y adapter.",
        paragraphs: [
          "Je développe des fonctionnalités spécifiques : multilingue, réservation, comptes utilisateurs, administration, recherche et filtres, cartes interactives, formulaires personnalisés, accessibilité ou connexion à des API.",
          "Je peux également réaliser des interfaces métier et des outils de visualisation de données, de la réflexion jusqu'à la mise en production.",
        ],
        benefits: [
          "Fonctionnalités métier",
          "API et intégrations",
          "Comptes et administration",
          "Visualisation de données",
          "Accessibilité et responsive",
        ],
      },
    ],
    relatedProject: {
      label: "PROJET ASSOCIÉ",
      title: "Vizcab",
      text: "Une interface métier Vue intégrée à Excel, conçue pour faciliter l'analyse de données environnementales.",
      to: "/projets/vizcab",
    },
  },
];

// Compatibilité avec quelques anciens slugs éventuellement encore utilisés.
const slugAliases: Record<string, string> = {
  "sites-vitrines": "sites-web",
  "e-commerce": "boutiques-e-commerce",
  "refonte-optimisation": "strategie",
  "accompagnement-evolutions": "evolutions",
  experimentation: "evolutions",
};

export function getOfferFamily(slug: string): OfferFamily | undefined {
  const resolvedSlug = slugAliases[slug] ?? slug;
  return offerFamilies.find((family) => family.slug === resolvedSlug);
}
