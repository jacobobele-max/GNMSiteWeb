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
    title: "Nettoyage professionnel à Libreville | Gabon Nettoyage & Multiservices",
    metaDescription:
      "Nettoyage de bureaux, désinfection et entretien professionnel à Libreville. Gabon Nettoyage & Multiservices, basée à Cité Damas, à votre service depuis 2020.",
    h1: "Nettoyage professionnel à Libreville",
    presence:
      "Notre siège social est basé à Cité Damas, au cœur de Libreville. C'est depuis cette base que Gabon Nettoyage & Multiservices accompagne, depuis janvier 2020, les entreprises et les particuliers de la capitale : nettoyage de bureaux, résidentiel, désinfection et entretien extérieur, avec la même exigence de réactivité et de qualité qui caractérise nos équipes.",
    intro:
      "Basé Cité Damas, notre siège social couvre l'ensemble du Grand Libreville : bureaux, résidences, commerces et sites institutionnels. C'est ici que sont coordonnées l'ensemble de nos interventions multi-villes.",
    highlight:
      "Zone de couverture la plus dense, avec équipes dédiées aux contrats entreprises et particuliers.",
  },
  {
    slug: "port-gentil",
    name: "Port-Gentil",
    title: "Nettoyage professionnel à Port-Gentil | Gabon Nettoyage & Multiservices",
    metaDescription:
      "Gabon Nettoyage & Multiservices intervient à Port-Gentil : nettoyage de bureaux, désinfection professionnelle et entretien extérieur pour entreprises et particuliers.",
    h1: "Nettoyage professionnel à Port-Gentil",
    presence:
      "Gabon Nettoyage & Multiservices est présent à Port-Gentil, où nous nous positionnons comme l'une des entreprises de propreté parmi les leaders sur le marché. Réactivité, qualité du nettoyage et respect de l'environnement caractérisent nos équipes sur place, au service des entreprises et des particuliers de la ville.",
    intro:
      "Capitale économique et pétrolière du Gabon, Port-Gentil concentre nos interventions auprès d'acteurs industriels et logistiques exigeant des standards HSE stricts.",
    highlight: "Expertise nettoyage industriel et sites à contraintes d'accès réglementées.",
  },
  {
    slug: "moanda",
    name: "Moanda",
    title: "Nettoyage professionnel à Moanda | Gabon Nettoyage & Multiservices",
    metaDescription:
      "Gabon Nettoyage & Multiservices intervient à Moanda : nettoyage de bureaux, désinfection professionnelle et entretien extérieur pour entreprises et particuliers.",
    h1: "Nettoyage professionnel à Moanda",
    presence:
      "Gabon Nettoyage & Multiservices est présent à Moanda, où nous accompagnons entreprises et particuliers avec les mêmes exigences de réactivité, de qualité de nettoyage et de respect de l'environnement qui caractérisent nos équipes sur l'ensemble du territoire gabonais.",
    intro:
      "À Moanda, GN&M assure depuis plus de 3 ans le nettoyage de l'hôpital COMILOG/HMA, une référence en matière d'hygiène hospitalière et de désinfection en milieu minier.",
    highlight:
      "Contrat de référence en milieu hospitalier et minier, exécuté en continu depuis 2020.",
  },
  {
    slug: "franceville",
    name: "Franceville",
    title: "Nettoyage professionnel à Franceville | Gabon Nettoyage & Multiservices",
    metaDescription:
      "Gabon Nettoyage & Multiservices intervient à Franceville : nettoyage de bureaux, désinfection professionnelle et entretien extérieur pour entreprises et particuliers.",
    h1: "Nettoyage professionnel à Franceville",
    presence:
      "Gabon Nettoyage & Multiservices est présent à Franceville, où nous nous positionnons comme l'une des entreprises de propreté parmi les leaders sur le marché, au service des entreprises et des particuliers de la ville avec la même exigence de qualité qu'à Libreville.",
    intro:
      "À Franceville, nous accompagnons entreprises et institutions du Haut-Ogooué avec les mêmes standards de qualité que sur nos autres sites, adaptés aux réalités logistiques de la région.",
    highlight: "Couverture Haut-Ogooué avec équipes locales formées aux procédures GN&M.",
  },
];

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}
