export type Testimonial = {
  auteur: string;
  texte: string;
  note: number;
  service?: string;
  source: "Google";
};

// TODO DG : copier uniquement des avis Google réels (prénom + initiale). Ne jamais inventer d'avis.
export const testimonials: Testimonial[] = [];
