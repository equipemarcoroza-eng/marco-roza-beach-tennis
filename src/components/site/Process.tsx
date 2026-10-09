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
    <section id="processo" className="scroll-mt-20 relative bg-[#FAF8F5] py-24 text-[#090C16] md:py-36 lg:py-44">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Cabeçalho */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow text-[#b2791d] font-semibold">
            Passo a Passo
          </span>
          <h2 className="mt-4 font-display text-[38px] leading-[1.1] text-[#090C16] sm:text-5xl lg:text-[60px]">
            Como iniciar sua{" "}
            <em className="font-serif italic text-[#b2791d] pr-2 font-normal">
              jornada.
            </em>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#40485d] md:text-base">
            Um processo direto, transparente e sem burocracia do primeiro contato à quadra.
          </p>
        </div>

        {/* Timeline dos 4 Passos */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((s, idx) => (
            <div
              key={s.n}
              className="reveal group relative flex flex-col justify-between rounded-3xl border border-[#090C16]/10 bg-white p-8 shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-[#b2791d]/60 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)]"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-bold text-[#b2791d]/40 transition-colors duration-500 group-hover:text-[#b2791d]">
                    {s.n}
                  </span>
                  <span className="eyebrow rounded-full border border-[#090C16]/10 bg-[#090C16]/5 px-2.5 py-1 text-[8px] text-[#40485d]">
                    {s.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-[#090C16] transition-colors group-hover:text-[#b2791d]">
                  {s.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#40485d] transition-colors group-hover:text-[#090C16]">
                  {s.text}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#090C16]/10">
                <span className="text-[11px] eyebrow text-[#b2791d] font-semibold">
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
            className="inline-flex items-center gap-2.5 rounded-full bg-[#090C16] px-8 py-4.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#b2791d] hover:text-black"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Falar no WhatsApp Agora</span>
          </a>
        </div>

      </div>
    </section>
  );
}
