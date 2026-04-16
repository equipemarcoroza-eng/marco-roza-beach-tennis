import {
  GraduationCap,
  BookOpen,
  Sparkles,
  Gavel,
  Trophy,
  Activity,
  Tent,
} from "lucide-react";

const services = [
  { icon: GraduationCap, title: "Aulas", text: "Para iniciantes, intermediários e avançados, individuais ou em grupo." },
  { icon: BookOpen, title: "Capacitação para Futuros Professores", text: "Formação completa para quem quer ensinar Beach Tennis com método." },
  { icon: Sparkles, title: "Especialização para Professores", text: "Atualização técnica, tática e didática para professores ativos." },
  { icon: Gavel, title: "Arbitragem", text: "Formação em regras, mesa e arbitragem oficial de partidas." },
  { icon: Trophy, title: "Organização de Torneios", text: "Planejamento, chaveamento e execução de torneios profissionais." },
  { icon: Activity, title: "Clínicas", text: "Eventos intensivos com foco em fundamentos, tática ou jogo." },
  { icon: Tent, title: "Camps Infantis e Juvenis", text: "Imersões esportivas para crianças e adolescentes em ambiente seguro." },
];

export function Services() {
  return (
    <section id="servicos" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Áreas de atuação
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary md:text-5xl">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="mt-4 text-muted-foreground">
            Da iniciação à formação profissional, organizamos cada etapa da sua jornada
            no Beach Tennis.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3 shadow-elegant">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative bg-card p-8 transition-smooth hover:bg-secondary/50 hover:z-10"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--accent)_15%,transparent),transparent_70%)]" />
              
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background text-primary transition-all duration-500 group-hover:scale-110 group-hover:border-accent/50 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-glow">
                <s.icon className="h-6 w-6 transition-transform duration-500 group-hover:rotate-[15deg]" strokeWidth={1.5} />
              </div>
              
              <h3 className="relative mt-8 font-display text-xl font-bold tracking-tight text-primary transition-smooth group-hover:translate-x-1">
                {s.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground transition-smooth group-hover:text-foreground/80">
                {s.text}
              </p>
              
              <div className="relative mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent opacity-0 transition-all duration-500 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                Saiba mais <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
              </div>
            </div>
          ))}
          <div className="reveal relative flex flex-col justify-center bg-gradient-dark p-10 text-primary-foreground overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent opacity-20 blur-[100px]" />
            <h3 className="relative font-display text-3xl font-bold leading-tight">Pronto para começar?</h3>
            <p className="relative mt-4 text-base text-primary-foreground/80">
              Conte o seu objetivo e desenhamos o caminho ideal para você.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-card-soft transition-smooth hover:scale-105 hover:bg-white hover:text-primary"
              >
                Falar com a equipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
