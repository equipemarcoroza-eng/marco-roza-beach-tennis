import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

const faqs = [
  {
    q: "Nunca pratiquei Beach Tennis nem outro esporte com raquete. Posso começar?",
    a: "Com certeza. Nossas turmas de iniciação são pensadas exatamente para quem nunca pegou em uma raquete. Ensinamos a adaptação correta ao deslocamento na areia, empunhadura, ritmo da bola e os fundamentos essenciais sem risco de lesão.",
  },
  {
    q: "Como funciona a Capacitação para Futuros Professores?",
    a: "É uma formação intensiva e completa com o Marco Roza, abordando biomecânica, didática pedagógica para turmas infantis e adultas, periodização técnica de treinos, correção de erros comuns e noções práticas de gestão esportiva.",
  },
  {
    q: "As aulas são particulares ou em turmas?",
    a: "Trabalhamos com os dois formatos. As aulas em turma contam com nivelamento rigoroso para que todos os participantes joguem com fluidez. As aulas particulares e em duplas são focadas em correções técnicas ultraespecíficas e preparação para competições.",
  },
  {
    q: "Como funciona se eu precisar faltar em um dia de treino ou chover?",
    a: "Contamos com controle inteligente de chamadas e gestão de reposições transparente. Faltas justificadas e intempéries climáticas contam com grade e horários organizados para reposição sem qualquer complicação.",
  },
  {
    q: "Onde ocorrem os treinos e eventos da equipe?",
    a: "Nossa base principal fica em Maringá - PR (Av. Nóbrega 62). Também realizamos clínicas, workshops e camps em arenas parceiras em outras cidades e estados sob agendamento prévio.",
  },
  {
    q: "Como faço para agendar minha primeira aula ou tirar dúvidas?",
    a: "Basta clicar em qualquer botão de WhatsApp desta página. Conversaremos diretamente sobre seus horários, seu momento no esporte e indicaremos a turma perfeita para você.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-[#090c16] py-24 text-white md:py-36">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        
        {/* Cabeçalho */}
        <div className="reveal text-center">
          <span className="eyebrow text-accent font-semibold">
            Esclarecimento Direto
          </span>
          <h2 className="mt-4 font-display text-[38px] leading-[1.1] sm:text-5xl lg:text-[58px]">
            Perguntas{" "}
            <em className="text-gold-gradient font-serif italic pr-2 font-normal">
              frequentes.
            </em>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
            Tudo o que você precisa saber antes de entrar em quadra com a equipe.
          </p>
        </div>

        {/* Acordeão */}
        <div className="reveal mt-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-white/10 bg-[#121727]/70 px-6 backdrop-blur-sm transition-all duration-300 data-[state=open]:border-accent/50 data-[state=open]:bg-[#161d33] data-[state=open]:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <AccordionTrigger className="py-6 text-left font-display text-lg sm:text-xl font-bold text-white hover:text-accent hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-white/70 sm:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Dúvida adicional */}
        <div className="reveal mt-12 text-center">
          <p className="text-sm text-white/60">
            Ainda tem alguma dúvida específica?
          </p>
          <a
            href={waLink("Olá, Marco! Tenho uma dúvida sobre os treinos que não encontrei no site.")}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent transition-colors hover:text-white"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Falar diretamente conosco no WhatsApp →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
