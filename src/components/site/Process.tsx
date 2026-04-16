const steps = [
  { n: "01", title: "Contato", text: "Você fala conosco pelo WhatsApp e conta seu objetivo." },
  { n: "02", title: "Diagnóstico", text: "Avaliamos seu nível, disponibilidade e expectativas." },
  { n: "03", title: "Plano", text: "Montamos um plano personalizado de treinos ou formação." },
  { n: "04", title: "Execução", text: "Começamos a jornada com acompanhamento constante." },
];

export function Process() {
  return (
    <section id="processo" className="relative bg-gradient-dark py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Como funciona
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            Sua jornada em 4 passos simples
          </h2>
          <p className="mt-4 text-primary-foreground/70">
            Um processo claro e direto, do primeiro contato até a sua evolução em quadra.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4 md:gap-4">
          {steps.map((s, i) => (
            <div key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur-sm transition-smooth hover:border-accent/50 hover:bg-primary-foreground/10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-bold text-accent">{s.n}</span>
                  {i < steps.length - 1 && (
                    <span className="hidden md:block h-px w-12 bg-primary-foreground/20" />
                  )}
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
