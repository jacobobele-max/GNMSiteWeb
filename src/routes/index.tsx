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
    title: "Gabon Nettoyage & Multiservices — Propreté & services au Gabon",
    meta: [
      {
        name: "description",
        content:
          "Société gabonaise de nettoyage et multiservices : bureaux, résidentiel, désinfection, espaces verts. Engagement éco-responsable et produits bio.",
      },
      { property: "og:title", content: "Gabon Nettoyage & Multiservices" },
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
