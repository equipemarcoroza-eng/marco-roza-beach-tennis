import {
  GraduationCap,
  BookOpen,
  Sparkles,
  Gavel,
  Trophy,
  Activity,
  Tent,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { waLink } from "@/lib/contact";

const programs = [
  {
    num: "01",
    icon: GraduationCap,
    title: "Aulas Regulares (Iniciação ao Avançado)",
    badge: "Alunos & Atletas",
    text: "Treinamentos individuais ou em turmas com nivelamento técnico criterioso. Foco em biomecânica dos golpes, mobilidade na areia e inteligência tática de jogo.",
    msg: "Olá, Marco! Gostaria de informações sobre aulas regulares de Beach Tennis.",
  },
  {
    num: "02",
    icon: BookOpen,
    title: "Capacitação para Futuros Professores",
    badge: "Formação Profissional",
    text: "Formação integral para quem deseja transformar a paixão pelo esporte em carreira. Metodologia pedagógica, didática de quadra e planejamento de aulas.",
    msg: "Olá, Marco! Tenho interesse na Capacitação para Futuros Professores de Beach Tennis.",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Especialização para Treinadores Ativos",
    badge: "Aperfeiçoamento Técnico",
    text: "Mentoria e reciclagem para professores que buscam expandir repertório de treinos, correção de vícios motores e leitura avançada de jogo dos seus alunos.",
    msg: "Olá, Marco! Gostaria de detalhes sobre a Especialização para Treinadores.",
  },
  {
    num: "04",
    icon: Gavel,
    title: "Arbitragem Oficial & Mesa",
    badge: "Regulamento & Gestão",
    text: "Capacitação detalhada em regras oficiais da CBT/ITF, conduta disciplinar, resolução de impasses em quadra e gerenciamento de súmulas esportivas.",
    msg: "Olá, Marco! Gostaria de informações sobre o curso de Arbitragem Oficial.",
  },
  {
    num: "05",
    icon: Trophy,
    title: "Organização e Direção de Torneios",
    badge: "Eventos & Gestão",
    text: "Assessoria completa para clubes e arenas: do chaveamento e cronograma de quadras à entrega de uma experiência competitiva impecável para os atletas.",
    msg: "Olá, Marco! Preciso de assessoria para Organização de Torneios de Beach Tennis.",
  },
  {
    num: "06",
    icon: Activity,
    title: "Clínicas & Workshops Intensivos",
    badge: "Imersão de Fim de Semana",
    text: "Módulos imersivos com foco em fundamentos específicos: saque e devolução, transição rede-fundo, smashs potentes e estratégias de duplas.",
    msg: "Olá, Marco! Gostaria de saber quando será a próxima Clínica ou Workshop.",
  },
  {
    num: "07",
    icon: Tent,
    title: "Camps Infantis e Juvenis",
    badge: "Nova Geração",
    text: "Desenvolvimento motor, disciplina e diversão para crianças e jovens em ambiente seguro e acolhedor, estimulando hábitos saudáveis desde cedo.",
    msg: "Olá, Marco! Gostaria de informações sobre os Camps Infantis e Juvenis.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-[#0c101d] py-24 text-white md:py-36 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow text-accent font-semibold">
              Áreas de Atuação & Programas
            </span>
            <h2 className="mt-4 font-display text-[38px] leading-[1.1] sm:text-5xl lg:text-[62px] tracking-tight">
              Excelência esportiva em{" "}
              <em className="text-gold-gradient font-serif italic pr-2 font-normal">
                todas
              </em>{" "}
              as etapas.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60 md:text-base">
            Da primeira experiência na areia à formação de treinadores e direção de torneios: 
            uma grade completa pensada para cada objetivo.
          </p>
        </div>

        {/* Grade de Cards Showcase */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, idx) => (
            <div
              key={p.num}
              className="reveal group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121727]/70 p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent/60 hover:bg-[#161d33] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              {/* Efeito de iluminação suave de fundo */}
              <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(229,167,59,0.12),transparent_70%)] pointer-events-none" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-bold text-accent/40 transition-colors duration-500 group-hover:text-accent">
                    {p.num}
                  </span>
                  <span className="eyebrow rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] text-white/70">
                    {p.badge}
                  </span>
                </div>

                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent transition-transform duration-500 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent/15">
                  <p.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-accent">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/65 transition-colors group-hover:text-white/85">
                  {p.text}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={waLink(p.msg)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent transition-all duration-300 group-hover:translate-x-1"
                >
                  <span>Consultar Turmas</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}

          {/* Card Especial de Fechamento */}
          <div className="reveal relative flex flex-col justify-between rounded-3xl border border-accent/40 bg-gradient-to-br from-[#1a2340] to-[#0a0d18] p-8 shadow-2xl">
            <div>
              <span className="eyebrow text-[10px] text-accent">
                Plano Personalizado
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-white">
                Não tem certeza de qual formato escolher?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Converse diretamente com o Marco. Realizamos uma breve avaliação técnica do seu momento para desenhar o plano ideal.
              </p>
            </div>

            <div className="mt-8">
              <a
                href={waLink("Olá, Marco! Gostaria de entender qual o melhor formato de treino para o meu nível.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-full bg-accent px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black shadow-glow transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
