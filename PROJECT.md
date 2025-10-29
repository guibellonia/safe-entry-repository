# PROJECT.md — Documentação Detalhada do Projeto

Última atualização: 29/10/2025

## Visão geral
Este repositório contém a landing page "safe-entry-landing" construída com Next.js (App Router) e TypeScript. A página apresenta seções principais: Hero, Projetos, Time e Formulário de Contato. O projeto usa `styled-components` para estilos, `lucide-react` e `@iconify/react` para ícones e `resend` para envio de e-mails. O estado leve é gerenciado com `zustand`.

Objetivo: fornecer um site institucional/portfólio com seções estáticas/dinâmicas, exibição do time e um formulário de contato funcional que envia e-mails via Resend.

## Stack técnico
- Next.js 15 (App Router)
- React 19
- TypeScript
- styled-components
- lucide-react, @iconify/react
- zod (validação)
- resend (envio de e-mail)
- zustand (state)
- react-toastify (notificações)

## Como rodar (local)
```bash
npm install
npm run dev
# build
npm run build
npm run start
```

## Variáveis de ambiente
- `RESEND_API_KEY` — chave da API usada pelo SDK `resend` (veja `src/lib/resend.ts`).
Observação: a aplicação atual lê `process.env.RESEND_API_KEY` diretamente para instanciar o client `Resend`. Configure essa variável no seu ambiente (ou no provedor de deploy).

Exemplo (local):
```bash
export RESEND_API_KEY="insira_aqui_a_chave"
```

---

## Arquitetura e organização de diretórios (resumo)
Raiz do projeto (apenas principais itens):
- `app/` — rotas do Next.js (padrão App Router). `app/page.tsx` monta as seções.
- `src/`
  - `app/` — componentes da rota (client layout, página principal).
  - `components/` — componentes reutilizáveis (Button, Navbar, TeamDisplay, etc.).
  - `sections/` — seções da landing page (Hero, Projetos, Team, ContactForm, Advantages).
  - `lib/` — utilitários e integrações (ex.: `resend.ts`, `actions/sendContactEmail.ts`).
  - `stores/` — stores do Zustand (ex.: EmailStore).
  - `constants/` — temas, cores, etc.
  - `public/` — imagens e ativos estáticos.
- Configurações: `tsconfig.json`, `eslint.config.mjs`, `next.config.ts`.

Arquivos-chave:
- `src/app/page.tsx` — monta `Hero`, `Projetos`, `Team`, `ContactForm` e o `ToastContainer`.
- `src/lib/resend.ts` — instância do client Resend:
  ```ts
  export const resend = new Resend(process.env.RESEND_API_KEY);
  ```
- `src/lib/actions/sendContactEmail.ts` — função server action que envia:
  - e-mail para a equipe (`four4coding@gmail.com`, `accounts@fourcoding.com`)
  - e-mail de confirmação ao usuário que submeteu o formulário
- `src/sections/ContactForm/index.tsx` — formulário com validação via `zod`, usa `sendContactEmail` (server action) e `useEmailStore` para estado.
- `src/stores/EmailStore/index.ts` — store `useEmailStore` (persistência via sessionStorage; key `email-store`).
- `src/components/TeamDisplay/index.tsx` — componente de tabs para exibir dados do time com ícones.

---

## Fluxo do formulário de contato (detalhado)
1. Usuário preenche `Nome`, `E-mail`, `Mensagem` no componente `ContactForm` (`src/sections/ContactForm/index.tsx`).
2. Validação: o formulário usa `contactFormSchema` (arquivo `types.ts` na pasta da seção) e `zod` para validação síncrona no client.
3. Submissão:
   - `ContactForm` chama `sendContactEmail(formData)` (Server Action - `use server`).
   - `sendContactEmail` (em `src/lib/actions/sendContactEmail.ts`) cria duas chamadas `resend.emails.send`:
     a. Um e-mail para os endereços internos (notificação para a equipe).
     b. Um e-mail de confirmação enviado ao `email` do usuário.
   - Em caso de sucesso, o componente usa `react-toastify` para sucesso; em erro, exibe toast de erro.
4. Estado persistente:
   - `useEmailStore` controla `hasSend` (boolean | null) e é persistido em `sessionStorage` (implementação customizada de storage no `persist` do zustand). Isso evita reenvio imediato enquanto a sessão estiver ativa.

Observações de implementação:
- Endereços "from" e "to" estão escritos explicitamente em `sendContactEmail` (`accounts@fourcoding.com`, `four4coding@gmail.com`). Se desejar alterar, padronize e mova para variáveis de ambiente.
- `sendContactEmail` retorna `{ success: true, data, user }` ou `{ success: false, error }` em caso de erro.

---

## State management
- Zustand é usado para estado mínimo (ex.: `hasSend` no `EmailStore`).
- Persistência é feita em `sessionStorage` (implementação personalizada via `persist`), ou seja: os dados permanecem só durante a sessão do navegador (não em localStorage).

---

## Componentes notáveis
- `TeamDisplay` (`src/components/TeamDisplay/index.tsx`):
  - Recebe props: `tabs: TabItemType[]`, `activeTabIndex`, `onTabChange`.
  - Renderiza uma `TabList` onde cada `TabItem` ativa um tab.
  - Mostra `Title`, `Description`, `Tags` e links sociais (`linkedin`, `instagram`).
  - Mapeamento `tagIcons` para ícones do `lucide-react`.
