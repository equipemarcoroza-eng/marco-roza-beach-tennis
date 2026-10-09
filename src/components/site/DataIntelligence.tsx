import { BarChart3, LineChart, ShieldCheck, Activity, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/contact";

export function DataIntelligence() {
  return (
    <section
      id="inteligencia-dados"
      className="scroll-mt-20 relative overflow-hidden bg-[#070912] py-24 text-white md:py-36 lg:py-44"
    >
      {/* Luzes de fundo atmosféricas */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[250px] bg-primary/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 md:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs eyebrow text-accent">
            <Activity className="h-3.5 w-3.5 text-accent animate-pulse" />
            <span>Ecossistema Exclusivo · Racket Pro Dash</span>
          </div>

          <h2 className="mt-6 font-display text-[38px] leading-[1.08] sm:text-5xl lg:text-[62px] tracking-tight">
            Beach Tennis guiado por ciência e{" "}
            <em className="text-gold-gradient font-serif italic pr-2 font-normal">
              dados reais.
            </em>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            Enquanto a maioria das arenas opera no improviso, a Equipe Marco Roza conta com
            tecnologia proprietária de gestão e <strong>Business Intelligence (BI)</strong> para acompanhar
            a evolução de cada aluno do primeiro golpe à alta performance.
          </p>
        </div>

        {/* Grid com Showcase Visual de BI & Dados */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Mockup Interativo em Estilo Glassmorphism (7 colunas) */}
          <div className="reveal lg:col-span-7">
            <div className="relative rounded-[2.5rem] border border-white/15 bg-[#0f1424]/90 p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              
              {/* Barra superior de janela de sistema */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-[11px] font-mono text-white/40">racket-pro-dash • bi & analytics</span>
                </div>
                <div className="eyebrow rounded-full bg-accent/10 px-2.5 py-1 text-[9px] text-accent font-semibold border border-accent/20">
                  Tempo Real
                </div>
              </div>

              {/* Cards Internos de BI simulando o sistema real */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                
                {/* Widget 1: Termômetro de Frequência & Retenção */}
                <div className="rounded-2xl border border-white/10 bg-[#151c31]/90 p-5">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-[9px] text-white/60">Taxa de Assiduidade</span>
                    <span className="text-xs font-bold text-emerald-400">+14% vs meta</span>
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold text-white">96.4%</span>
                    <span className="text-xs text-white/50">alunos em ritmo constante</span>
                  </div>
                  {/* Barra fluida de progresso */}
                  <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-accent to-emerald-400" />
                  </div>
                  <p className="mt-2 text-[11px] text-white/50">
                    Nenhum aluno fica esquecido ou sem acompanhamento.
                  </p>
                </div>

                {/* Widget 2: Avaliação de Fundamentos & Testes */}
                <div className="rounded-2xl border border-white/10 bg-[#151c31]/90 p-5">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-[9px] text-white/60">Diagnóstico Técnico</span>
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[9px] text-accent">
                      Nível 4 (Avançado)
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold text-white">9.2</span>
                    <span className="text-xs text-white/50">/ 10.0 score de golpes</span>
                  </div>
                  <div className="mt-4 space-y-1.5 text-[11px]">
                    <div className="flex justify-between text-white/70">
                      <span>Saque & Slice</span>
                      <span className="text-accent font-semibold">95%</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Transição & Voleio</span>
                      <span className="text-accent font-semibold">90%</span>
                    </div>
                  </div>
                </div>

                {/* Widget 3: Grade e Densidade de Turmas */}
                <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-[#151c31]/90 p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <LineChart className="h-4 w-4 text-accent" />
                      <span className="font-display text-sm font-bold text-white">
                        Série Histórica & Multiplicador de Capacidade
                      </span>
                    </div>
                    <span className="eyebrow text-[9px] text-accent">
                      Metodologia Marco Roza
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-white/5 p-3">
                      <p className="eyebrow text-[8px] text-white/50">Plano de Aula</p>
                      <p className="mt-1 font-display text-lg font-bold text-white">100%</p>
                      <p className="text-[10px] text-emerald-400">Padronizado</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3">
                      <p className="eyebrow text-[8px] text-white/50">Reposições</p>
                      <p className="mt-1 font-display text-lg font-bold text-white">1 Clique</p>
                      <p className="text-[10px] text-accent">Sem atrito</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3">
                      <p className="eyebrow text-[8px] text-white/50">Professores</p>
                      <p className="mt-1 font-display text-lg font-bold text-white">Alinhados</p>
                      <p className="text-[10px] text-white/60">Mesmo método</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Coluna Explicativa de Benefícios (5 colunas) */}
          <div className="reveal lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="eyebrow text-accent font-semibold">
                O Que Isso Significa Para Você
              </span>
              <h3 className="font-display text-3xl font-bold leading-tight sm:text-4xl text-white">
                Seu tempo e seu investimento levados a sério.
              </h3>
              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                Você nunca fará uma aula sem saber exatamente qual fundamento está aprimorando, 
                qual foi o seu rendimento no mês ou como está a sua evolução física e técnica.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h4 className="font-semibold text-white text-base">Fim da Estagnação em Quadra</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">
                    Acompanhamento de métricas esportivas para corrigir vícios de movimento antes que se tornem hábitos prejudiciais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h4 className="font-semibold text-white text-base">Gestão de Reposições Transparente</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">
                    Faltou por compromisso ou chuva? Nosso sistema aloca e reorganiza reposições com rapidez e sem constrangimento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h4 className="font-semibold text-white text-base">Padrão de Excelência para Futuros Treinadores</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">
                    Quem se forma com o Marco aprende não só a bater na bola, mas a gerir alunos, turmas e finanças com software profissional.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={waLink("Olá, Marco! Fiquei impressionado com a estrutura e metodologia orientada por dados da equipe. Gostaria de agendar uma visita/aula.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black shadow-glow transition-all duration-300 hover:bg-white"
              >
                <span>Experimentar o Método</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
