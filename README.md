# Domain Hub

A hyper-premium, frontend-only domain hub for unused and reserved domains. Multiple
domains point to this same site — the page detects which one you arrived on and
highlights it.

> **Live URL:** _coming soon_  
> **Maintained by:** [@homophobiaa](https://github.com/homophobiaa)

## Screenshot

> _Add a screenshot of the deployed site here._
>
> `./docs/screenshot.png`

## Features

- **Current-domain detection** — uses `window.location.hostname` to match the
  visitor's host against the listed domains and highlight the active card.
- **Premium hero** with status pill, gradient headline, and a glass "you are
  visiting" panel.
- **Animated background** — soft blurred gradient orbs, fine dot/grid mesh,
  cursor-following radial glow, drifting hairlines, and a subtle noise layer.
- **Domain cards** with status pills (Reserved / Unused / Personal /
  Experimental), copy-to-clipboard, open-in-new-tab, hover lift + glow, and
  staggered entrance animations.
- **Micro-interactions**: copy feedback, animated active glow, focus rings,
  domain count, and full `prefers-reduced-motion` support.
- **Responsive** — laid out for desktop, laptop, tablet, and mobile.
- **Static & lightweight** — no backend, no auth, no database, no UI library.

## Domains

| Domain              | Status        | Purpose                                       |
| ------------------- | ------------- | --------------------------------------------- |
| `getflowhub.app`    | Reserved      | Reserved for FlowHub                          |
| `getflowhub.xyz`    | Experimental  | Experimental FlowHub workspace                |
| `getflowhub.cloud`  | Reserved      | Cloud / infrastructure flavored FlowHub       |
| `gamehubbg.com`     | Unused        | Held for a future gaming-adjacent project     |
| `deyanilkov.com`    | Personal      | Personal branding domain                      |

To add or change a domain, edit `src/data/domains.ts`.

## Tech stack

- React 18 + TypeScript
- Vite 5 for dev server and bundling
- Plain CSS variables — no Tailwind, no UI library

## Project structure

```
src/
  data/
    domains.ts          # domain registry + lookup helper
  hooks/
    useCurrentDomain.ts # hostname detection
  components/
    Background.tsx
    DomainCard.tsx
    DomainList.tsx
    Footer.tsx
    Hero.tsx
    StatusPill.tsx
    TopNav.tsx
    icons.tsx
  styles/
    globals.css
  App.tsx
  main.tsx
```

## Local development

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal (typically
`http://localhost:5173`). On localhost the hero falls back to a "Preview
environment" message because no listed hostname matches.

### Build

```bash
npm run build
npm run preview
```

`npm run build` runs the TypeScript project-references check and then
`vite build`, emitting a static bundle to `dist/`.

## Deploying to Vercel

This is a fully static SPA — Vercel's defaults work out of the box.

1. Import the repository on [vercel.com](https://vercel.com/new).
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add each parking domain to the project's **Domains** tab; they will all
   serve the same bundle, and `useCurrentDomain` will highlight whichever one
   the visitor arrived on.

No environment variables are required.

## License

See [LICENSE](LICENSE).
