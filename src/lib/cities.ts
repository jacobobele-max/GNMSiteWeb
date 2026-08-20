// Contenu des pages locales par ville. Les paragraphes de présence reprennent
// et paraphrasent le texte déjà présent dans src/routes/a-propos.tsx
// ("Présent à l'Estuaire, Port-Gentil, Moanda et Franceville..."). Les
// références client (ex. contrat hôpital COMILOG/HMA à Moanda) sont
// confirmées par le client — à revalider avant toute réutilisation ailleurs.
export type CityContent = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  presence: string;
  intro: string;
  highlight: string;
};

export const cities: CityContent[] = [
  {
    slug: "libreville",
    name: "Libreville",
    title: "Nettoyage professionnel à Libreville | GN&M",
    metaDescription:
      "Nettoyage de bureaux, désinfection et espaces verts à Libreville. Siège de Gabon Nettoyage & Multiservices, actif depuis 2020.",
    h1: "Nettoyage professionnel à Libreville",
    presence:
      "Gabon Nettoyage & Multiservices a son siège à Libreville, Cité Damas, où notre activité a démarré en janvier 2020. C'est ici que nous intervenons sur l'ensemble de nos huit domaines de service : nettoyage de bureaux et résidences, désinfection, entretien d'espaces verts, maintenance et multiservices. Nous accompagnons aussi bien de grandes structures institutionnelles que les particuliers des quartiers d'Akanda, Owendo et du centre-ville, avec nos formules résidentielles Essentielle, Confort et Premium.",
    intro:
      "Basé Cité Damas, notre siège social couvre l'ensemble du Grand Libreville : bureaux, résidences, commerces et sites institutionnels. C'est ici que sont coordonnées l'ensemble de nos interventions multi-villes.",
    highlight:
      "Zone de couverture la plus dense, avec équipes dédiées aux contrats entreprises et particuliers.",
  },
  {
    slug: "port-gentil",
    name: "Port-Gentil",
    title: "Nettoyage industriel à Port-Gentil | GN&M",
    metaDescription:
      "Nettoyage et désinfection professionnelle à Port-Gentil, adaptés aux exigences du secteur pétrolier et industriel.",
    h1: "Nettoyage industriel à Port-Gentil",
    presence:
      "Présents à Port-Gentil, cœur industriel et pétrolier du Gabon, nos équipes interviennent auprès d'entreprises aux exigences d'hygiène et de sécurité élevées. Nettoyage industriel, désinfection de sites sensibles et entretien régulier de locaux professionnels : nos protocoles sont adaptés aux contraintes spécifiques du secteur pétrolier et des zones portuaires.",
    intro:
      "Capitale économique et pétrolière du Gabon, Port-Gentil concentre nos interventions auprès d'acteurs industriels et logistiques exigeant des standards HSE stricts.",
    highlight: "Expertise nettoyage industriel et sites à contraintes d'accès réglementées.",
  },
  {
    slug: "moanda",
    name: "Moanda",
    title: "Nettoyage industriel à Moanda | GN&M",
    metaDescription:
      "Gabon Nettoyage & Multiservices intervient à Moanda sur des sites miniers et industriels, avec des standards de qualité stricts.",
    h1: "Nettoyage industriel à Moanda",
    presence:
      "À Moanda, GN&M assure des prestations de nettoyage industriel et d'hygiène environnementale sur des sites miniers exigeants, en lien avec les standards de qualité et de sécurité du secteur. Notre présence de longue date dans la région repose sur une exécution rigoureuse et un suivi qualité constant, adaptés aux besoins d'exploitants industriels majeurs.",
    intro:
      "À Moanda, GN&M assure depuis plus de 3 ans le nettoyage de l'hôpital COMILOG/HMA, une référence en matière d'hygiène hospitalière et de désinfection en milieu minier.",
    highlight:
      "Contrat de référence en milieu hospitalier et minier, exécuté en continu depuis 2020.",
  },
  {
    slug: "franceville",
    name: "Franceville",
    title: "Nettoyage professionnel à Franceville | GN&M",
    metaDescription:
      "Services de nettoyage et d'entretien à Franceville pour entreprises, établissements et particuliers.",
    h1: "Nettoyage professionnel à Franceville",
    // Texte volontairement générique — pas assez d'éléments concrets sur
    // l'activité GN&M à Franceville pour un texte différenciant sans
    // inventer de détails. À enrichir dès que Jacob fournit des précisions
    // (chantiers, secteurs clients, ancienneté locale...).
    presence:
      "Gabon Nettoyage & Multiservices est présent à Franceville pour accompagner entreprises et particuliers de la province du Haut-Ogooué dans leurs besoins de propreté et d'entretien.",
    intro:
      "À Franceville, nous accompagnons entreprises et institutions du Haut-Ogooué avec les mêmes standards de qualité que sur nos autres sites, adaptés aux réalités logistiques de la région.",
    highlight: "Couverture Haut-Ogooué avec équipes locales formées aux procédures GN&M.",
  },
];

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}
