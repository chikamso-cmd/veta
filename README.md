# Veta

Veta is a modern talent-discovery platform designed to help professionals demonstrate real capability and help companies evaluate candidates through work-based evidence instead of just CV summaries.

The current app is a polished marketing landing page built in Next.js, focused on the core value proposition:

- professionals complete realistic challenges
- companies assess demonstrated ability
- talent is matched through evidence, not just credentials

## What’s included in the current build

The landing page includes several branded sections that reflect the product story:

- Hero section with strong positioning and trust messaging
- Navbar with desktop/mobile navigation and call-to-action buttons
- How it works section presenting the challenge flow
- Featured challenge card showcasing a product growth simulation
- For professionals section highlighting benefits and outcomes
- Tailored styling and visual system built around Veta’s blue/purple palette
- Local image assets and custom metadata for the Veta brand

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide React for icons
- Custom app router structure in Next.js

## Project structure

```bash
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Forprofessionals.tsx
│   ├── Hero.tsx
│   ├── Howitworks.tsx
│   └── Navbar.tsx
├── public/
│   └── assets/
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── README.md
└── ...
```

## Getting started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Then open:

```text
http://localhost:3000
```

## Available scripts

```bash
bun run dev     # starts the Next.js development server
bun run build   # creates a production build
bun run start   # starts the production server
bun run lint    # runs ESLint checks
```

## Branding and content notes

This repository is centered on a brand concept for Veta, with copy and sections designed to communicate:

- real work over self-reported experience
- evidence-based skill validation
- company-facing talent quality signals
- professional growth through challenge-based practice

The metadata in the app layout is also configured around the Veta positioning, including Open Graph and SEO content.

## Customization

If you want to evolve the landing page further, the main places to edit are:

- app/page.tsx for page composition
- components/Hero.tsx for the headline and hero visual
- components/Howitworks.tsx for the process flow
- components/Forprofessionals.tsx for the professional benefits section
- app/layout.tsx for metadata and global branding
- public/assets for local image resources

## Deployment

This project is ready to be deployed to a modern Node-based hosting platform such as Vercel.

A typical deployment flow is:

```bash
bun run build
bun run start
```

For Vercel deployment, you can connect the repository directly and let the platform handle the build and hosting configuration.

## Summary

Veta’s current repo is a polished product landing page that captures the platform’s mission: proving capability through realistic work, building stronger talent signals, and creating better opportunities for both professionals and companies.
