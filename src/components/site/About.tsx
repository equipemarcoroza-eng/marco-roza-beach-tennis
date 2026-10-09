import aboutImg from "@/assets/about-marco.jpg";
import logo from "@/assets/logo-marco-roza.png";
import { MessageCircle, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/contact";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-[#FAF8F5] py-24 text-[#090C16] md:py-36 lg:py-44">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[5fr_6fr] lg:gap-24">
          
          {/* Coluna da Imagem com Moldura e Selo Giratório */}
          <div className="reveal relative mx-auto w-full max-w-[500px]">
            {/* Moldura geométrica elegante */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-[#d4982f]/40 transition-transform duration-700" />
            
            {/* Foto Retrato */}
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Marco Roza, Head Coach e referência em Beach Tennis em Maringá"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover object-[55%_20%] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Selo Circular Giratório com Monograma */}
            <div className="absolute -bottom-8 -right-4 h-32 w-32 md:-right-8 md:h-36 md:w-36">
              <div className="relative h-full w-full">
                <svg
                  viewBox="0 0 200 200"
                  className="animate-spin-slow h-full w-full"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="stampCircle"
                      d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <circle cx="100" cy="100" r="96" className="fill-[#090C16]" />
                  <text
                    className="fill-[#FAF8F5]"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "11px",
                      letterSpacing: "3.2px",
                      fontWeight: 600,
                    }}
                  >
                    <textPath href="#stampCircle">
                      • EQUIPE MARCO ROZA • BEACH TENNIS • DESDE 2014 •
                    </textPath>
                  </text>
                </svg>
                {/* Monograma central no selo */}
                <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <img
                    src={logo}
                    alt=""
                    aria-hidden="true"
                    className="h-8 w-8 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Coluna de Texto Editorial */}
          <div className="lg:pt-4">
            <p className="eyebrow text-[#b2791d] font-semibold">
              Liderança & Trajetória
            </p>

            <h2 className="mt-5 font-display text-[38px] leading-[1.12] text-[#090C16] sm:text-5xl lg:text-[60px]">
              Técnica para decidir.{" "}
              <em className="font-serif italic text-[#b2791d] block sm:inline font-normal">
                Método
              </em>{" "}
              para evoluir.
            </h2>

            <div className="mt-7 space-y-4 text-base leading-relaxed text-[#2c3345] md:text-lg">
              <p>
                Marco Roza é pioneiro e uma das maiores referências técnicas de Beach Tennis em
                Maringá e região, com mais de uma década dedicada à formação de atletas,
                professores e à estruturação de eventos esportivos de alto padrão.
              </p>
              <p>
                À frente da <strong className="font-semibold text-[#090C16]">Equipe Marco Roza</strong>,
                desenvolveu uma metodologia autoral que elimina a estagnação típica das aulas
                tradicionais: aqui, cada treino possui propósito claro, acompanhamento individual
                e fundamentos consolidados.
              </p>
            </div>

            {/* Métrica de Impacto */}
            <div className="mt-10 flex items-end gap-6 border-y border-[#090C16]/10 py-6">
              <span className="font-display text-7xl font-bold leading-none text-[#b2791d]">
                10+
              </span>
              <p className="eyebrow max-w-[200px] pb-2 text-[10px] text-[#2c3345]/80">
                anos dedicados à excelência e formação no Beach Tennis
              </p>
            </div>

            {/* Lista com traços finos dourados */}
            <ul className="mt-8 space-y-3.5 text-[15px] text-[#2c3345]">
              <li className="flex items-start gap-3.5">
                <span className="mt-2.5 h-px w-5 shrink-0 bg-[#b2791d]" />
                <span>Metodologia pedagógica estruturada do nível iniciante ao avançado</span>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="mt-2.5 h-px w-5 shrink-0 bg-[#b2791d]" />
                <span>Capacitação e certificação técnica para novos professores de Beach Tennis</span>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="mt-2.5 h-px w-5 shrink-0 bg-[#b2791d]" />
                <span>Gestão inteligente de turmas e acompanhamento da assiduidade e performance</span>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="mt-2.5 h-px w-5 shrink-0 bg-[#b2791d]" />
                <span>Formação em arbitragem oficial e organização de torneios de destaque</span>
              </li>
            </ul>

            {/* Assinatura e Ação */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={waLink("Olá, Marco! Gostaria de conversar sobre a metodologia e agendar um horário com a equipe.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#090C16] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-xl transition-all duration-300 hover:bg-[#b2791d] hover:text-black"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Falar com o Marco</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              <div>
                <p className="font-display text-2xl italic font-bold text-[#090C16]">
                  Marco Roza
                </p>
                <p className="eyebrow text-[9px] text-[#b2791d]">
                  Head Coach & Coordenador
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
