import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-equipe.jpg";
import { waLink } from "@/lib/contact";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#090c16] md:items-center"
    >
      {/* Background Image com Efeito Cinematográfico */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Treinamento de Beach Tennis com a Equipe Marco Roza em Maringá"
          fetchPriority="high"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-[65%_25%] md:object-[70%_30%] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Camadas de Gradientes e Vinheta Profunda */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090c16] via-[#090c16]/75 to-[#090c16]/30 md:bg-gradient-to-r md:from-[#090c16]/98 md:via-[#090c16]/75 md:to-transparent" />
        <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.85)]" />
      </div>

      {/* Conteúdo Central */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-32 pt-36 md:px-8 md:pb-40 md:pt-44 relative z-10">
        <div className="max-w-[820px]">
          {/* Eyebrow com status pulsante */}
          <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs eyebrow text-accent shadow-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span>Equipe Marco Roza · Maringá · PR</span>
          </div>

          {/* Headline com Máscara e Tipografia Editorial */}
          <h1 className="mt-6 font-display text-[42px] leading-[1.08] text-white sm:text-6xl lg:text-[76px] 2xl:text-[88px] tracking-tight">
            <span className="block overflow-hidden pb-[0.04em]">
              <span>Quando cada ponto</span>
            </span>
            <span className="block overflow-hidden pb-[0.04em]">
              <span>exige precisão, o método</span>
            </span>
            <span className="block overflow-hidden pb-[0.04em]">
              <span>
                precisa ser{" "}
                <em className="text-gold-gradient font-serif italic pr-2 font-normal">
                  de elite.
                </em>
              </span>
            </span>
          </h1>

          {/* Subtítulo Sofisticado */}
          <p className="reveal mt-8 max-w-[620px] text-base leading-relaxed text-white/75 md:text-lg">
            Da iniciação descompromissada à capacitação completa de treinadores:
            uma jornada esportiva estruturada com acompanhamento técnico contínuo
            e inteligência de dados na quadra de areia.
          </p>

          {/* CTAs Magnéticos */}
          <div className="reveal mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
            <a
              href={waLink("Olá, Marco! Gostaria de agendar uma aula experimental e conhecer os horários da equipe.")}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4.5 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-glow transition-all duration-500 hover:scale-[1.03] hover:bg-white"
            >
              <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              <span>Agendar Avaliação</span>
            </a>

            <a
              href="#servicos"
              className="eyebrow inline-flex items-center gap-2.5 py-3 text-[11px] text-white/80 tracking-[0.22em] transition-colors hover:text-accent group"
            >
              <span>Conhecer os programas</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 text-accent" />
            </a>
          </div>
        </div>
      </div>

      {/* Ticker de Autoridade no Rodapé do Hero */}
      <div className="absolute inset-x-0 bottom-0 z-20 hidden border-t border-white/10 bg-[#090c16]/80 backdrop-blur-md md:block">
        <div className="mx-auto grid max-w-7xl grid-cols-3 px-8">
          <div className="py-5 text-center">
            <p className="eyebrow text-[10px] text-accent/90">10+ Anos de Trajetória</p>
            <p className="mt-1 text-xs text-white/60">Autoridade e respeito no esporte</p>
          </div>
          <div className="border-l border-white/10 py-5 text-center">
            <p className="eyebrow text-[10px] text-accent/90">Gestão com BI & Dados</p>
            <p className="mt-1 text-xs text-white/60">Evolução técnica mensurável</p>
          </div>
          <div className="border-l border-white/10 py-5 text-center">
            <p className="eyebrow text-[10px] text-accent/90">Iniciação a Professores</p>
            <p className="mt-1 text-xs text-white/60">Formação completa em todas as fases</p>
          </div>
        </div>
      </div>

      {/* Indicador de Rolagem Lateral */}
      <div
        className="absolute bottom-24 right-8 z-20 hidden flex-col items-center gap-3 md:flex"
        aria-hidden="true"
      >
        <div className="relative h-14 w-px overflow-hidden bg-white/20">
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent animate-scroll-dot" />
        </div>
        <span className="eyebrow text-[8px] text-white/50">Role</span>
      </div>
    </section>
  );
}
