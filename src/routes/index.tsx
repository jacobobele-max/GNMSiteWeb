import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Services } from "@/components/Services";
import { Philosophy } from "@/components/Philosophy";
import { Testimonials } from "@/components/Testimonials";
import { TrustedBy } from "@/components/TrustedBy";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useDocumentHead } from "@/lib/use-document-head";

export default function Index() {
  useDocumentHead({
    title: "Entreprise de Nettoyage Professionnel au Gabon | GN&M Libreville",
    meta: [
      {
        name: "description",
        content:
          "GN&M, société de nettoyage et facility management à Libreville, Port-Gentil, Moanda et Franceville. Bureaux, résidentiel, désinfection, espaces verts. Devis gratuit.",
      },
      {
        property: "og:title",
        content: "Entreprise de Nettoyage Professionnel au Gabon | GN&M Libreville",
      },
      {
        property: "og:description",
        content: "Propreté professionnelle, écologique et discrète au Gabon. Demandez votre devis.",
      },
    ],
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <SocialFloat />
      <HeroCarousel />
      <TrustedBy />
      <Services />
      <Philosophy />
      <Gallery />
      <Testimonials />
      <Footer />
      <QuoteChatbot />
      <WhatsAppFloat />
    </main>
  );
}
