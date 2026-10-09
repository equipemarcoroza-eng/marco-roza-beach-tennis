import { useEffect, useState } from "react";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { BRAND, waLink } from "@/lib/contact";
import logo from "@/assets/logo-marco-roza.png";

const links = [
  { href: "#sobre", label: "Marco Roza" },
  { href: "#servicos", label: "Áreas & Aulas" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#inteligencia-dados", label: "Sistema & BI" },
  { href: "#processo", label: "Como Iniciar" },
  { href: "#faq", label: "Dúvidas" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#090c16]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Brand / Logo */}
        <a
          href="#top"
          className="group flex items-center gap-3.5"
          aria-label="Equipe Marco Roza Beach Tennis - Início"
        >
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-accent/30 bg-black/40 p-1.5 transition-transform duration-500 group-hover:scale-105 group-hover:border-accent">
            <img src={logo} alt={BRAND} className="h-full w-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold tracking-tight text-white transition-colors group-hover:text-accent sm:text-lg">
              Marco Roza
            </span>
            <span className="eyebrow text-[9px] text-accent/80 tracking-[0.25em]">
              Beach Tennis
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow text-[11px] text-white/70 tracking-[0.22em] transition-all duration-300 hover:text-accent hover:translate-y-[-1px]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA & Status */}
        <div className="hidden sm:flex items-center gap-5">
          <div className="hidden xl:flex items-center gap-2 border border-accent/25 rounded-full px-3.5 py-1.5 bg-accent/5 text-[10px] eyebrow text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Vagas Abertas</span>
          </div>

          <a
            href={waLink("Olá, Marco! Gostaria de informações sobre horários e turmas de Beach Tennis.")}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-accent/60 bg-accent/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent transition-all duration-500 hover:border-accent hover:bg-accent hover:text-black shadow-[0_0_20px_rgba(229,167,59,0.2)]"
          >
            <MessageCircle className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
            <span>Agendar Aula</span>
            <ArrowUpRight className="h-3 w-3 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden rounded-lg border border-white/10 p-2 text-white/80 transition-colors hover:bg-white/5"
        >
          {open ? <X className="h-6 w-6 text-accent" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-b border-white/10 bg-[#090c16]/98 backdrop-blur-2xl transition-all">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6">
            <div className="mb-2 flex items-center gap-2 text-xs eyebrow text-accent">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Temporada 2026/2027 • Vagas Abertas
            </div>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium tracking-wide text-white/80 transition-colors hover:bg-white/5 hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink("Olá, Marco! Gostaria de informações sobre horários e turmas de Beach Tennis.")}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-glow"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
