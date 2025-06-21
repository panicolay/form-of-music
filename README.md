# Form of Music

Web project based on Next.js 15 and TypeScript.

---

## Tech stack

- **Framework**: Next.js 15.3.2 (with Turbopack for dev)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 (with PostCSS)
- **Authentication**: Supabase (with SSR support)
- **Database**: Supabase
- **UI Components**: Custom components with Radix UI 1.4.1
- **Animations**: Motion 12.17.3
- **Validation**: Zod 3.24.4
- **Security**: Cloudflare Turnstile (react-turnstile)
- **Styling Utilities**: Class Variance Authority (CVA)
- **Code Quality**: ESLint 9, Prettier, Husky, Lint-staged
- **Package Manager**: pnpm 10.12.1
- **Deployment**: Vercel

---

## Project structure

- `src/app/`: App Router pages and routes
  - `(auth)/`: Authentication pages (login, signup, logout)
  - `[username]/`: Dynamic user profile pages with settings
  - `forbidden/`: Access control pages
- `src/components/`: Reusable components
  - `ui/`: Base UI components (Button, Field, Modal)
  - `layout/`: Layout components (Page, TopBar variants)
  - `settings/`: Settings-specific components and modals
  - `icons/`: Icon components
  - `svg/`: Custom SVG illustrations
- `src/context/`: React contexts for global state management
  - User authentication context and provider
- `src/emails/`: Email templates for Supabase authentication
- `src/lib/`: Internal libraries and business logic
  - User and profile management utilities
- `src/types/`: Shared TypeScript type definitions
- `src/utils/`: Utility functions and external integrations
  - `supabase/`: Supabase client configuration (client, server, middleware)
  - Username generation and validation utilities
- `public/`: Static assets
  - `avatars/defaults/`: Default user avatar images
  - Brand assets and icons

---

## Rules and conventions

- Code and comments are in **English**.
- Follow Next.js v15 best practices.
- Add clear comments if the code is not self-explanatory.

---

## Quick start

```bash
pnpm install
pnpm dev
```

---

## Contact

For any questions, contact Pierre-Antoine.
