import { Instagram, MapPin, MessageCircle, ArrowUp } from "lucide-react";
import {
  ADDRESS,
  BRAND,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  PHONE_DISPLAY,
  waLink,
} from "@/lib/contact";
import logo from "@/assets/logo-marco-roza.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060810] py-16 text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        <div className="grid gap-12 md:grid-cols-4 lg:gap-16">
          
          {/* Coluna 1: Marca e Posicionamento */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-white/5 p-2">
                <img src={logo} alt={BRAND} className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="font-display text-xl font-bold tracking-tight text-white">
                  Marco Roza
                </p>
                <p className="eyebrow text-[9px] text-accent tracking-[0.25em]">
                  Beach Tennis
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
              Treinamento de alta performance, capacitação técnica de professores e gestão esportiva
              orientada por dados em Maringá - PR. Da primeira raquetada ao topo do circuito.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <p className="eyebrow text-xs text-accent font-semibold">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#sobre" className="transition-colors hover:text-accent">
                  Quem é Marco Roza
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-accent">
                  Áreas & Programas
                </a>
              </li>
              <li>
                <a href="#metodologia" className="transition-colors hover:text-accent">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="#inteligencia-dados" className="transition-colors hover:text-accent">
                  Sistema & BI
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-accent">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato & Endereço */}
          <div>
            <p className="eyebrow text-xs text-accent font-semibold">
              Localização & Contato
            </p>
            <div className="mt-4 space-y-3.5 text-sm text-white/70">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="leading-snug">{ADDRESS}</span>
              </p>
              <a
                href={waLink("Olá, Marco! Estou entrando em contato pelo site.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-emerald-400"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-accent"
              >
                <Instagram className="h-4 w-4 shrink-0 text-accent" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Linha Inferior com Copyright e Topo */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50 text-center sm:text-left">
            © {new Date().getFullYear()} {BRAND}. Todos os direitos reservados.
          </p>

          <a
            href="#top"
            className="eyebrow inline-flex items-center gap-2 text-[10px] text-white/60 transition-colors hover:text-accent"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>

      </div>
    </footer>
  );
}
