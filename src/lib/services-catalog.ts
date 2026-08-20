import {
  Building2,
  Factory,
  ShieldPlus,
  Leaf,
  Recycle,
  Users,
  type LucideIcon,
} from "lucide-react";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";
import work1 from "@/assets/work-1.webp";
import work2 from "@/assets/work-2.webp";
import work4 from "@/assets/work-4.webp";

export type Bi = { fr: string; en: string };

export type Service = {
  slug: string;
  name: Bi;
  description: Bi;
  longDescription: Bi;
  audience: "particulier" | "entreprise" | "tous";
  bullets: Bi[];
};

export type Category = {
  slug: string;
  icon: LucideIcon;
  name: Bi;
  tagline: Bi;
  image: string;
  services: Service[];
};

export const categories: Category[] = [
  {
    slug: "nettoyage-courant",
    icon: Building2,
    name: { fr: "Nettoyage courant", en: "Regular cleaning" },
    tagline: {
      fr: "Entretien régulier de vos espaces au quotidien.",
      en: "Everyday upkeep of your spaces.",
    },
    image: hero1,
    services: [
      {
        slug: "nettoyage-residentiel",
        name: { fr: "Nettoyage résidentiel", en: "Home cleaning" },
        description: {
          fr: "Une maison impeccable, à votre rythme, par une équipe de confiance et formée.",
          en: "An impeccable home, at your pace, by a trained and trusted team.",
        },
        longDescription: {
          fr: "Concrètement, nos agents interviennent chez vous selon une fréquence adaptée à votre rythme de vie — ponctuelle, hebdomadaire ou régulière. Chaque passage couvre le dépoussiérage des surfaces, le nettoyage des sols, l'entretien des sanitaires et le vidage des corbeilles, avec des produits et un protocole constants d'une visite à l'autre. Vous gardez le même interlocuteur et retrouvez un intérieur impeccable sans avoir à vous en soucier.",
          en: "In practice, our agents visit your home on a schedule that fits your pace — one-off, weekly or on a regular basis. Each visit covers surface dusting, floor cleaning, bathroom upkeep and bin emptying, with the same products and protocol from one visit to the next. You keep the same point of contact and come home to a spotless space without having to manage it yourself.",
        },
        audience: "particulier",
        bullets: [
          { fr: "Dépoussiérage des surfaces", en: "Surface dusting" },
          { fr: "Nettoyage des sols", en: "Floor cleaning" },
          { fr: "Entretien des sanitaires", en: "Bathroom upkeep" },
          { fr: "Vidage des corbeilles", en: "Bin emptying" },
        ],
      },
      {
        slug: "nettoyage-bureaux",
        name: { fr: "Nettoyage de bureaux", en: "Office cleaning" },
        description: {
          fr: "Entretien quotidien ou ponctuel de vos espaces professionnels, en toute discrétion.",
          en: "Daily or one-off upkeep of your workspaces, with full discretion.",
        },
        longDescription: {
          fr: "Nos équipes interviennent en dehors ou en marge de vos horaires de bureau pour ne pas perturber votre activité : nettoyage des postes de travail, entretien des sols et moquettes, puis remise à niveau des sanitaires et espaces communs. La fréquence (quotidienne, plusieurs fois par semaine ou ponctuelle) est fixée avec vous selon la fréquentation de vos locaux.",
          en: "Our teams work outside or around your office hours to avoid disrupting your activity: workstation cleaning, floor and carpet care, then a full refresh of bathrooms and shared spaces. Frequency (daily, several times a week, or one-off) is set with you based on how busy your premises are.",
        },
        audience: "entreprise",
        bullets: [
          { fr: "Nettoyage des postes de travail", en: "Workstation cleaning" },
          { fr: "Entretien des sols et moquettes", en: "Floor & carpet care" },
          { fr: "Sanitaires et espaces communs", en: "Bathrooms & shared spaces" },
        ],
      },
      {
        slug: "remises-en-etat",
        name: { fr: "Remises en état", en: "Restoration works" },
        description: {
          fr: "Nettoyage minutieux après travaux ou événement : poussière, résidus, vitres.",
          en: "Detailed cleanup after works or events: dust, residue, windows.",
        },
        longDescription: {
          fr: "Après un chantier, un sinistre ou un événement, nos équipes procèdent par étapes : décapage complet des surfaces couvertes de poussière ou de résidus, traitement des vitres encrassées, puis évacuation des déchets. L'objectif est de vous rendre un espace directement utilisable, sans étape supplémentaire de votre côté.",
          en: "After construction works, an incident or an event, our teams proceed step by step: full stripping of dust- or residue-covered surfaces, treatment of soiled windows, then waste removal. The goal is to hand back a space you can use immediately, with no extra step on your side.",
        },
        audience: "tous",
        bullets: [
          { fr: "Décapage complet", en: "Full stripping" },
          { fr: "Traitement des vitres", en: "Window treatment" },
          { fr: "Évacuation des déchets", en: "Waste removal" },
        ],
      },
    ],
  },
  {
    slug: "nettoyage-specialise",
    icon: Factory,
    name: { fr: "Nettoyage spécialisé", en: "Specialized cleaning" },
    tagline: {
      fr: "Interventions techniques et mécanisées.",
      en: "Technical and mechanized interventions.",
    },
    image: work1,
    services: [
      {
        slug: "vitres",
        name: { fr: "Nettoyage de vitres", en: "Window cleaning" },
        description: {
          fr: "Vitres, baies, façades : intérieur comme extérieur, à toutes hauteurs.",
          en: "Windows, bays, façades: indoor and outdoor, at any height.",
        },
        longDescription: {
          fr: "Nos équipes interviennent sur les vitres intérieures et extérieures, y compris en hauteur grâce à des perches télescopiques et des protocoles de travail en hauteur sécurisés. La fréquence est adaptée à l'exposition de vos façades (poussière, embruns, trafic urbain).",
          en: "Our teams handle both indoor and outdoor windows, including at height using telescopic poles and secured height-work protocols. Frequency is adapted to how exposed your façades are (dust, sea spray, urban traffic).",
        },
        audience: "entreprise",
        bullets: [
          { fr: "Vitres intérieures et extérieures", en: "Indoor & outdoor windows" },
          { fr: "Travaux en hauteur sécurisés", en: "Secured height work" },
          { fr: "Perches télescopiques", en: "Telescopic poles" },
        ],
      },
      {
        slug: "sols-durs",
        name: { fr: "Carrelage & sols durs", en: "Tile & hard floors" },
        description: {
          fr: "Décapage, lustrage, cristallisation pour des sols brillants et durables.",
          en: "Stripping, polishing, crystallization for lasting, shiny floors.",
        },
        longDescription: {
          fr: "Sur carrelage, marbre ou sols durs ternis par l'usage, nos équipes réalisent un décapage machine pour retirer les couches encrassées, puis une cristallisation qui redonne brillance et protège la surface durablement. Le résultat tient dans le temps, avec un entretien de maintien à intervalles définis avec vous.",
          en: "On tile, marble or hard floors dulled by use, our teams carry out machine stripping to remove built-up grime, then crystallization that restores shine and protects the surface long-term. Results last, with maintenance upkeep at intervals agreed with you.",
        },
        audience: "entreprise",
        bullets: [
          { fr: "Décapage machine", en: "Machine stripping" },
          { fr: "Cristallisation marbre", en: "Marble crystallization" },
          { fr: "Protection longue durée", en: "Long-lasting protection" },
        ],
      },
      {
        slug: "fin-chantier",
        name: { fr: "Fin de chantier / rénovation", en: "Post-construction" },
        description: {
          fr: "Remise à neuf complète après vos travaux de rénovation.",
          en: "Complete refresh after your renovation works.",
        },
        longDescription: {
          fr: "À la fin de vos travaux de rénovation, nos équipes assurent un dépoussiérage complet du site, le décollage des résidus de colle, peinture ou plâtre, puis une livraison clés en main, prêt à être occupé ou présenté à vos clients.",
          en: "At the end of your renovation works, our teams carry out full dusting of the site, removal of glue, paint or plaster residue, then a turnkey handover, ready to be occupied or shown to your clients.",
        },
        audience: "tous",
        bullets: [
          { fr: "Dépoussiérage complet", en: "Full dusting" },
          { fr: "Décollage résidus", en: "Residue removal" },
          { fr: "Livraison clés en main", en: "Turnkey delivery" },
        ],
      },
    ],
  },
  {
    slug: "desinfection-hygiene",
    icon: ShieldPlus,
    name: { fr: "Désinfection & Hygiène", en: "Disinfection & Hygiene" },
    tagline: { fr: "Protocoles sanitaires certifiés.", en: "Certified sanitary protocols." },
    image: hero2,
    services: [
      {
        slug: "desinfection-domicile",
        name: { fr: "Désinfection domicile", en: "Home disinfection" },
        description: {
          fr: "Désinfection sécuritaire aux produits certifiés, pour vos enfants et animaux.",
          en: "Safe disinfection with certified products, safe for kids and pets.",
        },
        longDescription: {
          fr: "Nos agents utilisent exclusivement des produits certifiés biologiques, sans danger pour les enfants et les animaux domestiques, appliqués selon un protocole adapté à chaque pièce du logement. Une désinfection ponctuelle ou régulière limite la prolifération de germes dans les zones sensibles (sanitaires, cuisine, poignées).",
          en: "Our agents use exclusively certified bio products, safe for children and pets, applied according to a protocol adapted to each room in your home. A one-off or regular disinfection limits germ spread in sensitive areas (bathrooms, kitchen, door handles).",
        },
        audience: "particulier",
        bullets: [
          { fr: "Produits certifiés bio", en: "Certified bio products" },
          { fr: "Sans danger enfants/animaux", en: "Kid & pet safe" },
        ],
      },
      {
        slug: "desinfection-pro",
        name: { fr: "Désinfection professionnelle", en: "Professional disinfection" },
        description: {
          fr: "Protocoles sanitaires conformes pour vos équipes et vos clients.",
          en: "Compliant sanitary protocols for your teams and clients.",
        },
        longDescription: {
          fr: "Nos protocoles de désinfection professionnelle s'appuient sur des équipements homologués et une traçabilité complète de chaque intervention (produits utilisés, zones traitées, horodatage), documents que nous transmettons à vos équipes QHSE. En cas d'urgence sanitaire, nous intervenons sous 4h.",
          en: "Our professional disinfection protocols rely on certified equipment and full traceability of every intervention (products used, treated areas, timestamps), which we share with your QHSE teams. In case of a health emergency, we respond within 4 hours.",
        },
        audience: "entreprise",
        bullets: [
          { fr: "Traçabilité complète", en: "Full traceability" },
          { fr: "Équipements homologués", en: "Certified equipment" },
          { fr: "Intervention urgente 4h", en: "4h emergency response" },
        ],
      },
      {
        slug: "milieux-hospitaliers",
        name: { fr: "Milieux hospitaliers", en: "Hospital environments" },
        description: {
          fr: "Entretien conforme aux exigences des centres de santé.",
          en: "Cleaning compliant with health facility standards.",
        },
        longDescription: {
          fr: "Nos agents affectés aux établissements de santé suivent une formation spécifique aux protocoles hospitaliers (zones à risque, gestion des déchets biomédicaux, bio-nettoyage) avant toute intervention. Nous adaptons nos méthodes aux exigences de chaque service (bloc, urgences, chambres) en lien avec vos référents hygiène.",
          en: "Agents assigned to health facilities complete specific training in hospital protocols (risk zones, biomedical waste management, bio-cleaning) before any intervention. We adapt our methods to the requirements of each department (operating theatre, emergency room, patient rooms) in coordination with your hygiene officers.",
        },
        audience: "entreprise",
        bullets: [
          { fr: "Protocoles hospitaliers", en: "Hospital protocols" },
          { fr: "Personnel formé", en: "Trained staff" },
        ],
      },
    ],
  },
  {
    slug: "entretien-exterieur",
    icon: Leaf,
    name: { fr: "Entretien extérieur", en: "Outdoor upkeep" },
    tagline: {
      fr: "Jardins, espaces verts et extérieurs.",
      en: "Gardens, green spaces and outdoors.",
    },
    image: hero3,
    services: [
      {
        slug: "jardin",
        name: { fr: "Jardin & espaces verts", en: "Garden & green spaces" },
        description: {
          fr: "Tonte, taille, désherbage et entretien régulier de vos jardins.",
          en: "Mowing, pruning, weeding and regular garden upkeep.",
        },
        longDescription: {
          fr: "Nos équipes de jardiniers assurent la tonte et la taille régulières, le désherbage par des méthodes écologiques et un entretien saisonnier adapté au climat gabonais. La fréquence de passage est définie avec vous selon la croissance de vos espaces verts.",
          en: "Our gardening teams handle regular mowing and pruning, weeding using eco-friendly methods, and seasonal upkeep adapted to Gabon's climate. Visit frequency is set with you based on how fast your green spaces grow.",
        },
        audience: "tous",
        bullets: [
          { fr: "Tonte & taille", en: "Mowing & pruning" },
          { fr: "Désherbage écologique", en: "Eco-friendly weeding" },
          { fr: "Entretien saisonnier", en: "Seasonal upkeep" },
        ],
      },
      {
        slug: "piscine",
        name: { fr: "Entretien piscine", en: "Pool maintenance" },
        description: {
          fr: "Traitement de l'eau, nettoyage des parois, équilibre chimique vérifié.",
          en: "Water treatment, wall cleaning, balanced chemistry checked.",
        },
        longDescription: {
          fr: "Nos techniciens contrôlent et ajustent l'équilibre chimique de l'eau à chaque visite, nettoient les parois et le fond du bassin, et assurent le traitement nécessaire pour une eau saine toute l'année. Un suivi régulier évite les mauvaises surprises (eau trouble, algues) avant qu'elles ne s'installent.",
          en: "Our technicians check and adjust water chemistry at every visit, clean the pool walls and floor, and carry out the treatment needed for healthy water year-round. Regular follow-up prevents issues (cloudy water, algae) before they take hold.",
        },
        audience: "particulier",
        bullets: [
          { fr: "Traitement de l'eau", en: "Water treatment" },
          { fr: "Nettoyage parois & fond", en: "Wall & bottom cleaning" },
          { fr: "Contrôle pH", en: "pH control" },
        ],
      },
      {
        slug: "parking",
        name: { fr: "Entretien de parking", en: "Parking upkeep" },
        description: {
          fr: "Nettoyage haute pression et rafraîchissement de vos parkings.",
          en: "High-pressure cleaning and refresh of your parkings.",
        },
        longDescription: {
          fr: "Nos équipes réalisent un nettoyage haute pression de vos surfaces de parking (huiles, traces de pneus, saletés incrustées) et peuvent reprendre le marquage au sol si nécessaire. Une intervention ponctuelle ou planifiée redonne à vos accès une image soignée.",
          en: "Our teams carry out high-pressure cleaning of your parking surfaces (oil stains, tire marks, ingrained dirt) and can redo floor marking if needed. A one-off or scheduled intervention gives your entrances a well-kept image.",
        },
        audience: "entreprise",
        bullets: [
          { fr: "Haute pression", en: "High pressure" },
          { fr: "Marquage au sol", en: "Floor marking" },
        ],
      },
    ],
  },
  {
    slug: "gestion-dechets",
    icon: Recycle,
    name: { fr: "Gestion des déchets", en: "Waste management" },
    tagline: {
      fr: "Collecte, tri et recyclage responsable.",
      en: "Responsible collection, sorting and recycling.",
    },
    image: work2,
    services: [
      {
        slug: "collecte-tri",
        name: { fr: "Collecte et tri", en: "Collection & sorting" },
        description: {
          fr: "Mise en place d'un tri sélectif adapté à vos volumes.",
          en: "Selective sorting tailored to your volumes.",
        },
        longDescription: {
          fr: "Nous mettons en place des bacs de tri sélectif colorés adaptés à vos volumes et à vos flux de déchets, avec une rotation planifiée qui évite tout débordement. Ce dispositif s'intègre à votre organisation existante sans surcharger vos équipes.",
          en: "We set up color-coded selective sorting bins tailored to your volumes and waste streams, with a scheduled rotation that avoids overflow. This system fits into your existing organization without adding to your teams' workload.",
        },
        audience: "entreprise",
        bullets: [
          { fr: "Bacs colorés fournis", en: "Colored bins provided" },
          { fr: "Rotation planifiée", en: "Scheduled rotation" },
        ],
      },
      {
        slug: "deratisation",
        name: { fr: "Dératisation & 3D", en: "Pest control (3D)" },
        description: {
          fr: "Lutte contre les nuisibles (rats, insectes, termites) avec des protocoles maîtrisés.",
          en: "Rats, insects, termites — controlled, expert protocols.",
        },
        longDescription: {
          fr: "Nos techniciens réalisent d'abord un diagnostic gratuit pour identifier l'ampleur de l'infestation (rats, insectes, termites), puis appliquent des produits homologués selon un protocole adapté au site. Un suivi post-intervention permet de vérifier l'efficacité du traitement et d'ajuster si nécessaire.",
          en: "Our technicians start with a free diagnosis to assess the extent of the infestation (rats, insects, termites), then apply certified products according to a protocol suited to the site. Post-treatment follow-up checks the treatment's effectiveness and allows adjustments if needed.",
        },
        audience: "tous",
        bullets: [
          { fr: "Diagnostic gratuit", en: "Free diagnosis" },
          { fr: "Produits homologués", en: "Certified products" },
          { fr: "Suivi post-intervention", en: "Post-treatment follow-up" },
        ],
      },
      {
        slug: "gestion-responsable",
        name: { fr: "Gestion responsable", en: "Responsible management" },
        description: {
          fr: "Valorisation et recyclage des déchets collectés.",
          en: "Recovery and recycling of collected waste.",
        },
        longDescription: {
          fr: "Au-delà de la collecte, nous orientons vos déchets vers des filières de recyclage et de valorisation agréées, avec un reporting mensuel qui vous permet de suivre les volumes traités et leur devenir. Cette traçabilité s'intègre à votre démarche RSE.",
          en: "Beyond collection, we route your waste to certified recycling and recovery channels, with monthly reporting that lets you track the volumes processed and their destination. This traceability supports your CSR approach.",
        },
        audience: "entreprise",
        bullets: [
          { fr: "Filières agréées", en: "Certified channels" },
          { fr: "Reporting mensuel", en: "Monthly reporting" },
        ],
      },
    ],
  },
  {
    slug: "services-support",
    icon: Users,
    name: { fr: "Services support", en: "Support services" },
    tagline: { fr: "Personnel qualifié et logistique.", en: "Qualified staff and logistics." },
    image: work4,
    services: [
      {
        slug: "demenagement",
        name: { fr: "Déménagement", en: "Moving" },
        description: {
          fr: "Logistique et manutention pour un déménagement serein, en toute sécurité.",
          en: "Logistics and handling for a smooth, safe move.",
        },
        longDescription: {
          fr: "Une équipe dédiée prend en charge l'emballage, la protection du mobilier et des équipements sensibles, puis la manutention et le transport jusqu'à votre nouveau site. Nous organisons le déménagement en amont avec vous pour limiter l'interruption de votre activité.",
          en: "A dedicated team handles packing, protecting furniture and sensitive equipment, then handling and transport to your new site. We plan the move with you in advance to limit any disruption to your activity.",
        },
        audience: "tous",
        bullets: [
          { fr: "Équipe dédiée", en: "Dedicated team" },
          { fr: "Emballage & protection", en: "Packing & protection" },
        ],
      },
      {
        slug: "placement-agent",
        name: { fr: "Placement d'agents", en: "Agent placement" },
        description: {
          fr: "Mise à disposition d'agents d'entretien formés et suivis.",
          en: "Trained, supervised cleaning agents made available to you.",
        },
        longDescription: {
          fr: "Nous mettons à votre disposition des agents d'entretien formés, sélectionnés selon vos besoins spécifiques, avec un encadrement dédié qui assure leur suivi et leur remplacement en cas d'absence. Vous bénéficiez d'un point de contact unique pour la gestion de ce personnel.",
          en: "We provide you with trained cleaning agents, selected to match your specific needs, with dedicated supervision that ensures follow-up and replacement in case of absence. You get a single point of contact for managing this staff.",
        },
        audience: "entreprise",
        bullets: [
          { fr: "Agents formés", en: "Trained agents" },
          { fr: "Encadrement dédié", en: "Dedicated supervision" },
        ],
      },
      {
        slug: "formation",
        name: { fr: "Formation propreté", en: "Cleaning training" },
        description: {
          fr: "Formations continues aux métiers de la propreté et de l'hygiène.",
          en: "Ongoing training in cleaning and hygiene professions.",
        },
        longDescription: {
          fr: "Nos formateurs experts animent des modules certifiants sur les métiers de la propreté et de l'hygiène (techniques, sécurité, produits), destinés à vos propres équipes ou aux agents que nous mettons à votre disposition. Le contenu est adapté à votre secteur d'activité.",
          en: "Our expert trainers deliver certifying modules on cleaning and hygiene professions (techniques, safety, products), for your own teams or for the agents we provide. Content is tailored to your sector of activity.",
        },
        audience: "entreprise",
        bullets: [
          { fr: "Modules certifiants", en: "Certifying modules" },
          { fr: "Formateurs experts", en: "Expert trainers" },
        ],
      },
    ],
  },
];

export const allServices = categories.flatMap((c) =>
  c.services.map((s) => ({ ...s, category: c })),
);

export function findService(slug: string) {
  return allServices.find((s) => s.slug === slug);
}
