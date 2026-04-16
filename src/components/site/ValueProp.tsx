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
    <section className="relative overflow-hidden bg-secondary py-24 md:py-32">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(31,42,115,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(230,57,70,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Inovação & Valor
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary md:text-5xl">
            Três pilares que definem nossa excelência
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="reveal group relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-10 transition-all duration-500 hover:shadow-elegant hover:-translate-y-3"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-primary transition-transform duration-700 group-hover:scale-x-100" />
              
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-[15deg] group-hover:shadow-glow">
                <v.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              
              <h3 className="mt-8 font-display text-2xl font-black text-primary tracking-tight">{v.title}</h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">{v.text}</p>
              
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-primary/5 rounded-tl-[3rem] transition-all duration-500 group-hover:bg-primary/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