- `Button` componente: reutilizado entre seções para ações e submit.
- Seções (`src/sections/*`) seguem um padrão `index.tsx` + `styles.ts` + `types.ts` (quando necessário).

---

## Segurança e boas práticas (observações)
- Evite commitar chaves sensíveis. `RESEND_API_KEY` deve estar em variáveis de ambiente no servidor/deploy.
- Recomendo mover os endereços `from` e `to` usados em `sendContactEmail` para `process.env` (por exemplo `EMAIL_FROM`, `EMAIL_TO`) para tornar mais seguro e configurável.
- Sanitizar conteúdo HTML: `sendContactEmail` injeta diretamente `${mensagem}` no HTML do e-mail. Para evitar possíveis conteúdos indesejados, sanitize/escape a mensagem antes de incluir no HTML (ex.: converter `&` `<` `>`).
- Proteção contra spam: considerar algum mecanismo (reCAPTCHA, rate limiting) no envio de formulários para evitar abuso.

---

## Testes e qualidade
- Lint/Typecheck:
  - Rodar `npm run lint` para verificar ESLint (config em `eslint.config.mjs`).
  - `tsc --noEmit` para checar types (TypeScript).
- Testes: nenhum teste automatizado identificado no repositório. Sugestão:
  - Adicionar testes unitários com Vitest/Jest para funções utilitárias e server action `sendContactEmail` (mockando `resend`).
  - Testes E2E com Playwright para fluxo do formulário.
- CI/CD: não há workflow de CI no repo; adicionar GitHub Actions para lint, build e testes é recomendado.

Comandos úteis:
```bash
# lint
npm run lint

# checar TS (sugerido)
npx tsc --noEmit
```

---

## Deploy
- O deploy típico é Vercel (Next.js otimizado). Configure as variáveis de ambiente no painel do provedor (ex.: `RESEND_API_KEY`).
- Se usar Docker ou outro provedor, lembre-se de injetar a variável de ambiente e definir NODE_ENV=production.

---

## Observações de implementação e sugestões de melhorias (priorizadas)
1. **Sanitizar mensagens de e-mail** — evitar injeção HTML: escapar conteúdo de `mensagem`.
2. **Mover endereços e remetente para env vars** — `EMAIL_FROM`, `EMAIL_TO` para flexibilidade.
3. **Adicionar testes unitários** para `sendContactEmail` (mock de `resend`).
4. **Adicionar CI** (GitHub Actions) para lint, build e testes.
5. **Adicionar rate limit / CAPTCHA** no endpoint de envio para reduzir spam.
6. **Melhorar UX de formulário**: feedback visual pós-envio (por exemplo, modal com cópia da mensagem).
7. **Versão e changelog**: manter `CHANGELOG.md` e tag releases.

---

## Árvores de componentes (resumida)
- `app/page.tsx`
  - `Hero` (src/sections/Hero)
  - `Projetos` (src/sections/Projetos)
  - `Team` (src/sections/Team)
    - `TeamDisplay` (src/components/TeamDisplay)
  - `ContactForm` (src/sections/ContactForm)
    - usa `sendContactEmail` (server action) e `useEmailStore`

---

## Erros/edge cases conhecidos
- Se `RESEND_API_KEY` não estiver setada, `Resend` será instanciado com `undefined` e requests falharão. Deve checar e bloquear o envio quando chave não estiver configurada.
- O formulário não parece implementar proteção contra submissões repetidas além do `hasSend` em sessionStorage (que pode ser resetado pelo usuário).
- Mensagem do usuário é injetada diretamente no HTML do e-mail — risco mínimo, mas merece sanitização.

---

## Checklist para contributors
- [ ] Configurar `RESEND_API_KEY` localmente antes de testar envio de e-mail.
- [ ] Executar `npm run lint` e `npx tsc --noEmit`.
- [ ] Criar PR com mudanças pequenas e testes quando alterar `sendContactEmail`.
- [ ] Adicionar e documentar variáveis de ambiente se adicionar novas integrações.

---

## Contatos / créditos
- Responsáveis vistos no time: Guilherme Bellonia, Thiago de P. Silva, João Pedro S. M. Braga, Maurício Hansen (dados em `src/sections/Team/index.tsx`).
- Projeto gerado a partir de uma base Next.js com customizações para FourCoding.

---

## Próximos passos recomendados (curto prazo)
1. Adicionar verificação de `RESEND_API_KEY` e mensagens de erro mais amigáveis no server action.
2. Mover strings e endereços para variáveis de ambiente.
3. Implementar sanitização da mensagem de usuário antes de inserir no HTML do e-mail.
4. Criar um workflow de CI (lint + build + testes).

---

## Licença
- Nenhuma licença especificada no repositório. Se desejar abrir para uso público, adicione `LICENSE` (ex.: MIT) e um breve `CONTRIBUTING.md`.

---

## Anexos (arquivos-chave para referência)
- `package.json`
- `src/app/page.tsx`
- `src/lib/resend.ts`
- `src/lib/actions/sendContactEmail.ts`
- `src/sections/ContactForm/index.tsx`
- `src/stores/EmailStore/index.ts`
- `src/components/TeamDisplay/index.tsx`
