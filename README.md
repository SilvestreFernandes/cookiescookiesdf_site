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
| `styles.css` | Tema da marca (caramelo / chocolate / creme), layout responsivo, scroll reveal. |
| `script.js` | Link do WhatsApp centralizado, sombra do header, scroll reveal, status "aberto agora". |
| `assets/favicon.svg` | Ícone provisório (logo simplificado). |

## Pendências antes de publicar

Marcadas no código com `TODO` / `REPLACE` / `PENDENTE`.

1. **Número do WhatsApp** — em `script.js`, preencher `WA_NUMBER` (formato `55 + DDD + número`, só dígitos).
   Enquanto vazio, todos os botões de pedido caem no Instagram.
2. **Fotos reais** — substituir todos os `.placeholder-photo` por `<img>` com foto em alta
   resolução (cookie partido ao meio no hero; um por sabor). Adicionar `alt` descritivo e `loading="lazy"`
   nas que ficam abaixo da dobra.
3. **Cardápio** — confirmar com o cliente os sabores fixos, preços e alérgenos. Os atuais são exemplo.
4. **Domínio** — trocar `REPLACE_COM_SEU_DOMINIO` no `index.html` (`og:url`, `og:image`, JSON-LD).
5. **Imagem social** — criar `assets/og.jpg` em 1200×630.
6. **Mapa** — trocar o `src` do `<iframe>` pelo embed real do endereço da loja (Google Maps → Compartilhar → Incorporar).
7. **Telefone no JSON-LD** — `+55REPLACE_DDD_NUMERO` e coordenadas `geo` (as atuais são aproximadas de Vicente Pires).
8. **Google Business Profile** — reivindicar/atualizar (categoria, horário, fotos). NAP igual ao do site.

## Deploy

Qualquer host de site estático:

- **Netlify / Vercel / Cloudflare Pages** — arrastar a pasta ou conectar o repositório.
- **GitHub Pages** — subir os arquivos na raiz e ativar Pages.

Depois do deploy, rodar o `skills-kit/CHECKLIST-ENTREGA.md` e medir performance de verdade
(PageSpeed Insights) antes de entregar ao cliente.

## Nicho regulado

Confeitaria não tem restrição de publicidade profissional. Boa prática mantida: alérgenos
visíveis em cada item do cardápio.
