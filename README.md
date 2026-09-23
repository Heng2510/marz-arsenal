# Marz Arsenal

A lightweight companion site for the **MarzGuns** mod for Project Zomboid. Browse guns, ammo types, attachments, and a multi-profile ranking system — all in a static, zero-JS-by-default site.

**Live:** https://marz-arsenal.vercel.app

## What it does

- **Guns tab** — sortable table of every gun in the mod with damage, crit, range, noise, weight, fire modes, and required mounts.
- **Ammo tab** — guns grouped by caliber with color-coded cards.
- **Attachments tab** — searchable list with fitment info.
- **Ranking tab** — multi-profile scoring (Balanced, DPS, Precision, Stealth, Mobility, CQB, Logistics). Filters don't change global rank; each profile is pre-computed at build time.

## Tech stack

- **Astro** — static site generation, ships 0 KB JS by default
- **Tailwind CSS 4** — utility-first styling with CSS variables for dark/light mode
- **TypeScript** — typed data model for guns, ammo, and attachments
- **Vercel** — deployment

No React, no Vue, no runtime framework. The only client JS is a few small scripts for tabs, filters, and sorting.

## Why Astro

The site is 95% static content. A framework like React would ship ~40 KB of runtime for interactions that vanilla JS handles in ~3 KB. Astro renders HTML at build time and only hydrates what needs it.

## Scoring model

Each gun is scored against 7 profiles. Scores are computed at build time in `src/lib/scoring.ts` using min-max normalized features:

- Damage, crit chance, crit multiplier, range
- Inverse noise (quieter = better)
- Inverse aim time (faster = better)
- Weight, magazine size
- Attachment availability, ammo rarity, ergonomics

Each profile has its own weight vector. **CQB**, for example, emphasizes fast aim, high per-shot damage, and magazine size — while **Logistics** rewards common ammo and fewer required attachments. Global ranks are computed against the full gun list, so filtering the UI never changes the displayed rank.

## Project structure

    src/
      data/           guns, ammo, attachments, gun metadata
      lib/            scoring engine
      components/     UI blocks (tables, filters, tabs)
      layouts/        base layout
      pages/          index
      styles/         global CSS (theme variables + Tailwind)

## Run locally

    npm install
    npm run dev

Open http://localhost:4321

## Build

    npm run build

Output goes to `dist/`.

## Data source

Gun stats are extracted from the MarzGuns mod's `.txt` definition files. Metadata like ammo rarity and attachment counts are manually curated in `src/data/gun-meta.ts`.

## Notes

- "Best choice" stars are editorial.
- The scoring model is intentionally simple — it's a decision aid, not a simulation.
- Contributions to the scoring weights are welcome if you disagree with a ranking.

