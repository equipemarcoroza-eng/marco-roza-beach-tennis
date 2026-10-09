import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Treinar com o Marco mudou totalmente a minha percepção de Beach Tennis. Eu jogava há mais de um ano sem sair do lugar. Em 3 meses com a metodologia dele corrigi meu smash e hoje jogo torneios com muito mais segurança.",
    author: "Carolina Mendonça",
    role: "Aluna de Turma Intermediária · Maringá",
    stars: 5,
  },
  {
    quote:
      "A Capacitação de Professores da Equipe Marco Roza me deu a base pedagógica e a segurança que nenhuma outra formação ofereceu. Não é apenas saber bater na bola, é saber ensinar e estruturar cada minuto de quadra.",
    author: "Lucas Silveira",
    role: "Professor Formado pela Equipe",
    stars: 5,
  },
  {
    quote:
      "A organização das turmas e o acompanhamento da equipe são impecáveis. Se você precisa repor ou ajustar horário, o sistema resolve rápido. Ambiente saudável, de alto nível e com foco real no aluno.",
    author: "Rodrigo Fontana",
    role: "Aluno Avançado & Competidor Amador",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-20 bg-[#0c101d] py-24 text-white md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Cabeçalho */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow text-accent font-semibold">
            Resultados & Confiança
          </span>
          <h2 className="mt-4 font-display text-[38px] leading-[1.1] sm:text-5xl lg:text-[58px]">
            A voz de quem treina na{" "}
            <em className="text-gold-gradient font-serif italic pr-2 font-normal">
              prática.
            </em>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
            Histórias reais de alunos que destravaram seu potencial e profissionais formados pela nossa metodologia.
          </p>
        </div>

        {/* Grade de Depoimentos em Estilo Editorial */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={t.author}
              className="reveal group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121727]/80 p-8 backdrop-blur-md transition-all duration-500 hover:border-accent/50 hover:bg-[#161d33] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div>
                {/* Estrelas & Ícone Aspas */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-accent">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent" />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-accent/30 group-hover:text-accent transition-colors duration-500" />
                </div>

                {/* Citação */}
                <p className="mt-6 text-base leading-relaxed text-white/80 font-sans italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Autor */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="font-display text-lg font-bold text-white transition-colors group-hover:text-accent">
                  {t.author}
                </p>
                <p className="eyebrow mt-1 text-[9px] text-white/50">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
