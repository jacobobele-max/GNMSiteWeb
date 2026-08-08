import work1 from "@/assets/work-1.webp";
import work2 from "@/assets/work-2.webp";
import work3 from "@/assets/work-3.webp";
import work4 from "@/assets/work-4.webp";
import work5 from "@/assets/work-5.webp";
import work6 from "@/assets/work-6.webp";
import hero1 from "@/assets/hero-1.webp";

export type Article = {
  id: string;
  slug: string;
  cover: string;
  category: { fr: string; en: string };
  date: string;
  author: { fr: string; en: string };
  readTime: number;
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
  content: { fr: string[]; en: string[] };
  tags: string[];
};

export const articles: Article[] = [
  {
    id: "1",
    slug: "nettoyage-100-bio",
    cover: hero1,
    category: { fr: "Éco-responsable", en: "Eco-friendly" },
    date: "2026-05-22",
    author: { fr: "Équipe RSE", en: "CSR Team" },
    readTime: 5,
    title: {
      fr: "Vers un nettoyage 100% bio dans nos interventions",
      en: "Towards 100% bio cleaning across all our services",
    },
    excerpt: {
      fr: "Nous généralisons l'usage de produits certifiés biologiques sur l'ensemble de nos chantiers à Libreville.",
      en: "We are extending the use of certified bio products across all of our Libreville sites.",
    },
    content: {
      fr: [
        "Depuis sa création, Gabon Nettoyage & Multiservices place le respect de l'environnement au cœur de sa démarche. En 2026, nous franchissons une nouvelle étape en généralisant l'utilisation de produits 100% biologiques sur l'ensemble de nos interventions à Libreville et ses environs.",
        "Cette transition résulte d'un travail de fond mené avec nos fournisseurs partenaires, sélectionnés pour leur capacité à proposer des formulations performantes, sans tensioactifs pétrochimiques, sans phosphates et sans parfums de synthèse. Nos agents bénéficient également d'une formation dédiée aux nouveaux dosages et protocoles.",
        "Les premiers retours terrain confirment notre intuition : des résultats de propreté équivalents — voire supérieurs sur certaines surfaces sensibles — tout en réduisant drastiquement l'impact sur les écosystèmes locaux et la qualité de l'air intérieur de nos clients.",
        "Cette démarche s'inscrit dans notre politique RSE plus large : tri sélectif sur chantier, optimisation des consommations d'eau, et accompagnement de nos clients vers des bâtiments plus sains.",
      ],
      en: [
        "Since its inception, Gabon Nettoyage & Multiservices has placed environmental respect at the heart of its approach. In 2026, we are taking a new step by extending the use of 100% bio products across all our work in Libreville and its surroundings.",
        "This transition is the result of in-depth work carried out with our supplier partners, selected for their ability to offer high-performance formulations, without petrochemical surfactants, phosphates or synthetic fragrances. Our agents also benefit from dedicated training on the new dosages and protocols.",
        "Initial field feedback confirms our intuition: equivalent — or even superior — cleanliness results on certain sensitive surfaces, while drastically reducing the impact on local ecosystems and indoor air quality for our clients.",
        "This approach is part of our broader CSR policy: selective sorting on site, optimization of water consumption, and supporting our clients towards healthier buildings.",
      ],
    },
    tags: ["RSE", "Bio", "Innovation"],
  },
  {
    id: "2",
    slug: "remise-en-etat-owendo",
    cover: work1,
    category: { fr: "Intervention", en: "Field work" },
    date: "2026-05-08",
    author: { fr: "Direction opérations", en: "Operations" },
    readTime: 4,
    title: {
      fr: "Remise en état complète d'un immeuble de bureaux à Owendo",
      en: "Full restoration of an office building in Owendo",
    },
    excerpt: {
      fr: "Retour sur une intervention de 72h impliquant 14 agents pour redonner vie à 3 200 m² de bureaux.",
      en: "A look back at a 72h project with 14 agents to restore 3,200 sqm of offices.",
    },
    content: {
      fr: [
        "Notre client, un acteur majeur du secteur logistique installé à Owendo, nous a confié la remise en état complète de ses 3 200 m² de bureaux après plusieurs années d'exploitation intensive.",
        "L'intervention, planifiée sur un week-end prolongé pour ne pas perturber l'activité, a mobilisé 14 agents répartis en trois équipes : sols, vitrerie et sanitaires. Décapage, cristallisation des marbres, nettoyage haute pression des terrasses : chaque zone a fait l'objet d'un protocole dédié.",
        "Le résultat parle de lui-même : des espaces de travail comme neufs, livrés clés en main le lundi matin à l'ouverture des bureaux.",
      ],
      en: [
        "Our client, a major logistics player based in Owendo, entrusted us with the full restoration of their 3,200 sqm of offices after several years of intensive use.",
        "The intervention, planned over a long weekend so as not to disrupt activity, mobilized 14 agents split into three teams: floors, glazing and sanitary. Stripping, marble crystallization, high-pressure cleaning of terraces: each area had its own dedicated protocol.",
        "The result speaks for itself: workspaces like new, delivered turnkey on Monday morning at office opening.",
      ],
    },
    tags: ["Bureaux", "Owendo", "Remise en état"],
  },
  {
    id: "3",
    slug: "formation-agents",
    cover: work2,
    category: { fr: "Formation", en: "Training" },
    date: "2026-04-19",
    author: { fr: "Service formation", en: "Training department" },
    readTime: 3,
    title: {
      fr: "Nouvelle session de formation pour nos agents de propreté",
      en: "New training session for our cleaning agents",
    },
    excerpt: {
      fr: "20 nouveaux agents ont rejoint nos équipes après deux semaines de formation intensive.",
      en: "20 new agents joined our team after two weeks of intensive training.",
    },
    content: {
      fr: [
        "20 nouveaux agents viennent de rejoindre nos équipes après deux semaines de formation intensive mêlant théorie et pratique.",
        "Sécurité, dosage des produits, ergonomie des gestes, relation client : chaque module est conçu pour garantir un niveau de service homogène sur tous nos chantiers.",
      ],
      en: [
        "20 new agents have just joined our teams after two weeks of intensive training combining theory and practice.",
        "Safety, product dosing, ergonomics, customer relations: each module is designed to guarantee a consistent level of service on all our sites.",
      ],
    },
    tags: ["Formation", "RH"],
  },
  {
    id: "4",
    slug: "partenariat-ecole-recyclage",
    cover: work3,
    category: { fr: "Partenariat", en: "Partnership" },
    date: "2026-04-02",
    author: { fr: "Équipe RSE", en: "CSR Team" },
    readTime: 3,
    title: {
      fr: "Partenariat avec une école de Libreville pour le recyclage",
      en: "Partnership with a Libreville school for recycling",
    },
    excerpt: {
      fr: "Un programme pédagogique de tri sélectif déployé auprès de 600 élèves.",
      en: "An educational sorting program rolled out for 600 students.",
    },
    content: {
      fr: [
        "Nous avons lancé un programme pédagogique de tri sélectif au sein d'une école de Libreville, touchant 600 élèves.",
        "Ateliers ludiques, mise à disposition de bacs colorés et accompagnement des enseignants : un projet qui sème les bonnes habitudes dès le plus jeune âge.",
      ],
      en: [
        "We launched an educational sorting program in a Libreville school, reaching 600 students.",
        "Fun workshops, colored bins and teacher support: a project that sows good habits from an early age.",
      ],
    },
    tags: ["RSE", "Éducation"],
  },
  {
    id: "5",
    slug: "nouvelles-autolaveuses",
    cover: work4,
    category: { fr: "Innovation", en: "Innovation" },
    date: "2026-03-15",
    author: { fr: "Direction technique", en: "Technical department" },
    readTime: 3,
    title: {
      fr: "Acquisition de nouvelles autolaveuses pour nos chantiers industriels",
      en: "New scrubber-dryers for our industrial sites",
    },
    excerpt: {
      fr: "Une flotte renouvelée pour plus d'efficacité et moins de consommation d'eau.",
      en: "A renewed fleet for better efficiency and lower water consumption.",
    },
    content: {
      fr: [
        "Notre flotte de machines vient de s'enrichir de plusieurs autolaveuses dernière génération.",
        "Moins d'eau, moins de produit, plus de rendement : ces équipements nous permettent de couvrir de grandes surfaces tout en restant fidèles à nos engagements environnementaux.",
      ],
      en: [
        "Our machine fleet has just been enriched with several latest-generation scrubber-dryers.",
        "Less water, less product, more output: this equipment lets us cover large surfaces while staying true to our environmental commitments.",
      ],
    },
    tags: ["Matériel", "Innovation"],
  },
  {
    id: "6",
    slug: "salon-pro-services-2026",
    cover: work5,
    category: { fr: "Événement", en: "Event" },
    date: "2026-02-28",
    author: { fr: "Communication", en: "Communications" },
    readTime: 2,
    title: {
      fr: "Gabon Nettoyage présent au Salon Pro Services 2026",
      en: "Gabon Nettoyage at the Pro Services Trade Show 2026",
    },
    excerpt: {
      fr: "Trois jours d'échanges avec nos partenaires et clients à l'Institut Français du Gabon.",
      en: "Three days of exchanges with partners and clients at the French Institute of Gabon.",
    },
    content: {
      fr: [
        "Trois jours intenses d'échanges, de démonstrations et de rencontres à l'Institut Français du Gabon.",
        "Merci à tous nos visiteurs, partenaires et clients qui ont fait de cette édition un succès.",
      ],
      en: [
        "Three intense days of exchanges, demonstrations and meetings at the French Institute of Gabon.",
        "Thanks to all our visitors, partners and clients who made this edition a success.",
      ],
    },
    tags: ["Événement", "Salon"],
  },
  {
    id: "7",
    slug: "desinfection-urgence-medical",
    cover: work6,
    category: { fr: "Intervention", en: "Field work" },
    date: "2026-02-10",
    author: { fr: "Équipe astreinte", en: "On-call team" },
    readTime: 4,
    title: {
      fr: "Désinfection d'urgence dans un centre médical",
      en: "Emergency disinfection at a medical center",
    },
    excerpt: {
      fr: "Notre équipe d'astreinte est intervenue en moins de 4h avec des protocoles certifiés.",
      en: "Our on-call team intervened in under 4 hours with certified protocols.",
    },
    content: {
      fr: [
        "Sollicités en urgence par un centre médical de Libreville, nos équipes d'astreinte se sont mobilisées en moins de 4 heures.",
        "Protocole de désinfection certifié, équipements de protection adaptés, traçabilité complète : la continuité des soins a été assurée dès le lendemain matin.",
      ],
      en: [
        "Called urgently by a Libreville medical center, our on-call teams mobilized in under 4 hours.",
        "Certified disinfection protocol, suitable protective equipment, full traceability: care continuity was ensured the very next morning.",
      ],
    },
    tags: ["Santé", "Urgence", "Désinfection"],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
