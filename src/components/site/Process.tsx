import { MessageCircle, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/contact";

const steps = [
  {
    n: "01",
    title: "Primeiro Contato",
    tag: "WhatsApp Oficial",
    text: "Você conversa diretamente conosco para contar seu momento: se quer começar do zero, destravar seu jogo ou se profissionalizar.",
  },
  {
    n: "02",
    title: "Diagnóstico Técnico",
    tag: "Avaliação Personalizada",
    text: "Entendemos sua disponibilidade de agenda, objetivos atléticos ou profissionais e alinhamos a turma ou mentoria sob medida.",
  },
  {
    n: "03",
    title: "Plano & Cronograma",
    tag: "Metodologia Marco Roza",
    text: "Você recebe o direcionamento claro dos treinos, fundamentos que serão trabalhados e a estrutura pedagógica das aulas.",
  },
  {
    n: "04",
    title: "Evolução Contínua",
    tag: "Acompanhamento Real",
    text: "Início dos treinos com presença, reposição inteligente e feedbacks técnicos contínuos para garantir que você atinja seu auge.",
  },
];

export function Process() {
  return (
    <section id="processo" className="scroll-mt-20 relative bg-[#090c16] py-24 text-white md:py-36 lg:py-44">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Cabeçalho */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow text-accent font-semibold">
            Passo a Passo
          </span>
          <h2 className="mt-4 font-display text-[38px] leading-[1.1] sm:text-5xl lg:text-[60px]">
            Como iniciar sua{" "}
            <em className="text-gold-gradient font-serif italic pr-2 font-normal">
              jornada.
            </em>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
            Um processo direto, transparente e sem burocracia do primeiro contato à quadra.
          </p>
        </div>

        {/* Timeline dos 4 Passos */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((s, idx) => (
            <div
              key={s.n}
              className="reveal group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121727]/80 p-8 backdrop-blur-md transition-all duration-500 hover:border-accent/60 hover:bg-[#161d33] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Efeito de luz suave */}
              <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(229,167,59,0.1),transparent_70%)] pointer-events-none" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-bold text-accent/30 transition-colors duration-500 group-hover:text-accent">
                    {s.n}
                  </span>
                  <span className="eyebrow rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[8px] text-white/70">
                    {s.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-accent">
                  {s.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/65 transition-colors group-hover:text-white/85">
                  {s.text}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <span className="text-[11px] eyebrow text-accent/80 font-medium">
                  Etapa {s.n} de 04
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Intermediário */}
        <div className="reveal mt-16 text-center">
          <a
            href={waLink("Olá, Marco! Gostaria de dar o primeiro passo e saber os próximos horários disponíveis.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-glow transition-all duration-300 hover:scale-105 hover:bg-white"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Falar no WhatsApp Agora</span>
          </a>
        </div>

      </div>
    </section>
  );
}
