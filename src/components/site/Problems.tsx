import { AlertCircle, CheckCircle2 } from "lucide-react";

const challenges = [
  {
    title: "Deseja começar mas tem receio de errar",
    text: "Sem um método seguro de iniciação, muitos desanimam nas primeiras tentativas na areia com cansaço excessivo e golpes incorretos.",
  },
  {
    title: "Joga há meses mas sente que estagnou",
    text: "Frequenta jogos livres toda semana, mas não vê melhora no saque, na leitura da bola ou na agilidade junto à rede.",
  },
  {
    title: "Busca se tornar professor com credibilidade",
    text: "Jogar bem não é ensinar bem. Falta capacitação técnica, didática e estruturação pedagógica para conduzir turmas lucrativas.",
  },
  {
    title: "Quer organizar ou arbitrar competições",
    text: "Sem conhecimento de chaveamentos, regras oficiais e gestão de tempo, o evento perde prestígio e atrai conflitos.",
  },
  {
    title: "Pais procurando esporte para os filhos",
    text: "Buscam um ambiente seguro, com coordenação motora, foco e disciplina saudável longe das telas.",
  },
  {
    title: "Cansaço de aulas sem acompanhamento",
    text: "Turmas cheias e sem atenção individual, onde o professor apenas joga bolas sem corrigir biomecânica nem medir avanços.",
  },
];

export function Problems() {
  return (
    <section className="relative overflow-hidden bg-[#090c16] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow text-accent font-semibold">
            Diagnóstico Inicial
          </span>
          <h2 className="mt-4 font-display text-[36px] leading-[1.12] text-white sm:text-5xl lg:text-[56px]">
            Sente que falta método na sua{" "}
            <em className="text-gold-gradient font-serif italic pr-2 font-normal">
              evolução?
            </em>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
            Mapeamos os maiores gargalos de atletas e entusiastas na areia para construir uma metodologia que realmente gera resultados.
          </p>
        </div>

        {/* Grade de Desafios */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c, idx) => (
            <div
              key={c.title}
              className="reveal group relative rounded-3xl border border-white/10 bg-[#101526]/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent/50 hover:bg-[#151c33] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/15 group-hover:border-accent/40">
                <AlertCircle className="h-5 w-5" strokeWidth={1.5} />
              </div>

              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white transition-colors group-hover:text-accent">
                {c.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/65 transition-colors group-hover:text-white/85">
                {c.text}
              </p>

              {/* Linha decorativa no hover */}
              <div className="mt-6 h-0.5 w-8 rounded-full bg-white/10 transition-all duration-500 group-hover:w-16 group-hover:bg-accent" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
