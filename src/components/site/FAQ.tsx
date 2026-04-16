import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ter experiência prévia para começar?",
    a: "Não. Atendemos do zero ao avançado. Para iniciantes, montamos um plano específico de adaptação à areia, fundamentos e ritmo de jogo.",
  },
  {
    q: "Como funciona a Capacitação para Futuros Professores?",
    a: "É uma formação completa que cobre técnica, metodologia, didática, gestão de aulas e fundamentos para você atuar profissionalmente como professor de Beach Tennis.",
  },
  {
    q: "As aulas são individuais ou em grupo?",
    a: "Oferecemos os dois formatos. Após o diagnóstico inicial, recomendamos o modelo que melhor atende seu objetivo, disponibilidade e estilo de aprendizado.",
  },
  {
    q: "Onde acontecem os treinos?",
    a: "Em Maringá - PR. O endereço completo está no rodapé. Para clínicas, camps e formações, eventualmente realizamos atividades em outras locações parceiras.",
  },
  {
    q: "Como faço para começar?",
    a: "Basta clicar em qualquer botão de WhatsApp da página. Conversamos sobre seu objetivo, esclarecemos dúvidas e montamos o plano ideal para você.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Perguntas frequentes
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary md:text-5xl">
            Dúvidas mais comuns
          </h2>
        </div>

        <div className="reveal mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-6 data-[state=open]:shadow-card-soft"
              >
                <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
