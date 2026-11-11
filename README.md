# Bennit Strack — Personal Portfolio & Projects

[![Live Demo](https://img.shields.io/badge/Live_Website-bennit99.github.io%2FMyWebsite-00DC82?style=for-the-badge&logo=googlechrome&logoColor=white)](https://bennit99.github.io/MyWebsite/)
[![Deploy Status](https://img.shields.io/github/actions/workflow/status/Bennit99/MyWebsite/deploy.yml?branch=main&label=Deploy%20Pages&style=for-the-badge)](https://github.com/Bennit99/MyWebsite/actions)
[![Vue.js](https://img.shields.io/badge/Vue.js_3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

> **Live Website:** [https://bennit99.github.io/MyWebsite/](https://bennit99.github.io/MyWebsite/)  
> **Download CV:** [Bennit_Strack_CV.pdf](https://bennit99.github.io/MyWebsite/Bennit_Strack_CV.pdf)

Welcome to the repository for my personal developer portfolio and software showcase. This site presents an overview of my background as an M.Sc. Wirtschaftsinformatiker / Software Engineer, featuring highlighted software engineering and data science projects, technical skills, and direct contact options.

---

## 🚀 Features

- **⚡ Modern Stack:** Built with Vue 3 (Composition API `<script setup>`) and Vite for lightning-fast HMR and bundle optimization.
- **🎨 Sleek Dark UI:** Modern dark aesthetic styled with Tailwind CSS v4, custom gradient accents, backdrop blurs, and glow effects.
- **📱 Fully Responsive:** Optimized layout across mobile, tablet, and widescreen desktop displays.
- **📂 Project Showcase:** Filterable project cards detailing key technologies, system architectures, and live/demo links.
- **📄 Public CV Download:** Direct access to my curriculum vitae (PDF) with base-path-aware routing.
- **🔒 Privacy-Focused Analytics:** Integrated with [Umami](https://umami.is/) for lightweight, cookie-free visitor insights.
- **🤖 Automated CI/CD:** Fully automated builds and deployment to GitHub Pages via GitHub Actions on every push to `main`.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Vue 3](https://vuejs.org/) (Composition API) |
| **Bundler & Dev Server** | [Vite 6](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Icons** | [Simple Icons](https://simple-icons.github.io/) |
| **Analytics** | [Umami Analytics](https://cloud.umami.is/) |
| **Hosting & CI/CD** | [GitHub Pages](https://pages.github.com/) via [GitHub Actions](https://github.com/features/actions) |

---

## 📁 Project Structure

```text
MyWebsite/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment to GitHub Pages
├── public/
│   ├── images/                 # Project screenshots and assets
│   ├── Bennit_Strack_CV.pdf    # Current Curriculum Vitae
│   └── wip.html                # Placeholder page for ongoing projects
├── src/
│   ├── assets/
│   │   └── main.css            # Tailwind theme, utility classes, and glows
│   ├── components/
│   │   ├── AppHeader.vue       # Sticky glassmorphism navigation bar
│   │   ├── AppFooter.vue       # Footer with copyright and credits
│   │   ├── HeroSection.vue     # Bio, skill tags, contact & CV download CTA
│   │   ├── ProjectCard.vue     # Individual interactive project card
│   │   └── ProjectGrid.vue     # Responsive grid container for projects
│   ├── data/
│   │   └── projects.js         # Project metadata, tags, and links
│   ├── App.vue                 # Root application component
│   └── main.js                 # App initialization
├── index.html                  # HTML entry point with meta tags & analytics
├── vite.config.js              # Vite configuration (base path & plugins)
└── package.json                # Project dependencies and npm scripts
```

---

## 💻 Local Development

To run and preview this project locally, ensure you have **Node.js** (v18+) and **npm** installed.

### 1. Clone the repository
```bash
git clone https://github.com/Bennit99/MyWebsite.git
cd MyWebsite
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open your browser and navigate to the local URL (typically `http://localhost:5173/MyWebsite/`).

### 4. Build for production
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory.

### 5. Preview production build locally
```bash
npm run preview
```

---

## 🚢 Deployment

Deployment is completely automated. Whenever changes are merged or pushed to the `main` branch, the GitHub Actions workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) will:
1. Check out the repository.
2. Install dependencies with `npm ci`.
3. Build the project via `npm run build`.
4. Deploy the contents of `dist/` directly to **GitHub Pages**.

---

## 📬 Contact & Connect

- **Website:** [bennit99.github.io/MyWebsite/](https://bennit99.github.io/MyWebsite/)
- **LinkedIn:** [linkedin.com/in/bennit-strack/](https://www.linkedin.com/in/bennit-strack/)
- **GitHub:** [@Bennit99](https://github.com/Bennit99)
- **Email:** [bennit.strack@gmail.com](mailto:bennit.strack@gmail.com)

---

© 2026 Bennit Strack. All rights reserved.
