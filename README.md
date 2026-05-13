# Biofuelix Solutions

Marketing site for Biofuelix Solutions — a trading house for industrial-grade biomass briquettes and pellets.

Modern editorial design with logo-faithful forest green + gold palette, scroll-driven reveals, animated stat counters, and an interactive carbon offset calculator.

## Tech stack

- **Vite** + **React 18** + **TypeScript** (strict)
- **react-router-dom** v6 for client-side routing
- Plain CSS with custom properties (no UI framework)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # serve the production build locally
```

Node 18+ recommended.

## Routes

| Path        | Page          | Highlights                                                                                  |
| ----------- | ------------- | ------------------------------------------------------------------------------------------- |
| `/`         | Home          | Stat-strip hero with animated counters, marquee, four pillars, products preview, founder note |
| `/about`    | About         | Mission, problem/solution, circular-economy steps, full founders' message                   |
| `/products` | Products      | Briquette + pellet detail with SVG visuals, dark-mode comparison table, 5-feedstock guide   |
| `/why`      | Why Biofuelix | Four reasons grid, interactive carbon offset calculator, 2026 regulatory snapshot, FAQ      |
| `/contact`  | Contact       | Smart enquiry form (industry, fuel, tonnage, multi-select interests), sent-state confirmation |

Anchors like `/products#feedstock` scroll to the target section automatically on navigation.

## Project structure

```
src/
├── main.tsx              # Router + entry
├── styles.css            # Design tokens, layout primitives, component styles
├── components/
│   ├── Layout.tsx        # Nav + Outlet + Footer; scroll-to-top / hash on route change
│   ├── Nav.tsx           # Fixed top nav with scrolled state
│   ├── Footer.tsx        # Forest-deep footer with mega wordmark
│   ├── Marquee.tsx       # Infinite-loop band
│   ├── StatValue.tsx     # Intersection-observer-triggered counter
│   └── icons.tsx         # FlameLeaf, ArrowRight, ArrowUpRight
├── hooks/
│   └── useReveal.ts      # IntersectionObserver-driven `.reveal` animations
├── sections/             # Section components shared across pages
│   ├── Hero.tsx
│   ├── MarqueeBand.tsx
│   ├── Pillars.tsx
│   ├── ProductsPreview.tsx
│   ├── WhyNow.tsx
│   ├── FounderNote.tsx
│   └── HomeCTA.tsx
└── pages/
    ├── HomePage.tsx
    ├── AboutPage.tsx
    ├── ProductsPage.tsx
    ├── WhyPage.tsx
    ├── ContactPage.tsx
    └── NotFound.tsx
```

## Design system

Tokens live in `src/styles.css` under `:root`:

- **Palette** — `--forest` `#1a3a24` (deep logo green), `--forest-deep` `#0f2818`, `--moss`, `--leaf`, `--gold` `#b89a4e`, `--cream`, `--paper`, `--bone`
- **Type** — Fraunces (display serif), Instrument Sans (body), JetBrains Mono (mono labels), Caveat (founders' script)
- **Layout** — `--max-w: 1440px`, fluid `--gutter` via `clamp()`

Reveal/stagger animations attach to elements with `.reveal` / `.reveal-stagger` and trigger via IntersectionObserver.

## Deployment

The production build is a static SPA in `dist/`. Deploy to any static host (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront).

**SPA fallback:** configure the host to serve `index.html` for unmatched paths so deep links like `/products` resolve client-side.
- Vercel/Netlify: works out of the box for Vite projects
- Cloudflare Pages: add `_redirects` with `/* /index.html 200`
- Nginx: `try_files $uri $uri/ /index.html;`

## Known placeholders

- **Founder portrait** — stylized SVG silhouette labelled `PORTRAIT · TBD`. Replace with a real photo.
- **Product card images** — Unsplash atmospheric backgrounds on the home preview; the product detail page uses SVG illustrations.
- **Contact details** — `info@biofuelix.com`, `+91 90000 00000`, generic address — swap in the real values.
- **Contact form** — submission sets local `sent` state only; wire up to a real endpoint (email API, CRM, etc.) before going live.
- **Blog teaser** on `/why` links to `#` — full article isn't built.

## License

Proprietary.
