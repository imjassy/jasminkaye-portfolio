# Jasmin Kaye Santos — Portfolio (React + TypeScript)

A React + TypeScript + Tailwind CSS + Framer Motion rebuild of the portfolio, using your real
content throughout.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL it prints (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build
npm run preview
```

The build output lands in `dist/` — that folder is what you'd deploy (e.g. to Vercel, Netlify, or
GitHub Pages).

## Project structure

```
src/
  data/content.ts     ← all your real content lives here (edit this to update text anywhere)
  components/         ← one component per section
  App.tsx             ← composes the whole page
  index.css           ← Tailwind + light/dark theme overrides
```

To change any text, number, project, skill, or tool, edit `src/data/content.ts` — the components
just render whatever is in there, so you never need to touch JSX for a content change.

## Things left as placeholders / to double check

- **`profile.linkedin` and `profile.github`** in `content.ts` are empty strings — add your real
  profile URLs there and the Footer/nav will pick them up automatically.
- **`profile.resumeUrl`** is `'#'` — point this at an actual hosted PDF once you have one.
- **Profile photo** — no image component was added since none was provided; the design doesn't
  currently need one, but you can add an `<img>` in `Hero.tsx` if you want one.
- **Contact form** (`Contact.tsx`) only shows a local confirmation message — it isn't wired to a
  real email service. Common options: Formspree, EmailJS, or your own serverless function.
- **Tool badges** use each platform's brand color with a short monogram instead of official logo
  files, since those are trademarked assets. If you have licensed SVG logo files, swap them into
  `Tools.tsx` in place of the colored `<div>` monogram.
- Any numeric "impact" stats (e.g. "reduced manual effort by X%") were left out for the same
  reason — add them to `content.ts` once you have real figures.

## Tech stack

- **React 18 + TypeScript** — component-based architecture, typed content model
- **Vite** — dev server and build tooling
- **Tailwind CSS** — utility-first styling, custom brand color tokens in `tailwind.config.ts`
- **Framer Motion** — scroll-reveal animations, hover/tap micro-interactions, animated project
  expand/collapse

## Theme

Dark is the default brand look. The toggle in the navbar adds a `.light` class to `<html>`, which
`src/index.css` uses to flip the color tokens. The choice is remembered in `localStorage`.
