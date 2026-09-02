# Kit de skills para criação de sites

Pasta de documentação para colar na raiz de qualquer projeto novo de site. Não contém as skills em si — elas ficam instaladas globalmente em `~/.claude/skills/` e estão disponíveis em qualquer projeto, com ou sem este kit. O que este kit organiza é: qual skill usar em cada tipo de projeto, que perguntas fazer ao cliente antes de começar, e um checklist de validação antes de entregar.

## Conteúdo

- `TRILHAS.md` — como identificar o tipo de projeto e qual conjunto de skills usar em cada caso
- `BRIEF-TEMPLATE.md` — perguntas a fazer antes de começar, incluindo a checagem de nicho regulado e a coleta de dados do cliente
- `CONTEXT-BASE-PROMPT.md` — regras de qualidade e prompts de trabalho por trilha
- `CHECKLIST-ENTREGA.md` — checklist de validação antes de entregar o projeto
- `.claude/commands/iniciar-projeto.md` e `.claude/commands/validar-projeto.md` — comandos `/iniciar-projeto` e `/validar-projeto` que guiam o Claude pelos passos acima dentro da conversa

## Instalação das skills

As skills usadas neste kit vieram de dois repositórios:

- `github.com/Leonxlnx/taste-skill`
- `github.com/lotfb86/web-design-skills`

Para instalar uma skill a partir de um desses repositórios:

1. Clone ou baixe o repositório.
2. Copie a pasta de cada skill — a que contém um arquivo `SKILL.md` com `name:` e `description:` no topo — para dentro de `~/.claude/skills/`, uma pasta por skill.
3. Abra uma sessão nova do Claude Code. As skills instaladas aparecem listadas automaticamente no início da conversa.

Não encontrei documentação oficial que descreva formalmente o processo de instalação de uma skill a partir de um repositório git — o procedimento acima reproduz a estrutura que já está funcionando nesta máquina (pasta com `SKILL.md` dentro de `~/.claude/skills/`). Se uma skill não aparecer disponível depois de copiada, isso pode indicar frontmatter incorreto no `SKILL.md`; a skill `claude-code-guide` pode ajudar a diagnosticar.

A lista completa das 16 skills instaladas nesta máquina, com o nome real de cada uma, está em `TRILHAS.md`.

## Como usar em um projeto novo

1. Copie a pasta `skills-kit` inteira para a raiz do projeto novo.
2. Abra `TRILHAS.md` e responda as três perguntas de roteamento para identificar a trilha.
3. Preencha `BRIEF-TEMPLATE.md` com os dados do projeto.
4. Rode `/iniciar-projeto` (ou faça manualmente: leia o brief, confirme a trilha em `TRILHAS.md`, ative as skills correspondentes pelo nome real).
5. Desenvolva usando `CONTEXT-BASE-PROMPT.md` como guia de regras.
6. Antes de entregar, rode `/validar-projeto` ou percorra `CHECKLIST-ENTREGA.md` manualmente.

## Limites deste kit

Os comandos `/iniciar-projeto` e `/validar-projeto` são prompts que orientam o Claude a seguir os passos certos dentro da própria conversa, usando as ferramentas normais de leitura de arquivo, Skill e Bash/PowerShell. Não há automação rodando em segundo plano, dashboard de métricas, nem hook configurado neste kit. Se você quiser esse tipo de automação — por exemplo, rodar uma checagem toda vez que um arquivo for salvo — isso é possível com hooks reais do Claude Code (eventos como `PostToolUse`), mas precisa ser configurado à parte, consultando a documentação oficial (`docs.claude.com/en/docs/claude-code/hooks`) ou a skill `claude-code-guide`. Este kit não inclui isso hoje.
