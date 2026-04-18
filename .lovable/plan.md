

Trocar a foto da seção Sobre (`src/components/site/About.tsx`) pela imagem `user-uploads://Marco_Roza.jpg`.

### Passos
1. Copiar `user-uploads://Marco_Roza.jpg` para `src/assets/about-marco.jpg` (sobrescreve o asset atual já referenciado pelo componente — sem precisar mexer no import).
2. Não há mudança de código necessária: `About.tsx` já importa `aboutImg from "@/assets/about-marco.jpg"`.

### Arquivo editado
- `src/assets/about-marco.jpg` (substituído pelo upload)

