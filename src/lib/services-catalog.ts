import { Building2, Factory, ShieldPlus, Leaf, Recycle, Users } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work4 from "@/assets/work-4.jpg";

export type Bi = { fr: string; en: string };

export type Service = {
  slug: string;
  name: Bi;
  description: Bi;
  audience: "particulier" | "entreprise" | "tous";
  bullets: Bi[];
};

export type Category = {
  slug: string;
  icon: any;
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
    tagline: { fr: "Entretien régulier de vos espaces au quotidien.", en: "Everyday upkeep of your spaces." },
    image: hero1,
    services: [
      {
        slug: "nettoyage-residentiel",
        name: { fr: "Nettoyage résidentiel", en: "Home cleaning" },
        description: {
          fr: "Une maison impeccable, à votre rythme, par une équipe de confiance et formée.",
          en: "An impeccable home, at your pace, by a trained and trusted team.",
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
    tagline: { fr: "Interventions techniques et mécanisées.", en: "Technical and mechanized interventions." },
    image: work1,
    services: [
      {
        slug: "vitres",
        name: { fr: "Nettoyage de vitres", en: "Window cleaning" },
        description: {
          fr: "Vitres, baies, façades : intérieur comme extérieur, à toutes hauteurs.",
          en: "Windows, bays, façades: indoor and outdoor, at any height.",
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
    tagline: { fr: "Jardins, espaces verts et extérieurs.", en: "Gardens, green spaces and outdoors." },
    image: hero3,
    services: [
      {
        slug: "jardin",
        name: { fr: "Jardin & espaces verts", en: "Garden & green spaces" },
        description: {
          fr: "Tonte, taille, désherbage et entretien régulier de vos jardins.",
          en: "Mowing, pruning, weeding and regular garden upkeep.",
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
    tagline: { fr: "Collecte, tri et recyclage responsable.", en: "Responsible collection, sorting and recycling." },
    image: work2,
    services: [
      {
        slug: "collecte-tri",
        name: { fr: "Collecte et tri", en: "Collection & sorting" },
        description: {
          fr: "Mise en place d'un tri sélectif adapté à vos volumes.",
          en: "Selective sorting tailored to your volumes.",
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
  c.services.map((s) => ({ ...s, category: c }))
);

export function findService(slug: string) {
  return allServices.find((s) => s.slug === slug);
}
