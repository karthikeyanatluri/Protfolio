# Karthikeyan Atluri – Personal Portfolio

An interactive, high-performance personal portfolio website built with modern web technologies, 3D WebGL glass physics, and a cinematic dark/crimson glassmorphic aesthetic.

## 🚀 Built With

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **3D Graphics & Physics:** [Three.js](https://threejs.org/) (Interactive glass shards, WebGL starfield, real-time lighting shaders)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [GSAP](https://greensock.com/gsap/) (ScrollTrigger, ticker physics) & [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```
├── public/
│   ├── assets/
│   │   ├── hero-red-bg.jpg       # 16:9 cinematic hero background portrait
│   │   ├── icon.svg              # Brand vector logo
│   │   └── thumbnails/           # 1280x720 16:9 project showcase artwork (18 files)
│   ├── media/
│   │   ├── profile.webp          # 4:5 vertical about portrait
│   │   └── profile.jpg           # High-resolution master portrait
│   ├── favicon.ico               # Multi-resolution favicon
│   ├── favicon.svg               # Vector SVG favicon
│   ├── robots.txt                # Crawler directives
│   └── sitemap.xml               # Search engine index
├── src/
│   ├── components/               # UI & 3D Interactive Components
│   │   ├── About.tsx             # Biography, education, experience, & credentials overview
│   │   ├── Certifications.tsx    # Categorized credentials showcase with filter pills
│   │   ├── Contact.tsx           # Contact form, direct WhatsApp, call & social cards
│   │   ├── Footer.tsx            # Navigation, copyright, & social links
│   │   ├── GlitchLoader.tsx      # Accelerated progress countdown preloader
│   │   ├── Hero.tsx              # 3D interactive glass shards & headline
│   │   ├── heroShards.ts         # Math, polygons, and spring physics for 3D shards
│   │   ├── Navbar.tsx            # Responsive glass navigation bar
│   │   ├── ParticleField.tsx     # 3D WebGL particle space
│   │   ├── Projects.tsx          # 3D project cards with liquid glass shader
│   │   ├── Services.tsx          # Technical services showcase
│   │   ├── Skills.tsx            # Technical capabilities & category matrix
│   │   ├── SoftwareStrip.tsx     # Infinite tech stack strip with SVG icons
│   │   ├── SparkCursor.tsx       # Interactive 2D spark & lighting cursor
│   │   ├── Stats.tsx             # Animated counter metrics
│   │   ├── techIcons.ts          # Official brand vector paths for tech stack
│   │   ├── VenomButton.tsx       # Liquid fluid-mechanics button
│   │   └── VideoModal.tsx        # Project detail modal & gallery player
│   ├── data/
│   │   └── portfolioData.ts      # Centralized personal info, projects & content
│   ├── lib/
│   │   └── venomEngine.ts        # Venom button simulation engine
│   ├── App.tsx                   # Main layout container
│   ├── index.css                 # Global styles, glassmorphism & shader utilities
│   └── main.tsx                  # App entrypoint
├── index.html                    # HTML shell with meta tags & preconnects
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript compiler options
└── vite.config.ts                # Vite build configuration
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18.0.0 or later)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
# Type check and build minified production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 👤 Author

**Karthikeyan Atluri**
- **Role:** Aspiring Software Engineer | AI & Emerging Technologies | Innovation & Leadership
- **College:** Siddhartha Academy of Higher Education, Vijayawada
- **GitHub:** [@karthikeyanatluri](https://github.com/karthikeyanatluri)
- **LinkedIn:** [karthikeyan-atluri](https://www.linkedin.com/in/karthikeyan-atluri-604ba9315/)
- **Email:** [atlurikarthik2@gmail.com](mailto:atlurikarthik2@gmail.com)
