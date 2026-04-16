

O usuário quer trocar a foto da primeira dobra (Hero) pela imagem da equipe que acabou de enviar (`user-uploads://hero-equipe.webp`).

Olhando o diff que veio na mensagem, vejo que o `Hero.tsx` já está importando `@/assets/hero-equipe.png` — ou seja, parece que uma versão anterior já tentou fazer essa troca, mas o arquivo `src/assets/hero-equipe.png` está vazio/binário inválido (o diff mostra `<binary>` mas o conteúdo anterior era apenas uma linha em branco). Preciso copiar a imagem real do upload para o projeto.

## Plano: Trocar a foto da primeira dobra (Hero)

### O que fazer
1. Copiar `user-uploads://hero-equipe.webp` para `src/assets/hero-equipe.webp` (formato webp original, melhor compressão).
2. Atualizar o import em `src/components/site/Hero.tsx`:
   - De: `import heroImage from "@/assets/hero-equipe.png"`
   - Para: `import heroImage from "@/assets/hero-equipe.webp"`
3. Ajustar o atributo `alt` da `<img>` para refletir o novo conteúdo: "Equipe Marco Roza Beach Tennis com alunos em quadra" (mais fiel à foto enviada, que é uma foto de grupo).
4. Ajustar `width`/`height` no JSX para a proporção da nova imagem (a foto enviada é landscape ~4:3, atualmente está como 1024×1280 portrait). Vou usar `1600×1200` para preservar a proporção real e evitar distorção do `object-cover`.

### Considerações
- A foto de grupo é horizontal e o container do Hero atualmente é mais vertical no desktop. O `object-cover` vai cortar parte da imagem — está OK porque o foco visual (rostos da equipe) está no centro/inferior, e o gradiente roxo no topo já cobre a parte superior do mural. Sem necessidade de reposicionamento.
- Não preciso mexer em mais nenhum componente — só Hero usa essa foto.
- A foto antiga `hero-coach.jpg` pode permanecer no projeto (não vai estourar build), mas como não é referenciada, fica como asset órfão. Sem ação necessária.

### Arquivos editados
- `src/assets/hero-equipe.webp` (novo, copiado do upload)
- `src/components/site/Hero.tsx` (atualizar import + alt + dimensões)

