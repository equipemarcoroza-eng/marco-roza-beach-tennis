

Trocar a foto do Hero (`src/components/site/Hero.tsx`) pela imagem `user-uploads://EMR_Capa_NovaJPG.JPG`.

O Hero hoje importa `heroImage from "@/assets/hero-equipe.webp"`. Vou substituir o asset por um novo arquivo (mantendo extensão `.jpg` que bate com o upload) e atualizar o import.

### Passos
1. Copiar `user-uploads://EMR_Capa_NovaJPG.JPG` para `src/assets/hero-equipe.jpg`.
2. Em `src/components/site/Hero.tsx`, atualizar o import de `@/assets/hero-equipe.webp` para `@/assets/hero-equipe.jpg`.

### Arquivos editados
- `src/assets/hero-equipe.jpg` (novo)
- `src/components/site/Hero.tsx` (1 linha de import)

