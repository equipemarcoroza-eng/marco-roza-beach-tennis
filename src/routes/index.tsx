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
        "@graph": [
          {
            "@type": ["SportsActivityLocation", "SportsClub", "LocalBusiness"],
            "@id": "https://marcoroza.com.br/#equipe",
            name: BRAND,
            alternateName: [
              "Marco Roza Beach Tennis",
              "Equipe Marco Roza",
              "Marco Roza Maringá",
            ],
            url: "https://marcoroza.com.br/",
            telephone: `+${PHONE}`,
            sameAs: [INSTAGRAM],
            description:
              "Escola de alta performance e formação em Beach Tennis em Maringá - PR. Treinamento com metodologia científica, análise por dados, capacitação docente de professores, clínicas e gestão de torneios.",
            priceRange: "$$",
            openingHours: "Mo,Tu,We,Th,Fr,Sa 06:00-22:00",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. Nóbrega 62, Centro",
              addressLocality: "Maringá",
              addressRegion: "PR",
              postalCode: "87014-180",
              addressCountry: "BR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -23.4273,
              longitude: -51.9375,
            },
            areaServed: [
              { "@type": "City", name: "Maringá" },
              { "@type": "AdministrativeArea", name: "Paraná" },
              { "@type": "Country", name: "Brasil" },
            ],
            founder: {
              "@type": "Person",
              name: "Marco Roza",
              jobTitle: "Head Coach e Coordenador Técnico de Beach Tennis",
              sameAs: INSTAGRAM,
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "7",
              bestRating: "5",
              worstRating: "1",
            },
            review: [
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Simone Tomita" },
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                reviewBody:
                  "Consegui os melhores resultados desde que comecei as aulas com o Marco! Adaptação de jogo ao meu biótipo, força e estratégia! Excelente professor… as aulas voam!!! Obrigada Marco!",
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Kamilla Tamura" },
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                reviewBody:
                  "Excelente professor! O Marco tem uma didática muito boa, além de ser uma pessoa maravilhosa! Recomendo muito!",
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Juliane Essi" },
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                reviewBody:
                  "Minha filha tem 10 anos e faz aula 1x na semana, tem amado e evoluído muito! Prof Marco extremamente amado e profissional com as crianças! Super recomendo!",
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Guilherme Pedro" },
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                reviewBody:
                  "Ótimo profissional, atencioso e dedicado com as crianças.",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Serviços e Treinamentos de Beach Tennis",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Aulas e Treinamento de Beach Tennis",
                    description:
                      "Treinamento do iniciante ao alto rendimento em turmas ou individual com periodização física, técnica e tática.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Capacitação de Professores de Beach Tennis",
                    description:
                      "Formação de instrutores e treinadores com metodologia pedagógica, biomecânica e planejamento de treinos.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Clínicas Especializadas & Workshops",
                    description:
                      "Imersões intensivas técnicas e táticas em arenas parceiras e condomínios.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Arbitragem e Gestão de Torneios",
                    description:
                      "Organização oficial, chaveamento, arbitragem e consultoria para arenas de Beach Tennis.",
                  },
                },
              ],
            },
          },
          {
            "@type": "FAQPage",
            "@id": "https://marcoroza.com.br/#faq",
            mainEntity: [
              {
                "@type": "Question",
                name: "Nunca pratiquei Beach Tennis nem outro esporte com raquete. Posso começar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Com certeza. Nossas turmas de iniciação são pensadas exatamente para quem nunca pegou em uma raquete. Ensinamos a adaptação correta ao deslocamento na areia, empunhadura, ritmo da bola e os fundamentos essenciais sem risco de lesão.",
                },
              },
              {
                "@type": "Question",
                name: "Como funciona a Capacitação para Futuros Professores?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "É uma formação intensiva e completa com o Marco Roza, abordando biomecânica, didática pedagógica para turmas infantis e adultas, periodização técnica de treinos, correção de erros comuns e noções práticas de gestão esportiva.",
                },
              },
              {
                "@type": "Question",
                name: "As aulas são particulares ou em turmas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trabalhamos com os dois formatos. As aulas em turma contam com nivelamento rigoroso para que todos os participantes joguem com fluidez. As aulas particulares e em duplas são focadas em correções técnicas ultraespecíficas e preparação para competições.",
                },
              },
              {
                "@type": "Question",
                name: "Como funciona se eu precisar faltar em um dia de treino ou chover?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Contamos com controle inteligente de chamadas e gestão de reposições transparente. Faltas justificadas e intempéries climáticas contam com grade e horários organizados para reposição sem qualquer complicação.",
                },
              },
              {
                "@type": "Question",
                name: "Onde ocorrem os treinos e eventos da equipe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nossa base principal fica em Maringá - PR (Av. Nóbrega 62). Também realizamos clínicas, workshops e camps em arenas parceiras em outras cidades e estados sob agendamento prévio.",
                },
              },
              {
                "@type": "Question",
                name: "Como faço para agendar minha primeira aula ou tirar dúvidas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Basta clicar em qualquer botão de WhatsApp desta página. Conversaremos diretamente sobre seus horários, seu momento no esporte e indicaremos a turma perfeita para você.",
                },
              },
            ],
          },
          {
            "@type": "WebSite",
            "@id": "https://marcoroza.com.br/#website",
            url: "https://marcoroza.com.br/",
            name: BRAND,
            publisher: {
              "@id": "https://marcoroza.com.br/#equipe",
            },
            inLanguage: "pt-BR",
          },
        ],
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

