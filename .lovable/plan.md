

## Plano: Remover "Portal do Aluno" e ajustar verde do WhatsApp

### 1. Remover botão "Portal do Aluno"

**Navbar (`src/components/site/Navbar.tsx`)**
- Remover o import órfão `LayoutDashboard` da linha 2 (já não há JSX usando ele no arquivo atual, mas o import ficou solto e gera warning de lint).
- Verificar e, se houver renderização de botão/link "Portal do Aluno" na versão em execução, removê-la das versões desktop e mobile.

**Footer (`src/components/site/Footer.tsx`)**
- Verificar e remover qualquer link/botão "Portal do Aluno" (no current-code que vejo, ele não aparece — mas vou inspecionar de novo na hora de editar para garantir).

### 2. Ajustar para o verde tradicional do WhatsApp

Em `src/styles.css`, atualizar os tokens semânticos:

```css
/* WhatsApp green oficial #25D366 */
--whatsapp: oklch(0.74 0.19 148);
--whatsapp-foreground: oklch(0.99 0 0);
```

Como **todos** os botões de WhatsApp/Contato (Navbar, Hero, Services, About, FinalCTA, Footer) já usam as classes `bg-whatsapp` e `text-whatsapp-foreground`, a mudança nos tokens propaga automaticamente para todos eles — sem precisar editar componentes.

### Arquivos editados
- `src/components/site/Navbar.tsx` — remover import órfão + botão se existir
- `src/components/site/Footer.tsx` — remover botão Portal do Aluno se existir
- `src/styles.css` — atualizar `--whatsapp` para o verde oficial #25D366

### Verificação
- Confirmar visualmente o verde mais vibrante nos botões da Navbar (desktop + mobile), Hero, Services, About, FinalCTA e ícone do Footer.
- Confirmar que não restou nenhum link "Portal do Aluno" em lugar nenhum.

