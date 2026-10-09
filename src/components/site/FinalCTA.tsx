import { MessageCircle, ArrowRight } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";
import { waLink } from "@/lib/contact";

export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-28 md:py-40">
      {/* Background Image com overlay escuro nobre */}
      <img
        src={ctaBg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-[#090c16]/90 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090c16] via-transparent to-[#090c16]" />

      <div className="reveal relative mx-auto max-w-4xl px-5 text-center text-white md:px-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs eyebrow text-accent shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Atendimento Direto & Personalizado</span>
        </div>

        {/* Título Monumental */}
        <h2 className="mt-6 font-display text-[40px] leading-[1.08] sm:text-6xl lg:text-[72px] tracking-tight">
          Sua evolução em quadra começa com{" "}
          <em className="text-gold-gradient font-serif italic pr-2 font-normal block sm:inline">
            uma mensagem.
          </em>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          Fale diretamente com o Marco Roza no WhatsApp. Em poucos minutos alinhamos seus objetivos,
          avaliamos sua disponibilidade e indicamos o melhor caminho para você evoluir com método e consistência.
        </p>

        {/* Botão Magnético de Alta Conversão */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href={waLink("Olá, Marco! Quero iniciar meus treinos com a Equipe Marco Roza e saber mais sobre vagas.")}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-accent px-10 py-5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-black shadow-glow transition-all duration-500 hover:scale-105 hover:bg-white"
          >
            <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Falar no WhatsApp Agora</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <p className="mt-8 text-xs eyebrow text-white/50 tracking-[0.22em]">
          Maringá - PR · Atendimento Rápido · Vagas Abertas
        </p>

      </div>
    </section>
  );
}

