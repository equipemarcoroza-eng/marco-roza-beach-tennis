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

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative bg-card p-8 transition-smooth hover:bg-secondary"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-primary transition-smooth group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                <s.icon className="h-5.5 w-5.5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent opacity-0 transition-smooth group-hover:opacity-100">
                Saiba mais →
              </span>
            </div>
          ))}
          <div className="hidden lg:block bg-gradient-dark p-8 text-primary-foreground">
            <h3 className="font-display text-2xl font-bold">Pronto para começar?</h3>
            <p className="mt-2 text-sm text-primary-foreground/75">
              Conte o seu objetivo e desenhamos o caminho ideal para você.
            </p>
            <a
              href="#cta"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80"
            >
              Falar com a equipe →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
