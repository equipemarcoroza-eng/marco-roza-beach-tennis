import { Compass, ListChecks, LineChart } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Clareza",
    text: "Você sabe exatamente onde está, onde quer chegar e qual o caminho técnico para evoluir a cada treino.",
  },
  {
    icon: ListChecks,
    title: "Organização",
    text: "Planos estruturados, periodização das aulas e materiais que organizam o seu desenvolvimento.",
  },
  {
    icon: LineChart,
    title: "Acompanhamento",
    text: "Avaliação contínua, ajustes individuais e feedbacks honestos para acelerar a sua evolução.",
  },
];

export function ValueProp() {
  return (
    <section className="relative bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Nossa proposta
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary md:text-5xl">
            Três pilares que fazem a diferença
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-smooth hover:-translate-y-2 hover:shadow-elegant"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-primary transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                <v.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-primary">{v.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
