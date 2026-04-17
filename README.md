# 🛡️ 3D Cybersecurity Portfolio - Shreyas Ghevariya

> A highly-interactive, Cyberpunk-themed 3D portfolio designed to showcase high-level penetration testing, SOC operations, and enterprise cybersecurity experience. 

![Portfolio Cyberpunk Theme](https://img.shields.io/badge/Theme-Cyberpunk_Hologram-00ff41?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech_Stack-React_19_|_Vite-61dafb?style=for-the-badge&logo=react)
![Deployment](https://img.shields.io/badge/Deployed-GitHub_Pages-black?style=for-the-badge&logo=github)

### 🌐 Live Deployment
**🔗 [INITIALIZE CONNECTION -> View Live Portfolio](https://Shreyas1214.github.io/portfolio)**

---

## 💻 Elite Cyber Security Aesthetic

The UI has been massively overhauled from standard web templates into an amazing **3D Hologram Hacker** interface. Key visual technology includes:

- **Hologram Glitches & Overlays**: Full viewport CRT scanlines combined with synchronized multi-opacity flicker animations mapping to the frame render.
- **3D Interactive Cyberspace**: Utilizing complex pure CSS perspective matrix grids that natively respond to `mouseX` and `mouseY` inputs, simulating an active virtual topology floating in Z-space.
- **Scroll Parallax Bindings**: As the user scrolls, Javascript bindings hook into the viewport offset and calculate inverse geometric pushbacks into the screen (`Z-translation`)—resulting in an environment that physically shifts away as you read logs.
- **Glitch Fonts**: True chromatic aberration with Text Shadows simulating anaglyph red/cyan displacement, along with pseudo-root terminal indicators (`>_`).
- **Glassmorphism Suspensions**: Utilizing `backdrop-filter: blur`, neon matrix glows, and deep drop shadows to simulate floating glass server plates over the primary framework.

## 🛠️ Architecture Core Layer

The system runs on an ultra-lightweight client-bound node hierarchy:
- **Build Engine**: Vite (Rapid HMR and compilation)
- **Frontend Stack**: React 19 + Vanilla CSS (No heavy component libraries slowing down the payload!)
- **Data Integration**: A centralized `resumeData.js` object that routes directly to structural templates.

## 🚀 Environment Initialization (Local Deployment)

Clone this framework locally to explore the parallax functions or modify variables.

### Boot Sequence
1. Clone the repository locally:
   ```bash
   git clone https://github.com/Shreyas1214/portfolio.git
   cd portfolio
   ```
2. Install NodeJS Dependencies:
   ```bash
   npm install
   ```
3. Boot Local Hosted Instance:
   ```bash
   npm run dev
   ```
   Navigate to your local port: `http://localhost:5173`.

## 📦 Master Deployment (Origin -> GitHub Pages)

The framework has been perfectly tuned to deploy natively to `gh-pages` with automated bypassing of standard GitHub indexing rules. 

**Deployment Process:**
If you change your internal resume data inside `src/resumeData.js`, you simply need to run:
```bash
npm run deploy
```

**What this does:**
1. Triggers `Vite Build` producing an optimized footprint inside `./dist`.
2. Packages the `.nojekyll` protection file to prevent the GitHub Pages engine from stripping bundled javascript routing files from existence.
3. Automatically commits the payload directly over the Origin remote into the `gh-pages` branch!

---
*Developed & Maintained securely by [Shreyas Ghevariya](https://www.linkedin.com/in/shreyas-ghevariya/)*
