

O usuário quer que todos os botões de WhatsApp apontem para `https://wa.me/5544997731080` (sem mensagem pré-preenchida).

Olhando `src/lib/contact.ts`:
- `PHONE = "5544997731080"` ✅ já está correto
- `waLink(msg)` gera `https://wa.me/5544997731080?text=...` — o número já bate, mas todos os botões anexam uma mensagem via query string `?text=`.

A interpretação mais provável: o usuário quer o link **limpo** `https://wa.me/5544997731080`, sem o `?text=...`. Vou ajustar o helper para que, quando chamado sem mensagem (ou com string vazia), retorne só `https://wa.me/5544997731080`.

## Plano: Link de WhatsApp limpo

### Mudança
Em `src/lib/contact.ts`, ajustar o helper `waLink`:

```ts
export const waLink = (msg?: string) =>
  msg ? `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}` : `https://wa.me/${PHONE}`;
```

E nos componentes (Navbar, Hero, About, Services, FinalCTA, Footer), trocar todas as chamadas `waLink("Olá! ...")` por `waLink()` — assim o link gerado será exatamente `https://wa.me/5544997731080`.

### Arquivos editados
- `src/lib/contact.ts` — tornar `msg` opcional
- `src/components/site/Navbar.tsx` — 2 chamadas (desktop + mobile)
- `src/components/site/Hero.tsx` — 1 chamada
- `src/components/site/About.tsx` — 1 chamada
- `src/components/site/Services.tsx` — checar e ajustar todas as chamadas `waLink(...)`
- `src/components/site/FinalCTA.tsx` — 1 chamada
- `src/components/site/Footer.tsx` — 1 chamada

### Observação
Se a intenção era apenas trocar o **número** (e manter as mensagens pré-preenchidas), o número já está correto no `contact.ts` e nada precisa mudar. Mas como o pedido foi explícito por uma URL sem `?text=`, vou seguir com a versão limpa.

