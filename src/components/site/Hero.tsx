import { MessageCircle, Trophy, Users, Target, Award } from "lucide-react";
import heroImage from "@/assets/hero-coach.jpg";
import { waLink } from "@/lib/contact";

const bullets = [
  { icon: Trophy, text: "Metodologia profissional comprovada em quadra" },
  { icon: Users, text: "Aulas para iniciantes e atletas em evolução" },
  { icon: Target, text: "Capacitação completa para futuros professores" },
  { icon: Award, text: "Formação em arbitragem e organização de torneios" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div>
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent" style={{ animationDelay: "100ms" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Beach Tennis em Maringá
          </span>

          <h1 className="animate-fade-up mt-6 font-display text-4xl font-bold leading-[1.05] text-primary sm:text-5xl md:text-6xl" style={{ animationDelay: "200ms" }}>
            Treinamento e Aperfeiçoamento com a{" "}
            <span className="italic text-accent">Equipe Marco Roza</span>
          </h1>

          <p className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg" style={{ animationDelay: "300ms" }}>
            Da primeira raquetada à formação como professor: uma jornada estruturada,
            personalizada e conduzida com a autoridade de quem vive o Beach Tennis.
          </p>

          <ul className="animate-fade-up mt-8 grid gap-3 sm:grid-cols-2" style={{ animationDelay: "400ms" }}>
            {bullets.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-smooth hover:bg-primary/20">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium text-foreground/85 leading-snug">{text}</span>
              </li>
            ))}
          </ul>

          <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "500ms" }}>
            <a
              href={waLink("Olá Marco! Quero conhecer os treinamentos da equipe.")}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-whatsapp px-7 py-4 text-sm font-semibold uppercase tracking-wider text-whatsapp-foreground shadow-elegant transition-smooth hover:scale-105 hover:bg-whatsapp/90 sm:text-base"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="text-sm font-semibold text-primary underline-offset-4 hover:underline transition-smooth hover:translate-x-1"
            >
              Ver áreas de atuação →
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="absolute -inset-6 rounded-3xl bg-gradient-primary opacity-20 blur-3xl animate-pulse" />
          <div className="relative overflow-hidden rounded-3xl border border-border/50 shadow-elegant transition-smooth hover:shadow-glow">
            <img
              src={heroImage}
              alt="Professor de beach tennis em ação"
              width={1024}
              height={1280}
              className="h-full w-full object-cover transition-smooth hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background/95 p-4 shadow-card-soft backdrop-blur transition-smooth hover:scale-110 md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg font-bold leading-none text-primary">+10 anos</p>
                <p className="text-xs text-muted-foreground">de experiência em quadra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
