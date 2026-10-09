import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Problems } from "@/components/site/Problems";
import { ValueProp } from "@/components/site/ValueProp";
import { Services } from "@/components/site/Services";
import { DataIntelligence } from "@/components/site/DataIntelligence";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { BRAND, PHONE, INSTAGRAM } from "@/lib/contact";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Equipe Marco Roza Beach Tennis | Treinamento de Elite & Formação em Maringá",
      },
      {
        name: "description",
        content:
          "Metodologia profissional de Beach Tennis em Maringá - PR com inteligência de dados. Aulas regulares, capacitação de professores, arbitragem, clínicas e gestão de torneios com Marco Roza.",
      },
      {
        property: "og:title",
        content: "Equipe Marco Roza Beach Tennis | Método, Dados e Alta Performance",
      },
      {
        property: "og:description",
        content:
          "Aulas, formação profissional de treinadores e ecossistema com dados em Maringá. Da iniciação ao alto rendimento.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://marcoroza.com.br/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Equipe Marco Roza Beach Tennis | Treinamento em Maringá" },
      { name: "twitter:description", content: "Aulas de Beach Tennis, capacitação de professores, clínicas e torneios em Maringá com a Equipe Marco Roza." },
    ],
    links: [{ rel: "canonical", href: "https://marcoroza.com.br/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://marcoroza.com.br/#equipe",
        name: BRAND,
        url: "https://marcoroza.com.br/",
        telephone: `+${PHONE}`,
        sameAs: [INSTAGRAM],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Nóbrega 62, Centro",
          addressLocality: "Maringá",
          addressRegion: "PR",
          addressCountry: "BR",
        },
      }),
    }],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-[#090c16] text-[#f4f3ef] selection:bg-accent selection:text-black">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Problems />
      <ValueProp />
      <Services />
      <DataIntelligence />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

