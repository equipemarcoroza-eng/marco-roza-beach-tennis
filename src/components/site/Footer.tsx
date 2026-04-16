import { Instagram, MapPin, MessageCircle } from "lucide-react";
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
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-8">
        <div>
          <img src={logo} alt={BRAND} className="h-14 w-14 object-contain" />
          <p className="mt-3 font-display text-xl font-bold text-primary">{BRAND}</p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Treinamento, formação e estruturação de carreira no Beach Tennis com
            metodologia profissional.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Contato
          </p>
          <div className="mt-4 space-y-3 text-sm">
            <a
              href={waLink("Olá! Vim pelo site.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-foreground/85 transition-smooth hover:text-primary"
            >
              <MessageCircle className="h-4 w-4 text-accent" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-foreground/85 transition-smooth hover:text-primary"
            >
              <Instagram className="h-4 w-4 text-accent" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Endereço
          </p>
          <p className="mt-4 flex items-start gap-3 text-sm text-foreground/85">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{ADDRESS}</span>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-5 pt-6 md:px-8">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {BRAND}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
