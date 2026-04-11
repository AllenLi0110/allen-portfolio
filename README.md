# Allen Li — Portfolio

A personal portfolio website showcasing Allen Li's software engineering experience, projects, and background.

## Table of Contents

- [Specifications](#specifications)
- [Tech Stack](#tech-stack)
- [System Design](#system-design)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Out of Scope](#out-of-scope)

---

## Specifications

### Functional Requirements

| # | Requirement |
|---|-------------|
| F1 | Display a hero section with a typewriter animation and scroll-based parallax |
| F2 | Display a work experience timeline with staggered scroll-reveal animations |
| F3 | Display a project grid with tech-stack filter chips |
| F4 | Display an About page with a professional bio |
| F5 | Toggle between light and dark mode with a circle-reveal transition |
| F6 | Show a scroll progress bar at the top of the page |
| F7 | Show a fixed section-dot navigation on the home page |
| F8 | Show a back-to-top floating button after scrolling down |
| F9 | Scroll to the top of the page on every route change |
| F10 | Show a fade-in page transition on route change |
| F11 | Show a 404 page for unknown routes |

### Non-Functional Requirements

| # | Requirement |
|---|-------------|
| N1 | Respect `prefers-reduced-motion` — all animations disabled when active |
| N2 | Accessible: semantic HTML, ARIA labels, visible focus rings |
| N3 | Responsive: single-column on mobile, up to 3-column grid on desktop |
| N4 | Scroll event handlers use `requestAnimationFrame` to avoid layout thrash |
| N5 | Parallax uses direct DOM manipulation — no React re-renders on scroll |
| N6 | About page is lazy-loaded (code splitting) |
| N7 | Deployed to GitHub Pages via GitHub Actions CI/CD |

### Out of Scope

| Feature | Reason |
|---------|--------|
| Backend / API | Static site — no server required |
| Resume PDF download | Out of scope for this iteration |
| Contact form submission | No backend; replaced with mailto link |
| CMS integration | Content managed via static TypeScript data files |
| Internationalisation (i18n) | English-only |

---

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| UI Framework | React 19 | Functional components + hooks only |
| Language | TypeScript 5.9 | Strict mode, `erasableSyntaxOnly` |
| Routing | React Router v7 | SPA with basename `/allen-portfolio/` |
| Bundler | Vite 8 + Oxc | Fast HMR in dev, optimised production build |
| Styling | CSS custom properties | Light/dark theme via CSS variables |
| Testing | Vitest 4 + Testing Library | jsdom environment, component + unit tests |
| Linting | ESLint 9 + typescript-eslint | Flat config, react-hooks rules enforced |
| Deployment | GitHub Actions + gh-pages | Push to `main` → lint → test → build → deploy |

---

## System Design

### Architecture

```
Browser
  │
  ├─ React Router v7
  │    ├─ /              → HomePage (lazy: ExperienceSection + ProjectCard)
  │    ├─ /about         → AboutPage (lazy)
  │    └─ /*             → NotFoundPage
  │
  ├─ Layout (always rendered)
  │    ├─ ScrollToTop     (instant scroll on route change)
  │    ├─ ScrollProgress  (top progress bar)
  │    ├─ Header          (nav + dark mode toggle)
  │    ├─ <Outlet />      (page content, keyed for page transition)
  │    ├─ Footer
  │    ├─ BackToTop       (floating button)
  │    └─ SectionDots     (home page only, fixed right-side dots)
  │
  └─ ThemeContext
       └─ isDark / toggle (persisted via <body> class)
```

### Scroll Animation Data Flow

```
window scroll event
  │
  ├─ Hero.tsx
  │    └─ requestAnimationFrame → setParallaxY(scrollY) → React re-render
  │         (only Hero uses React state for parallax — scroll starts at 0)
  │
  ├─ useElementParallax (Experience heading, Projects heading)
  │    └─ requestAnimationFrame → el.style.transform = translateY(...)
  │         (direct DOM write — no React re-render)
  │
  ├─ useActiveSection (Header + SectionDots)
  │    └─ setActiveSection → React re-render (only on section change)
  │
  └─ ScrollProgress
       └─ requestAnimationFrame → el.style.transform = scaleX(...)
            (direct DOM write)
```

### Dark Mode Transition Flow

```
User clicks toggle
  │
  └─ document.startViewTransition()
       ├─ capture screenshot of current state
       ├─ toggle isDark → apply/remove .dark class on <body>
       └─ animate with CSS clip-path: circle(0% → 150%)
            (origin = click coordinates via --vt-x, --vt-y CSS vars)
```

### Static Data

```
src/data/projects.ts    →  6 project entries (title, description, techStack, links)
src/data/experience.ts  →  4 experience entries (role, company, period, highlights)
```

---

## Folder Structure

```
allen-portfolio/
├── public/                        # Static assets served as-is
├── src/
│   ├── components/
│   │   ├── BackToTop.tsx          # Floating scroll-to-top button
│   │   ├── ErrorBoundary.tsx      # Catches render errors, shows fallback UI
│   │   ├── ExperienceSection.tsx  # Timeline of work experience
│   │   ├── Footer.tsx             # Site footer
│   │   ├── Header.tsx             # Fixed nav with active-section highlight and dark mode toggle
│   │   ├── Hero.tsx               # Landing section: typewriter + parallax + magnetic links
│   │   ├── Layout.tsx             # App shell: wraps all pages
│   │   ├── ProjectCard.tsx        # Project card with 3D tilt on hover
│   │   ├── ProjectTechFilter.tsx  # Filter chips for tech stack
│   │   ├── ScrollProgress.tsx     # Horizontal progress bar at top of viewport
│   │   ├── ScrollToTop.tsx        # Scrolls to top on every route change
│   │   ├── SectionDots.tsx        # Fixed dot navigation (home page only)
│   │   ├── TechBadge.tsx          # Small badge for a single technology
│   │   └── tests/                 # Component unit tests
│   ├── context/
│   │   └── ThemeContext.tsx        # Dark/light mode React context
│   ├── data/
│   │   ├── experience.ts           # Work experience entries
│   │   └── projects.ts             # Portfolio project entries
│   ├── hooks/
│   │   ├── useActiveSection.ts     # Returns the currently visible section ID
│   │   ├── useDarkMode.ts          # Reads/writes isDark with body class
│   │   ├── useElementParallax.ts   # Scroll parallax via direct DOM manipulation
│   │   └── useScrollReveal.ts      # IntersectionObserver-based scroll reveal
│   ├── pages/
│   │   ├── AboutPage.tsx           # About / bio page
│   │   ├── HomePage.tsx            # Home: Hero + Experience + Projects
│   │   └── NotFoundPage.tsx        # 404 fallback
│   ├── test/
│   │   ├── setup.ts                # Vitest global mocks (IntersectionObserver, matchMedia)
│   │   └── test-utils.tsx          # Re-exports from @testing-library/react
│   ├── types/                      # TypeScript interfaces and prop types
│   ├── utils/
│   │   └── scrollProgressPercent.ts  # Utility: calculate scroll % for progress bar
│   ├── App.tsx                     # Router setup and lazy imports
│   ├── index.css                   # Global styles, CSS variables, animations
│   └── main.tsx                    # React DOM entry point
├── index.html                      # HTML shell
├── vite.config.ts                  # Vite + Vitest config
├── tsconfig.app.json               # TypeScript config (strict, ES2023)
└── eslint.config.js                # ESLint flat config
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Install

```bash
cd allen-portfolio
npm install
```

### Run development server

```bash
npm run dev
```

Opens at `http://localhost:5173`.

### Run tests

```bash
# Watch mode
npm test

# Single run
npm run test:run
```

### Lint

```bash
npm run lint
```

### Build

```bash
npm run build
```

Output goes to `dist/`. A copy of `index.html` is written to `dist/404.html` so GitHub Pages serves the SPA correctly on direct URL access.

### Deploy to GitHub Pages

```bash
npm run deploy
```

Runs `predeploy` (build) then pushes `dist/` to the `gh-pages` branch. The live site is at `https://allenli0110.github.io/allen-portfolio/`.

---

## Out of Scope

| Feature | Reason |
|---------|--------|
| Server-side rendering (SSR) | Static site — no server needed |
| Resume PDF download | Not included in this iteration |
| Contact form with email delivery | No backend; `mailto:` link used instead |
| CMS or headless backend | Content is maintained in TypeScript data files |
| Analytics / tracking | Not implemented |
| Multi-language support | English-only |
| Unit tests for every component | Tests cover components with non-trivial logic; purely presentational components are skipped |
