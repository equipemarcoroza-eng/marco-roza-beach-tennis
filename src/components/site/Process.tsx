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

        <div className="mt-16 grid gap-8 md:grid-cols-4 md:gap-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 md:block" />
          
          {steps.map((s, i) => (
            <div key={s.n} className="reveal relative group" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="relative z-10 rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-accent/50 hover:bg-primary-foreground/10 hover:shadow-glow-accent hover:-translate-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display text-6xl font-black text-accent/20 transition-all duration-500 group-hover:text-accent group-hover:scale-110">{s.n}</span>
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  </div>
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60 group-hover:text-primary-foreground/90 transition-colors">
                  {s.text}
                </p>
                
                {/* Decorative glow corner */}
                <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-full bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
