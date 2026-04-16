

## Plano: Rebrand com a paleta da logo

A logo da Equipe Marco Roza usa **azul marinho** (anel) + **vermelho coral vibrante** (centro) + **branco**. Vou substituir totalmente a paleta atual (roxo + magenta) por uma identidade alinhada à logo, mantendo a estética minimalista e elegante.

### Nova paleta

| Token | Cor | Uso |
|---|---|---|
| `--primary` | Navy `#1f2a73` (oklch ~0.32 0.14 270) | Títulos, botões CTA, navbar, links |
| `--accent` | Coral/Vermelho `#e63946` (oklch ~0.62 0.22 25) | Acentos, ícones, badges, destaques |
| `--background` | Off-white quente `#fafaf7` (oklch ~0.985 0.005 80) | Fundo geral |
| `--foreground` | Navy escuro (oklch ~0.18 0.08 270) | Texto |
| `--secondary` / `--muted` | Tons frios neutros derivados do navy | Cards, fundos sutis |
| `--border` / `--ring` | Navy claro translúcido | Bordas e focus |
| `--whatsapp` | Verde WhatsApp (mantém) | Botões WA |

Gradientes (`--gradient-hero`, `--gradient-primary`, `--gradient-dark`) e sombras (`--shadow-elegant`, `--shadow-glow`) recalculados via `color-mix` — atualizam automaticamente porque referenciam `--primary` e `--accent`.

### Arquivos a editar

1. **`src/styles.css`** — substituir todas as variáveis OKLCH no bloco `:root` (primary, accent, background, foreground, secondary, muted, border, input, ring, chart-*). Único arquivo necessário para o rebrand global, pois todos os componentes usam tokens semânticos (`bg-primary`, `text-accent`, etc).

2. **`src/lib/contact.ts`** — sem mudanças.

3. **Componentes (`Hero`, `Navbar`, `Footer`, etc.)** — sem mudanças no código; herdam a nova paleta automaticamente via tokens.

4. **Logo na Navbar e Footer (bônus alinhado ao pedido "anexa a logo")**:
   - Copiar `user-uploads://Logo_Equipe_Marco_Roza.png` → `src/assets/logo-marco-roza.png`
   - **Navbar**: substituir o ponto colorido + texto por `<img>` da logo (h-10) + texto da marca ao lado
   - **Footer**: adicionar a logo (h-12) acima do nome da marca na coluna 1
   - Atualizar `<link rel="icon">` em `__root.tsx` para usar a logo como favicon (`/logo-marco-roza.png` na pasta `public`)

5. **`src/routes/__root.tsx`** — atualizar favicon para a logo.

### Considerações de design

- O navy é uma cor mais "séria/profissional" que o roxo — combina com o tom de autoridade pedido na brief original.
- O coral mantém a energia ousada do magenta anterior, mas agora 100% fiel à logo.
- Contraste WCAG AA garantido: navy primary sobre cream e cream sobre navy.
- Gradientes hero ganham um leve glow coral no topo direito + glow navy no canto inferior — mantém o visual sofisticado.

### Verificação pós-implementação

- Rodar `bun run build` para garantir que nada quebrou.
- Inspecionar visualmente: Hero, botões CTA, badges, cards de problemas, timeline do processo, FAQ, footer.

<lov-actions>
<lov-suggestion message="Aprovado, aplique o rebrand com a nova paleta da logo e adicione a logo na navbar e no footer.">Aplicar rebrand</lov-suggestion>
<lov-suggestion message="Aplique apenas a paleta de cores nos tokens, sem mexer na navbar/footer ainda. Quero ver o impacto isolado primeiro.">Só trocar as cores</lov-suggestion>
<lov-suggestion message="Antes de aplicar, me mostre 2 variações de paleta: uma com navy mais escuro e outra com coral mais alaranjado, para eu escolher.">Ver variações de paleta</lov-suggestion>
</lov-actions>
