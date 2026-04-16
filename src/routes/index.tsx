import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problems } from "@/components/site/Problems";
import { ValueProp } from "@/components/site/ValueProp";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Equipe Marco Roza Beach Tennis | Aulas e Formação em Maringá",
      },
      {
        name: "description",
        content:
          "Treinamento e aperfeiçoamento em Beach Tennis em Maringá - PR. Aulas, capacitação para professores, arbitragem, torneios, clínicas e camps com a Equipe Marco Roza.",
      },
      {
        property: "og:title",
        content: "Equipe Marco Roza Beach Tennis",
      },
      {
        property: "og:description",
        content:
          "Aulas, formação de professores e organização de torneios de Beach Tennis em Maringá.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problems />
      <ValueProp />
      <Services />
      <Process />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
