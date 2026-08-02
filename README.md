# Dhirendra Jha - Portfolio Engineering and Architecture

Technical documentation for Dhirendra Jha's professional portfolio application. The project is implemented as an optimized, responsive React Single Page Application (SPA) powered by Vite, Tailwind CSS, and Framer Motion.

---

## Architectural Overview

The codebase is structured according to modular frontend design principles, separating structural components, data configurations, business logic (custom hooks), and presentation layers (sections).

### Directory Structure

```text
├── public/
│   ├── fonts/amiamie/      # Amiamie typography files (Regular, Italic, Light, Black)
│   ├── images/
│   │   ├── cover.jpg       # Background banner cover image
│   │   └── profile.jpg     # Developer profile avatar image
│   ├── CV_Dhirendra.pdf    # Senior Developer resume (PDF format)
│   ├── d.svg               # Site Favicon asset
│   ├── sitemap.xml         # SEO search index parameters
│   └── robots.txt          # Web crawler directory access rules
├── src/
│   ├── components/
│   │   └── Layout.jsx      # Shared structural layout components (Shell, SectionHeader, GapBand)
│   ├── data/
│   │   └── onyxData.js     # Centralized configuration file (profile, projects, experience history)
│   ├── hooks/
│   │   ├── useGithubHeatmap.js # Handles asynchronous Git contributions data fetch
│   │   └── useLocalTime.js # State-driven clock hook synced to Asia/Kolkata local time
│   ├── sections/
│   │   ├── About.jsx       # About summary section viewport layout
│   │   ├── Contact.jsx     # Contact links grid and resume actions
│   │   ├── Experience.jsx  # Career history and education timelines
│   │   ├── GithubActivity.jsx  # Git contributions calendar grid
│   │   ├── Hero.jsx        # Cover banner, profile image, and title loop animations
│   │   ├── ProjectCard.jsx # Expandable project cards with engineering detail accordions
│   │   ├── Projects.jsx    # Projects search and dashboard filtering layout
│   │   └── TechStack.jsx   # Tabbed technical skillset view with brand SVG graphics
│   ├── utils/
│   │   └── cn.js           # Lightweight classnames merger helper
│   ├── App.jsx             # Vercel Analytics integration and path routing configuration
│   ├── OnyxPortfolio.jsx   # Core interface shell coordinating routes and dark/light themes
│   ├── index.css           # Global typography definitions, Tailwind directives, and transition variables
│   └── main.jsx            # Application mount entry point
├── index.html              # Entry HTML document containing search indexing meta headers
├── vite.config.js          # Vite bundler parameters
└── package.json            # Script definitions and dependency trees
```

---

## Key Technical Implementations

### 1. State-Driven Title Loop
The title loop in the Hero section displays rotation metrics between developer roles utilizing React lifecycle hooks (`useEffect`) and custom Framer Motion spring fades to prevent layout shifts.

### 2. Client-Side Search and Project Filtering
The projects dashboard (`/projects`) incorporates a real-time regex search index filtering project entries based on title, description, category, and technologies. Active project counters update in sync with selection tabs (All, Official, Personal).

### 3. Dynamic Theme Synchronization
The theme context state reads and persists values to `localStorage`. Fallback settings dynamically respect the visitor's OS configuration through the `window.matchMedia("(prefers-color-scheme: dark)")` browser query. Color channels, backgrounds, and borders transition concurrently over a 250ms interval.

### 4. Fully Responsive Layout Grid
Responsive layouts are configured via mobile-first Flexbox and CSS Grid layers:
* **Identity Header:** Stacks vertically on mobile viewports for optimal spacing and aligns horizontally on tablet/desktop displays.
* **Contacts Interface:** Refactored into a custom grid structure (`grid-cols-2` scaling to `sm:grid-cols-5`) that implements responsive border rules to resolve duplicate borders and wrapping issues.
* **Search dashboard:** Input parameters scale dynamically (`w-full sm:max-w-xs`) across different device breakpoints.

### 5. Git Contribution Calendar
The Git contribution module fetches yearly commit stats asynchronously from the GitHub API and renders them in a grid. A deterministic fallback matrix loads immediately if API request latency is encountered.

---

## Technical Stack and Dependencies

* **Core Library:** React 19 + Vite 6
* **Routing Module:** React Router DOM v7 (coordinating `/`, `/projects`, and `/experience` endpoints)
* **Styling Engine:** Tailwind CSS v4 + custom HSL CSS variables
* **Animation Library:** Framer Motion v12
* **Icon Provider:** Iconify framework (loading brand SVGs matching logo specifications)
* **Visitor Tracking:** Vercel Web Analytics

---

## Developer Guide

Follow these steps to configure your local development environment:

### Prerequisites
* **Node.js** (v18.0.0 or higher)
* **npm** (v9.0.0 or higher)

### Setup Instructions
1. Install project dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Compile the application into an optimized production bundle:
   ```bash
   npm run build
   ```
4. Run ESLint code checks:
   ```bash
   npm run lint
   ```

---

## Deployment Parameters

The application is deployed on Vercel. Ensure Web Analytics tracking is enabled in your project's dashboard to gather real-time performance telemetry. For manual CLI deployments, run:
```bash
vercel --prod
```
