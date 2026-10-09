import { Star, Quote, CheckCircle2 } from "lucide-react";

interface ReviewItem {
  author: string;
  role: string;
  quote: string;
  badge?: string;
  initials: string;
}

const realReviews: ReviewItem[] = [
  {
    author: "Simone Tomita",
    role: "Local Guide · Aluna da Equipe",
    badge: "Evolução & Estratégia",
    initials: "ST",
    quote:
      "Consegui os melhores resultados desde que comecei as aulas com o Marco! Adaptação de jogo ao meu biótipo, força e estratégia! Excelente professor… as aulas voam!!! Obrigada Marco!",
  },
  {
    author: "Kamilla Tamura",
    role: "Aluna da Equipe",
    badge: "Didática de Alto Padrão",
    initials: "KT",
    quote:
      "Excelente professor! O Marco tem uma didática muito boa, além de ser uma pessoa maravilhosa! Recomendo muito! 👏👏👏",
  },
  {
    author: "Juliane Essi",
    role: "Mãe de aluna (10 anos)",
    badge: "Turma Kids & Juvenil",
    initials: "JE",
    quote:
      "Minha filha tem 10 anos e faz aula 1x na semana, tem amado e evoluído muito! Prof Marco extremamente amado e profissional com as crianças! Super recomendo!",
  },
  {
    author: "Gabriela Hasegawa",
    role: "Mãe de aluna",
    badge: "Aulas & Socialização",
    initials: "GH",
    quote:
      "Minha filha ama as aulas e ama jogar com as amigas! Super indico o professor Marcos!",
  },
  {
    author: "Guilherme Pedro",
    role: "Pai de aluno",
    badge: "Atenção & Cuidado",
    initials: "GP",
    quote:
      "Ótimo profissional, atencioso e dedicado com as crianças 👏👏👏",
  },
  {
    author: "Tamara Trento",
    role: "Mãe de aluna",
    badge: "Estímulo ao Esporte",
    initials: "TT",
    quote:
      "Excelente ! Valentina teve um dia de muita animação, amizades e estímulo ao esporte .",
  },
  {
    author: "Marta Fay Neves",
    role: "Mãe de aluna",
    badge: "Iniciação Infantil",
    initials: "MN",
    quote:
      "Muito bom mesmo ! Minha filha amou !!! Agora quer fazer aula !!! Ele é ótimo 👍 muito bom com crianças",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-20 bg-[#F5F3EC] py-24 text-[#090C16] md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Cabeçalho Editorial com Selo de Avaliações Google */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b2791d]/30 bg-[#b2791d]/10 px-4 py-1.5 text-xs eyebrow text-[#b2791d] shadow-sm font-semibold">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#b2791d]" />
            <span>Avaliações Verificadas · Google Reviews 5.0 ★</span>
          </div>

          <h2 className="mt-5 font-display text-[38px] leading-[1.1] text-[#090C16] sm:text-5xl lg:text-[60px] tracking-tight">
            A experiência real de quem{" "}
            <em className="font-serif italic text-[#b2791d] pr-2 font-normal">
              vive a quadra.
            </em>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#40485d] md:text-base">
            O que nossos alunos adultos e pais de alunos kids dizem sobre a metodologia, didática e atenção do Marco Roza.
          </p>
        </div>

        {/* Grade de Depoimentos Autênticos */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {realReviews.map((r, idx) => (
            <div
              key={r.author}
              className={`reveal group relative flex flex-col justify-between rounded-3xl border border-[#090C16]/10 bg-white p-8 shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-[#b2791d]/60 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)] ${
                idx === 0 ? "md:col-span-2 lg:col-span-1 border-[#b2791d]/30" : ""
              }`}
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              <div>
                {/* Cabeçalho do Card: Estrelas + Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#f59e0b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  {r.badge && (
                    <span className="eyebrow rounded-full border border-[#b2791d]/20 bg-[#b2791d]/10 px-2.5 py-1 text-[8px] text-[#b2791d] font-semibold">
                      {r.badge}
                    </span>
                  )}
                </div>

                {/* Aspas decorativas e Citação */}
                <p className="mt-6 text-sm leading-relaxed text-[#2c3345] sm:text-base font-sans italic">
                  "{r.quote}"
                </p>
              </div>

              {/* Autor com Avatar estilizado */}
              <div className="mt-8 pt-6 border-t border-[#090C16]/10 flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b2791d]/30 bg-[#b2791d]/15 font-display text-sm font-bold text-[#b2791d] shadow-sm">
                  {r.initials}
                </div>
                <div>
                  <p className="font-display text-base font-bold text-[#090C16] transition-colors group-hover:text-[#b2791d]">
                    {r.author}
                  </p>
                  <p className="eyebrow text-[9px] text-[#6b7280]">
                    {r.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicador de Satisfação */}
        <div className="reveal mt-16 rounded-3xl border border-[#090C16]/10 bg-white p-8 text-center max-w-3xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl font-bold text-[#b2791d]">5.0</span>
              <div className="flex flex-col items-start">
                <div className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <span className="text-[10px] eyebrow text-[#6b7280]">Nota Máxima no Google</span>
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-[#090C16]/10" />
            <p className="text-xs text-[#40485d] max-w-md text-center sm:text-left">
              100% de avaliações 5 estrelas comprovando o carinho, a segurança com as crianças e a evolução técnica de cada aluno.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
