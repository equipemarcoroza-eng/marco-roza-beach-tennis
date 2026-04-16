import { AlertCircle } from "lucide-react";

const pains = [
  {
    title: "Quer aprender a jogar Beach Tennis",
    text: "Mas não sabe por onde começar nem encontra um método estruturado para evoluir com segurança.",
  },
  {
    title: "Precisa de capacitação para se tornar professor",
    text: "Falta uma formação completa que una técnica, metodologia e gestão de aulas no dia a dia.",
  },
  {
    title: "É professor e busca especialização",
    text: "Sente que estagnou e quer atualizar repertório técnico, tático e didático para destacar-se.",
  },
  {
    title: "Quer organizar ou arbitrar torneios",
    text: "Não tem clareza sobre regras, fluxo de competição ou estrutura para entregar eventos profissionais.",
  },
  {
    title: "Pais que buscam esporte para os filhos",
    text: "Querem um ambiente seguro, divertido e com desenvolvimento técnico real para crianças e jovens.",
  },
  {
    title: "Sente falta de acompanhamento real",
    text: "Aulas avulsas sem evolução medida, sem plano e sem alguém olhando o seu jogo de perto.",
  },
];

export function Problems() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            O Desafio
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary md:text-5xl">
            Sente que falta algo na sua jornada?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Identificamos os maiores obstáculos de quem vive o Beach Tennis e estruturamos 
            metodologias reais para superá-los.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <div
              key={p.title}
              className={`reveal group relative rounded-[2rem] border border-border bg-card p-8 transition-all duration-500 
                hover:border-accent/30 hover:shadow-elegant hover:-translate-y-2
                ${i % 2 === 0 ? "lg:mt-8" : "lg:mb-8"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/5 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:rotate-[10deg] group-hover:shadow-glow-accent">
                <AlertCircle className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-primary">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">{p.text}</p>
              
              {/* Decorative indicator */}
              <div className="absolute top-6 right-6 h-1 w-8 rounded-full bg-border transition-all duration-500 group-hover:w-12 group-hover:bg-accent/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
