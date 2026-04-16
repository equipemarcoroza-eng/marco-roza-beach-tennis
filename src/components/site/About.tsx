import aboutImg from "@/assets/about-marco.jpg";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="reveal relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-15 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
            <img
              src={aboutImg}
              alt="Marco Roza, professor de Beach Tennis"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-accent px-6 py-4 text-accent-foreground shadow-elegant">
            <p className="font-display text-2xl font-bold leading-none">Marco Roza</p>
            <p className="mt-1 text-xs uppercase tracking-wider opacity-90">Head Coach</p>
          </div>
        </div>

        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Sobre
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary md:text-5xl">
            Quem está por trás da equipe
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Marco Roza é referência em Beach Tennis em Maringá, com mais de uma década
              dedicada ao esporte como atleta, professor e formador de profissionais.
            </p>
            <p>
              À frente da <strong className="text-primary">Equipe Marco Roza</strong>, conduz
              alunos do primeiro contato com a raquete até a profissionalização — sempre com
              metodologia clara, organização e olhar individualizado.
            </p>
            <p>
              Sua atuação une o rigor técnico de quem compete em alto nível com a didática
              acessível de quem entende cada etapa da evolução do aluno.
            </p>
          </div>

          <a
            href={waLink("Olá Marco! Quero conhecer melhor o seu trabalho.")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground shadow-card-soft transition-smooth hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Conversar com o Marco
          </a>
        </div>
      </div>
    </section>
  );
}
