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
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Pontos de dor
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary md:text-5xl">
            Você se identifica com alguma dessas situações?
          </h2>
          <p className="mt-4 text-muted-foreground">
            A maioria dos jogadores e profissionais enfrenta os mesmos desafios. Nós
            estruturamos uma jornada para resolver cada um deles.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <div
              key={p.title}
              className="reveal group rounded-2xl border border-border bg-card p-6 transition-smooth hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-soft"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent transition-smooth group-hover:bg-accent group-hover:text-accent-foreground">
                <AlertCircle className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
