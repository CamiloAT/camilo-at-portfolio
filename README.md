# CamiloAT Repository

[![React](https://img.shields.io/badge/React-19.2-blue?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1-purple?logo=vite&logoColor=white)](https://vite.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.42-black)](https://www.framer.com/motion/)
[![React Router](https://img.shields.io/badge/React_Router-7.18-ca4f4f?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A cinematic immersive personal portfolio for Camilo Andrés Arias Tenjo (Camilo AT), a Systems Engineer from UPTC. Built with a dark brown/amber color scheme, scroll-driven animations, and a film strip aesthetic — designed to stand out from generic developer portfolios.

---

## Main Features

- **Cinematic Preloader** — Animated countdown with SVG VHS noise and film strip borders that fade in after loading
- **Scroll-Driven Animations** — Every section uses Framer Motion scroll-triggered reveals, parallax effects, and clip-path transitions
- **Floating Music Player** — YouTube IFrame API integration with a 10-song playlist, play/pause/prev/next controls, equalizer animation, and a playlist modal
- **Interactive Project Modals** — Detailed project views with image carousels, CLI terminal outputs, collaborator links, and tech stack tags
- **Dock Navigation** — Fixed navigation with section-aware scroll offsets for both desktop and mobile viewports
- **Fully Responsive** — Adaptive layouts for mobile with stacked cards, top navigation bar, and optimized typography

---

## Pages & Views

| View | Description |
|---|---|
| **Home (`/`)** | Main portfolio with 6 scrollable sections: Hero, About Me, My Projects, Tech Stack, Interests & Music, Certifications, and Outro/Footer |
| **Projects (`/projects`)** | Extended project gallery with 10 additional projects, each with detailed modals, image carousels, and CLI output displays |

---

## Execution and Development Guide

1. **Clone the repository**
   ```bash
   git clone https://github.com/CamiloAT/caat-artifacts.git
   cd caat-artifacts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

> **Note:** The project uses YouTube IFrame API for the music player. An internet connection is required for the playlist functionality to work.

> **Note:** Custom font `Andres` is included in `public/fonts/` and used for the philosophy quote, and footer name.

---

## Project Structure

```text
camilo-at-repository/
├── index.html                      ← Entry point with meta tags and favicon
├── package.json                    ← Dependencies and scripts
├── vite.config.js                  ← Vite configuration
├── vercel.json                     ← Vercel SPA routing rules
├── public/
│   ├── logo.png                    ← Site favicon
│   ├── fonts/
│   │   └── Andres.ttf              ← Custom display font
│   └── projects/                   ← Project screenshots and logos
│       ├── byte-dental/
│       ├── kiru/
│       ├── deck-royale/
│       └── ...
├── src/
│   ├── main.jsx                    ← React root mount
│   ├── App.jsx                     ← Router, preloader, layout
│   ├── App.css                     ← Film strip borders, modal open state
│   ├── index.css                   ← Global CSS, fonts, color palette
│   ├── components/
│   │   ├── Dock/                   ← Fixed navigation (PC: right, Mobile: top bar)
│   │   ├── Hero/                   ← Hero section with clip-path name reveal
│   │   ├── Particles/              ← Floating ambient particles
│   │   └── Preloader/              ← Countdown preloader with film strips
│   ├── sections/
│   │   ├── Story/                  ← About Me (ACT II)
│   │   ├── Work/                   ← Main projects with carousel (ACT III)
│   │   ├── Craft/                  ← Tech Stack with react-icons (ACT IV)
│   │   ├── Interests/              ← Interests + floating music player (ACT V)
│   │   ├── Certifications/         ← Cisco badges (ACT VI)
│   │   └── Outro/                  ← Philosophy quote, footer, easter egg
│   └── pages/
│       └── Projects/               ← Extended projects page with modals
└── dist/                           ← Production build output
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19.2 |
| **Build Tool** | Vite 8.1 |
| **Routing** | React Router 7.18 |
| **Animation** | Framer Motion 12.42 |
| **Icons** | React Icons 5.7 (Simple Icons) |
| **Music API** | YouTube IFrame API |
| **Fonts** | Cormorant Garamond, Space Grotesk, JetBrains Mono, PT Serif, Andres (custom) |
| **Deployment** | Vercel |

---

## Authors

| Name | GitHub |
|---|---|
| **Camilo Andrés Arias Tenjo** | [@CamiloAT](https://github.com/CamiloAT) |

*Portfolio Development*
