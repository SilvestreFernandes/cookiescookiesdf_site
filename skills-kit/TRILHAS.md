# Trilhas de projeto

Este arquivo tem duas partes: como identificar a trilha certa para um projeto novo, e qual conjunto de skills usar em cada trilha.

## As três perguntas

Antes de começar qualquer projeto, responda:

**1. Qual é o objetivo do site?**
- A) Vender / converter (e-commerce, geração de leads, serviço)
- B) Informar / estabelecer presença (institucional, portfólio, blog)
- C) Melhorar um site que já existe (redesign)
- D) Interface app-like / mobile-first (plataforma, dashboard)
- E) Pitch especulativo para um negócio local que ainda não é cliente

**2. Quanto tempo disponível?**
- Urgente (menos de 3 dias)
- Normal (1 a 2 semanas)
- Tranquilo (2 semanas ou mais)

**3. Qual estilo visual o cliente pede ou o nicho pede?**
- Ousado (cores fortes, moderno)
- Premium (sofisticado, editorial)
- Minimalista (limpo, espaço em branco, monocromático)
- Corporativo (sóbrio, confiável)

A resposta à pergunta 1 define a trilha. As respostas 2 e 3 ajustam quais skills entram e quanto tempo dedicar a cada etapa.

## Tabela de trilhas

| Trilha | Quando usar | Skills (nomes reais, para usar com a ferramenta Skill) |
|---|---|---|
| A — Venda / conversão | Landing page comercial, e-commerce, captação de leads | `brandkit`, `design-taste-frontend`, `gpt-taste` (quando o pedido for impacto visual forte e motion), `imagegen-frontend-web`, `web-design-guidelines`, `responsive-design`, `full-output-enforcement` |
| B — Institucional / presença | Site institucional, portfólio, blog, páginas de serviço | `minimalist-ui` (estilo limpo) ou `high-end-visual-design` (estilo premium/sofisticado) — escolha um dos dois conforme a pergunta 3, mais `frontend-design`, `web-design-guidelines`, `responsive-design`, `full-output-enforcement` |
| C — Redesign | O site já existe e precisa de upgrade visual ou de UX | `redesign-existing-projects`, `web-design-guidelines`, `design-taste-frontend`, `frontend-design` |
| D — App-like / mobile | Plataforma, dashboard, interface com cara de app nativo | `imagegen-frontend-mobile`, `frontend-design`, `responsive-design`, `web-design-guidelines` |
| E — Pitch para negócio local | Prospecção especulativa: construir um site de demonstração para tentar fechar um negócio local antes de ter contrato | `local-business-rebuild` sozinha — essa skill já define um fluxo próprio de 10 fases (extração de marca, auditoria de SEO, auditoria de design, plano de reconstrução, build completo, otimização de copy, QA e checklist pré-deploy). Não combine com as outras trilhas. |

Regra prática: nunca ative todas as skills de uma vez. Escolha 3 a 5 por etapa do projeto (direção visual → estrutura → desenvolvimento → revisão), não o pacote inteiro do início ao fim.

## Skills complementares (não amarradas a uma trilha específica)

| Skill | Para que serve |
|---|---|
| `image-to-code` | Quando já existe uma referência visual (print, mockup, imagem) e o objetivo é implementar o código fiel a ela |
| `design-system-generator` | Gera um `DESIGN.md` — especificação de design system em formato estruturado, útil em projetos maiores ou com mais de uma pessoa desenvolvendo |
| `stitch-design-taste` | Também gera especificação de design system (`DESIGN.md`), mas foi feita para o Google Stitch especificamente — avalie se o fluxo do projeto usa essa ferramenta antes de escolher esta em vez de `design-system-generator` |

## Todas as skills instaladas nesta máquina, com o nome correto

Estas skills vivem em `~/.claude/skills/` (fora deste kit — ver `README.md` para instalação). Os nomes abaixo são os nomes reais, tirados do campo `name:` de cada `SKILL.md` — use exatamente estes ao chamar a ferramenta Skill.

| Nome real | Descrição resumida |
|---|---|
| `brandkit` | Identidade visual, moodboard, logo, guia de marca |
| `design-taste-frontend` | Frontend anti-clichê de IA para landing pages, portfólios e redesigns |
| `frontend-design` | Composição geral de interface, produção de componentes e páginas |
| `full-output-enforcement` | Força geração de código completo, sem truncamento nem placeholder |
| `gpt-taste` | UX/UI com motion GSAP avançado, estrutura AIDA, tipografia editorial larga |
| `high-end-visual-design` | Padrão visual de agência premium — tipografia, espaçamento, sombra, cartões |
| `image-to-code` | Transforma referência visual em código fiel |
| `imagegen-frontend-mobile` | Gera referências visuais de telas mobile/app |
| `imagegen-frontend-web` | Gera referências visuais de seções de site, uma imagem por seção |
| `local-business-rebuild` | Reconstrói o site de um negócio local para pitch especulativo, fluxo de 10 fases |
| `minimalist-ui` | Interface editorial limpa, paleta monocromática quente, sem gradiente pesado |
| `redesign-existing-projects` | Audita e melhora um site já existente sem quebrar a estrutura |
| `responsive-design` | Padrões de layout mobile-first, grid/flexbox, tipografia fluida, breakpoints |
| `stitch-design-taste` | Design system semântico para uso com o Google Stitch |
| `design-system-generator` | Gera `DESIGN.md` como especificação de design system para pipelines de build |
| `web-design-guidelines` | Revisão de UI contra as Web Interface Guidelines (acessibilidade, UX) |

Os nomes de pasta usados na versão anterior deste kit não correspondiam a estes nomes reais — quem tentasse chamar `taste-skill`, `soft-skill`, `minimalist-skill`, `output-skill`, `redesign-skill`, `stitch-skill`, `gpt-tasteskill` ou `image-to-code-skill` não encontraria a skill.
