# 🖥️ Dhirendra Jha — Personal Portfolio

Welcome to the repository of **Dhirendra Jha**, a Senior Software Engineer specializing in Distributed Backend Systems, High-Throughput Automation Platforms, and Offline-First Architectures. 

This portfolio is designed to be minimal, lighting-fast, and interactive, utilizing modern React design patterns, Tailwind CSS styling, and fluid motion-based micro-interactions.

---

## 🚀 Key Features

* **⚡ Clean & Modular Architecture:** The codebase has been fully refactored into isolated components, layout systems, custom hooks, and sections.
* **🎨 Premium Aesthetic & Transitions:** Styled with a curated monochrome HSL palette, dark/light modes, custom **Amiamie** premium typography, and buttery-smooth `250ms` transitions.
* **✨ Framer Motion Animations:**
  * **Typewriter Loop:** Smoothly cycles between headlines ("Senior Software Engineer", "Distributed Systems Builder", "Automation Specialist", "Offline-First Architect").
  * **Interactive Badges:** Spring-scale physics when filtering tech stacks.
  * **Details Accordion:** Architectural and engineering breakdowns expand with custom height animation bounds.
  * **Milestone Viewports:** Education and experience timelines fade and slide up dynamically as you scroll.
* **🔍 Search & Filter Dashboard:** Dedicated projects explorer `/projects` featuring a live-search text box and interactive categorizer tabs (All / Official / Personal) with count badges.
* **🕰️ IST Live Ticking Clock:** A real-time digital clock widget displaying Dhirendra's local timezone (Mumbai/Bangalore, India).
* **📊 GitHub Activity Board:** Asynchronously displays public contribution statistics for the last 365 days (via Github Contributions API) with a deterministic fallback vector.
* **📈 Visitor Telemetry:** Seamlessly integrated with `@vercel/analytics` to monitor visits and traffic statistics.

---

## 🛠️ Tech Stack & Dependencies

* **Core Framework:** React 19 + Vite 6
* **Router:** React Router DOM v7 (supports deep routes for `/projects` and `/experience`)
* **Styling:** Tailwind CSS v4 + Vanilla CSS custom variables (`--bg`, `--fg`, `--card`, etc.)
* **Animations:** Framer Motion v12
* **Icons:** Iconify via `@iconify/react` (for official brand SVGs like Python, Django, Docker, Go, etc.)
* **Analytics:** `@vercel/analytics`

---

## 📂 Directory Structure

```text
├── public/
│   ├── fonts/amiamie/      # Amiamie regular, italic, bold, ttf & otf fonts
│   ├── images/
│   │   ├── cover.jpg       # Steve Jobs at desk header cover image
│   │   └── profile.jpg     # Developer Sherlock avatar image
│   ├── CV_Dhirendra.pdf    # Senior Developer Resume
│   ├── d.svg               # Site Favicon icon
│   ├── sitemap.xml         # SEO search index file
│   └── robots.txt          # SEO crawler rules
├── src/
│   ├── components/
│   │   └── Layout.jsx      # Reusable Shell, SectionHeader, and GapBand elements
│   ├── data/
│   │   └── onyxData.js     # Single source of truth containing copy, milestones, and data
│   ├── hooks/
│   │   ├── useGithubHeatmap.js # Async Github Contributions board data fetch hook
│   │   └── useLocalTime.js # Indian Standard Time ticking clock state hook
│   ├── sections/
│   │   ├── About.jsx       # About paragraph animations
│   │   ├── Contact.jsx     # Contact links grid & resume download actions
│   │   ├── Experience.jsx  # Experience & Education timelines
│   │   ├── GithubActivity.jsx  # Year commit contribution grid
│   │   ├── Hero.jsx        # Banner, Avatar, Name, Location & Typewriter loop
│   │   ├── ProjectCard.jsx # Accordion card containing code repositories
│   │   ├── Projects.jsx    # Project list view & textual search explorer
│   │   └── TechStack.jsx   # Filterable skill badges with brand SVG logos
│   ├── utils/
│   │   └── cn.js           # Classnames utility helper to prevent Fast Refresh lints
│   ├── App.jsx             # Vercel analytics setup & React Router routing mapping
│   ├── OnyxPortfolio.jsx   # Main Portfolio Shell containing header navigation and global themes
│   ├── index.css           # Custom font faces, global color variables, and transition styles
│   └── main.jsx            # Application entrypoint
├── index.html              # Core HTML file containing SEO tags and metadata
├── vite.config.js          # Vite bundler parameters
└── package.json            # Configuration and dependencies
```

---

## 💻 Getting Started

Follow these steps to run the portfolio on your local machine:

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### 2. Clone the Repository
```bash
git clone https://github.com/dhirendraj-cmd/my-portfolio.git
cd my-portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to see the site.

### 5. Build for Production
Create an optimized production bundle inside the `dist/` directory:
```bash
npm run build
```

### 6. Lint the Codebase
Analyze and format codebase syntax rules:
```bash
npm run lint
```

---

## 📈 Deployment & Analytics

This portfolio is configured for deployment on **Vercel** with automatic analytics tracking:
* Deploying can be done by pushing to GitHub and linking to a Vercel project, or by using the Vercel CLI:
  ```bash
  vercel --prod
  ```
* Ensure you enable **Vercel Analytics** in your project dashboard so that `@vercel/analytics` tracks real-time traffic statistics.

---

## 📬 Contact & Links

* **Domain:** [https://dhirendrajha.tech](https://dhirendrajha.tech)
* **GitHub:** [@dhirendraj-cmd](https://github.com/dhirendraj-cmd)
* **LinkedIn:** [dhirendra-jha](https://www.linkedin.com/in/dhirendra-jha-384351174)
* **Email:** djha5051@gmail.com
* **Twitter/X:** [@Dhirend78495000](https://x.com/Dhirend78495000)
