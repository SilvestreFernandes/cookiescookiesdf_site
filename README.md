# Cookies & Cookies — landing page

Landing page estática (HTML/CSS/JS, sem build) para a doceria **Cookies & Cookies**
(@cookiesecookies.df), Vicente Pires, Brasília-DF. Trilha A do `skills-kit`
(venda / conversão), estilo ousado.

## Rodar localmente

Não precisa de build. Abra `index.html` no navegador, ou sirva a pasta:

```bash
npx serve .
# ou
python -m http.server 8000
```

## Estrutura

| Arquivo | O que é |
|---|---|
| `index.html` | Página inteira, uma seção por bloco. Contém o JSON-LD `Bakery` para SEO local. |
| `styles.css` | Identidade da marca, layout responsivo, scroll reveal. |
| `script.js` | Link do WhatsApp centralizado, sombra do header, scroll reveal, status "aberto agora". |
| `assets/logo.png` | Logo oficial, recortado em círculo com alpha (512×512). |
| `assets/cookie-*.jpg` | Fotos dos 4 sabores, recortadas 3:2 a partir dos stories do Instagram. |
| `assets/hero-cookie.jpg` | Choco Milk, foto principal do hero. |
| `assets/og.jpg` | Imagem de compartilhamento, 1200×630. |
| `assets/favicon.svg` | Ícone da aba (cookie simplificado nas cores da marca). |

## Identidade visual

Aplicada a partir do documento de DNA da marca.

**Paleta** — núcleo `creme #F2E9E1` + `chocolate #3D170D` + `laranja #E3914F`,
com `terracota #D25A2B` nos destaques. Acentos de energia: `amarelo #F9AA00` e
`magenta #D7029D`, usados na "aura" (`--aura`) — o gradiente multicolorido que
reproduz a borda do selo circular do logo. Ele aparece na fita do topo, na moldura
da foto do hero e nos números dos passos.

**Tipografia** — Fredoka nos títulos (pesada, arredondada, informal, próxima do
lettering do logo) e Nunito no corpo. A escolha é deliberada: uma serifada editorial
leria como "gourmet de luxo", território que o DNA da marca rejeita.

**Formas** — cantos bem arredondados (24–32px), ícones em círculo, selo circular.

## Pendências antes de publicar

Marcadas no código com `TODO` / `REPLACE`.

1. **Número do WhatsApp** — em `script.js`, preencher `WA_NUMBER` (formato `55 + DDD + número`, só dígitos).
   Enquanto vazio, todos os botões de pedido caem no Instagram.
2. **Preços** — todos os sabores estão com `R$ 00,00`. Confirmar com o cliente.
3. **Alérgenos** — conferir as tags de cada sabor com quem produz (a do Negresco assume soja).
4. **Domínio** — trocar `REPLACE_COM_SEU_DOMINIO` no `index.html` (`og:url`, `og:image`, `logo`, JSON-LD).
5. **Mapa** — trocar o `src` do `<iframe>` pelo embed real do endereço da loja (Google Maps → Compartilhar → Incorporar).
6. **Telefone no JSON-LD** — `+55REPLACE_DDD_NUMERO` e coordenadas `geo` (as atuais são aproximadas de Vicente Pires).
7. **Google Business Profile** — reivindicar/atualizar (categoria, horário, fotos). NAP igual ao do site.
8. **Fotos** — as atuais vieram de screenshots de stories. Se o cliente tiver os
   originais do fotógrafo (assinados "yoi"), substituir por eles em resolução maior.

## Deploy

Qualquer host de site estático:

- **Netlify / Vercel / Cloudflare Pages** — arrastar a pasta ou conectar o repositório.
- **GitHub Pages** — subir os arquivos na raiz e ativar Pages.

Depois do deploy, rodar o `skills-kit/CHECKLIST-ENTREGA.md` e medir performance de verdade
(PageSpeed Insights) antes de entregar ao cliente.

## Nicho regulado

Confeitaria não tem restrição de publicidade profissional. Boa prática mantida: alérgenos
visíveis em cada item do cardápio.
