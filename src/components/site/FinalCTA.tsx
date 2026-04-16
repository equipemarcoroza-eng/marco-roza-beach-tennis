import { MessageCircle } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";
import { waLink } from "@/lib/contact";

export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-24 md:py-32">
      <img
        src={ctaBg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-dark opacity-95" />

      <div className="reveal relative mx-auto max-w-3xl px-5 text-center text-primary-foreground md:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Vamos começar
        </span>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
          Sua evolução no Beach Tennis começa com{" "}
          <span className="italic text-accent">uma mensagem</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-primary-foreground/75 md:text-lg">
          Fale com a equipe pelo WhatsApp. Em poucos minutos entendemos seu objetivo e
          montamos o melhor caminho para você.
        </p>

        <a
          href={waLink("Olá! Quero começar minha jornada com a Equipe Marco Roza.")}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-whatsapp px-9 py-5 text-base font-bold uppercase tracking-wider text-whatsapp-foreground shadow-glow transition-smooth hover:scale-105 hover:bg-whatsapp/90 md:text-lg"
        >
          <MessageCircle className="h-6 w-6" />
          Falar no WhatsApp agora
        </a>

        <p className="mt-6 text-xs uppercase tracking-widest text-primary-foreground/50">
          Resposta rápida · Atendimento personalizado
        </p>
      </div>
    </section>
  );
}
