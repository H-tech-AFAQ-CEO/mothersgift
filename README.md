# morrow

A calm, editorial marketing site for postpartum care, designed and developed by **Afaq Ahmad**.

## Overview

morrow presents practical, thoughtful support for the postpartum period. The site is intentionally designed to feel like a premium editorial publication rather than a traditional baby brand: warm off-white surfaces, deep plum typography, muted moss accents, considered spacing, and restrained motion.

## Routes

- `/` — Main marketing landing page
  - Hero and brand story
  - Hero animation storyboard direction
  - Data-forward trust section explaining user-controlled information
  - Care balance section showing support as tangible care
  - Expandable package cards with reusable open state
  - Six-step design-only gift purchase flow
  - Responsive video section with live MP4 source, poster image, controls, and fallback copy
  - Impact metrics and closing call to action
- `/first-week-check` — Companion content page with gentle first-week prompts

## Responsive design

The experience is designed for four target widths:

- Phone: 375px
- Tablet: 768px
- Laptop: 1280px
- Wide desktop: 1440px and above

Layouts use responsive flex and grid patterns, scalable type, accessible controls, and mobile-first content flow.

## Media

Generated editorial imagery is stored in `public/images/` and referenced locally:

- `morrow-hero.png`
- `morrow-ritual.png`
- `morrow-support.png`

The landing page video is a design/demo source loaded from a live MP4 URL. It is intentionally not autoplayed and includes a poster frame and native controls.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- CSS custom styling in `app/globals.css`
- Lucide/shadcn-compatible project foundation
- Vercel Analytics in production

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` in a browser.

## Production build

```bash
pnpm build
pnpm start
```

## Credits

Designed and developed by **Afaq Ahmad**.

Copyright © 2026 Afaq Ahmad / morrow care co.
