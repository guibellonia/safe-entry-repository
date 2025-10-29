# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Repository: Next.js (App Router) landing site using styled-components, Zod, Zustand, Resend

Commands

- Install deps
```bash path=null start=null
npm install
```
- Dev server
```bash path=null start=null
npm run dev
```
- Build
```bash path=null start=null
npm run build
```
- Start (after build)
```bash path=null start=null
npm start
```
- Lint all
```bash path=null start=null
npm run lint
```
- Lint a single file or directory (use ESLint directly)
```bash path=null start=null
npx eslint src/sections/ContactForm/index.tsx
```
- Type-check only
```bash path=null start=null
npx tsc --noEmit
```
- Tests: no test runner configured in package.json.

Environment

- Email sending uses Resend; set RESEND_API_KEY (do not commit secrets). Recommended: add to .env.local.
```bash path=null start=null
# .env.local
RESEND_API_KEY={{RESEND_API_KEY}}
```

High-level architecture

- App Router and layout
  - Entry is src/app/page.tsx composing sections: Hero, Projetos, Team, ContactForm, plus react-toastify ToastContainer.
  - Root layout src/app/layout.tsx loads DM_Sans and Figtree fonts, global.css, and wraps pages with ClientLayout. Metadata title/description set for the site.
  - ClientLayout (client component) provides an initial splash loader using styled-components and then renders Navbar and children. It uses sessionStorage to show the loader only once per session.
- Styling and theming
  - styled-components is enabled via next.config.ts (compiler.styledComponents: true) for SSR compatibility.
  - Theme tokens live in src/constants/theme.ts and are consumed across components/sections.
- Sections vs. Components
  - Sections (src/sections) are page-level blocks (Hero, Projetos, Team, ContactForm). They export via src/sections/index.ts and are assembled in app/page.tsx.
  - Reusable UI is under src/components (Button, Navbar, ProjectDisplay, TeamDisplay) with their own styles and types. Exposed via src/components/index.ts.
- Data and routing
  - Project data is static in src/data/projects.ts.
  - Dynamic route src/app/projects/[slug]/page.tsx uses generateStaticParams to pre-render each project page from the projects array and renders details (image, tech chips, links). Linking back to /#projetos.
- State management
  - src/stores/EmailStore uses Zustand with persist to sessionStorage to track whether the contact email was sent (hasSend), preventing duplicate submissions.
- Forms and validation
  - ContactForm (client) validates with Zod schema in src/sections/ContactForm/types.ts, surfaces per-field errors, and triggers a server action to send email. Uses react-toastify for success/error feedback.
- Server actions and emailing
  - sendContactEmail in src/lib/actions/sendContactEmail.ts is a Next.js Server Action ("use server") that sends two emails via Resend: one to team, one confirmation to the user. It depends on resend client from src/lib/resend.ts (constructed with process.env.RESEND_API_KEY).
- Tooling and conventions
  - Path alias @/* → src/* configured in tsconfig.json; use this for imports.
  - ESLint configured via eslint.config.mjs with next/core-web-vitals and next/typescript.
  - Next.js version 15; React 19; styled-components v6.

Notes for future changes

- When adding new server actions that send mail, import resend from src/lib/resend and ensure RESEND_API_KEY is set.
- Keep page-level composition in src/app/* minimal; prefer adding new sections to src/sections and composing them in app/page.tsx.
- For new routes, prefer the App Router co-location pattern (src/app/route/page.tsx) and reuse the theme and components.
