# Pentakota Niharika — Portfolio Website

A premium, responsive personal portfolio website for Pentakota Niharika, a Computer Science and Information Technology (CSIT) B.Tech student at Lendi Institute of Engineering & Technology, affiliated with JNTU.

## Features

- **Premium dark theme** with black, deep navy, and violet gradient accents
- **Glassmorphism** UI cards with subtle glow effects
- **Fully responsive** — desktop, tablet, and mobile
- **Smooth scrolling** with scroll-reveal animations
- **Mobile navigation** menu with hamburger toggle
- **Scroll progress bar** and active section highlighting
- **Accessible** — semantic HTML, ARIA labels, keyboard-friendly

## Sections

1. **Hero** — Name, headline, intro, profile photo, CTA buttons, social links
2. **About Me** — Professional student introduction with key highlights
3. **Skills** — Programming (C, Java, Python) and Web Development (HTML, CSS)
4. **Featured Projects** — SwasthyaPath, AgriCircular, Bulk Certificate Generator
5. **Education** — Academic timeline with CGPA and percentages
6. **Certifications & Workshops** — Google AI, Microsoft Cloud, Cisco, Scaler, and more
7. **Achievements & Activities** — Hackathons, workshops, showcases
8. **Contact** — Contact info cards + form UI (demo mode)
9. **Footer** — Name, quick links, social icons, copyright

## Tech Stack

- **React 18** with TypeScript
- **Vite** as the build tool
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build

```bash
npm run build
```

This generates a `dist/` folder with the production build.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Profile Photo

Add your photo at `public/images/profile.jpg`. Until then, a graceful fallback with your initials ("PN") is shown.

### Resume

Add your resume as `public/resume.pdf`. The "Download Resume" button will download it automatically. Until then, an alert is shown.

### Personal Information

All content is centralized in `src/data/portfolio.ts`. Edit this file to update:
- Name, headline, introduction
- Social links (GitHub, LinkedIn)
- Skills
- Projects
- Education
- Certifications
- Achievements
- Contact info

### SEO Metadata

Edit the `<meta>` tags in `index.html` to update the page title, description, and social sharing metadata.

## Deployment on Netlify

### Option 1: Drag and Drop

1. Run `npm run build`
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag the `dist/` folder onto the Netlify dashboard

### Option 2: Git-based Deployment

1. Push this project to a GitHub repository
2. Go to [app.netlify.com](https://app.netlify.com) and click "Add new site" → "Import an existing project"
3. Connect your GitHub account and select the repository
4. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy"

### Netlify Configuration

A `netlify.toml` file is included with the correct build settings and SPA redirect rules.

## Exporting the Source Code

To download the complete source code:

1. If using a git repository, clone or download the ZIP from GitHub
2. If working locally, copy the entire project folder
3. The essential files are all source files under `src/`, configuration files (`package.json`, `vite.config.ts`, `tailwind.config.js`, `tsconfig.json`), `index.html`, and `public/`

## Project Structure

```
.
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   └── README.md          # Add profile.jpg here
│   └── RESUME_PLACEHOLDER.txt  # Add resume.pdf here
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionHeading.tsx
│   │   └── SocialLinks.tsx
│   ├── data/
│   │   └── portfolio.ts        # All editable content
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── netlify.toml
```

## License

Personal portfolio for Pentakota Niharika. All rights reserved.
