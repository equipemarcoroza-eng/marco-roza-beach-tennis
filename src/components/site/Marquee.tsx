import logo from "@/assets/logo-marco-roza.png";

const marqueeItems = [
  "Metodologia Própria",
  "Alta Performance",
  "Gestão Orientada por Dados",
  "Capacitação de Treinadores",
  "Beach Tennis Maringá",
  "Inteligência Tática",
  "Formação em Arbitragem",
  "Desenvolvimento de Atletas",
  "Evolução Contínua em Quadra",
];

export function Marquee() {
  return (
    <div
      className="relative flex h-[76px] items-center overflow-hidden border-y border-white/10 bg-[#0d1222]"
      aria-label="Valores e Pilares da Equipe Marco Roza"
    >
      <div className="animate-marquee flex items-center">
        {/* Bloco 1 */}
        <div className="flex shrink-0 items-center">
          {marqueeItems.map((item, idx) => (
            <span key={`m1-${idx}`} className="flex items-center">
              <span className="whitespace-nowrap px-8 font-display text-xl sm:text-2xl italic text-white/80 transition-colors hover:text-accent">
                {item}
              </span>
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="h-5 w-5 object-contain opacity-60"
              />
            </span>
          ))}
        </div>

        {/* Bloco 2 (Duplicado para efeito contínuo sem emenda) */}
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <span key={`m2-${idx}`} className="flex items-center">
              <span className="whitespace-nowrap px-8 font-display text-xl sm:text-2xl italic text-white/80 transition-colors hover:text-accent">
                {item}
              </span>
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="h-5 w-5 object-contain opacity-60"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
