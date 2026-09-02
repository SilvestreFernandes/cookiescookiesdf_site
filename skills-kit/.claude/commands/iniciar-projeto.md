---
description: Identifica a trilha certa para um projeto novo e ativa as skills correspondentes
argument-hint: [nome-do-projeto]
---

Você vai ajudar a iniciar um projeto novo de criação de site. Siga estes passos:

1. Verifique se existe um arquivo `BRIEF.md` (ou `BRIEF-*.md`) na raiz do projeto atual.
   - Se não existir, copie a estrutura de `skills-kit/BRIEF-TEMPLATE.md` para `BRIEF.md` e peça ao usuário para preencher as três seções (objetivo/tempo/estilo, nicho regulado, coleta de dados do cliente). Não invente respostas no lugar do usuário.
   - Se já existir e estiver preenchido, leia o conteúdo.

2. Com as respostas em mãos, abra `skills-kit/TRILHAS.md` e identifique qual trilha (A a E) melhor corresponde ao projeto, usando a tabela de trilhas.

3. Diga ao usuário, de forma explícita, qual trilha foi identificada e por quê.

4. Verifique a seção "nicho regulado" do brief. Se o cliente for de uma profissão regulamentada (saúde, odontologia, advocacia, contabilidade, nutrição ou similar), avise antes de prosseguir quais restrições de publicidade se aplicam, conforme descrito em `BRIEF-TEMPLATE.md`.

5. Ative as skills recomendadas para a trilha identificada, chamando a ferramenta Skill pelo nome real de cada uma (os nomes corretos estão em `TRILHAS.md` — não use os nomes de pasta de repositório GitHub, que são diferentes).

6. Use `skills-kit/CONTEXT-BASE-PROMPT.md` como guia de regras e como base do prompt de trabalho para o restante do projeto.

7. Se o brief indicar que o negócio tem endereço físico, lembre o usuário da seção de SEO local em `BRIEF-TEMPLATE.md` antes de começar a estruturar as páginas.

Argumento opcional: $ARGUMENTS pode conter o nome do projeto ou uma descrição curta — use isso como contexto adicional, não como substituto do brief.
