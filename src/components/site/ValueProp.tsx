import { Compass, ListChecks, LineChart } from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: Compass,
    title: "Clareza Técnica",
    subtitle: "DIRECIONAMENTO SEM INCERTEZAS",
    text: "Você sabe exatamente onde está seu nível hoje, onde quer chegar e qual a rota de treinos necessária para transformar seus golpes semana a semana.",
  },
  {
    num: "02",
    icon: ListChecks,
    title: "Estrutura & Método",
    subtitle: "PERIODIZAÇÃO COMPROVADA",
    text: "Nada de aulas aleatórias. Trabalhamos com periodização pedagógica contínua, planos de aula estruturados e materiais que aceleram seu aprendizado.",
  },
  {
    num: "03",
    icon: LineChart,
    title: "Acompanhamento Cirúrgico",
    subtitle: "FEEDBACK INDIVIDUALIZADO",
    text: "Olhar técnico de quem já formou centenas de jogadores: correções imediatas de postura, apoio individual e incentivo constante para destravar o seu jogo.",
  },
];

export function ValueProp() {
  return (
    <section id="metodologia" className="scroll-mt-20 bg-[#090c16] py-24 md:py-36 lg:py-44">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Cabeçalho */}
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-accent font-semibold">Pilares da Metodologia</p>
          <h2 className="mt-4 font-display text-[38px] leading-[1.1] text-white sm:text-5xl lg:text-[62px]">
            Três compromissos em{" "}
            <em className="text-gold-gradient font-serif italic pr-2 font-normal">
              cada
            </em>{" "}
            treino.
          </h2>
        </div>

        {/* Sticky Stacking Cards (Desktop) & Grid (Mobile) */}
        <div className="mt-16 space-y-6 lg:space-y-0">
          {pillars.map((p, idx) => (
            <div
              key={p.num}
              className="lg:sticky lg:h-[58vh]"
              style={{ top: `${110 + idx * 28}px` }}
            >
              <div className="reveal">
                <article className="group grid gap-8 rounded-3xl border border-white/10 bg-[#121727] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500 hover:border-accent/60 md:grid-cols-[180px_1fr] md:p-14 lg:min-h-[320px]">
                  
                  {/* Número Monumental Dourado */}
                  <span className="font-display text-accent text-[80px] leading-none md:text-[130px] font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                    {p.num}
                  </span>

                  {/* Conteúdo do Card */}
                  <div className="md:pt-3">
                    <div className="flex items-center gap-3">
                      <p.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                      <p className="eyebrow text-[10px] text-accent/90">{p.subtitle}</p>
                    </div>

                    <h3 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
                      {p.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                      {p.text}
                    </p>
                  </div>

                </article>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
