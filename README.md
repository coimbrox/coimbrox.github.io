# 🚀 Gabriel Coimbra - Portfolio

[![Deploy to GitHub Pages](https://github.com/coimbrox/coimbrox.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/coimbrox/coimbrox.github.io/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://coimbrox.github.io/)

> Modern and responsive portfolio website showcasing my journey as a FullStack Developer, Data Enthusiast, and Flutter Developer.

## 🌟 Features

- **Modern UI/UX** - Clean and professional design
- **Fully Responsive** - Optimized for all devices
- **Dark/Light Theme** - Theme switching capability
- **Smooth Animations** - Interactive elements with CSS animations
- **TypeScript** - Type-safe development
- **Performance Optimized** - Fast loading times
- **SEO Friendly** - Optimized for search engines

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** CSS Animations + Lucide Icons
- **Deployment:** GitHub Pages with GitHub Actions

## 📱 Sections

- **Hero** - Introduction with animated typewriter effect
- **About** - Personal background and interests
- **Skills** - Technical skills and expertise
- **Experience** - Professional journey
- **Projects** - Portfolio of work and achievements
- **Contact** - Get in touch information

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/coimbrox/coimbrox.github.io.git
   cd coimbrox.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   ```
   http://localhost:8080
   ```

## 📦 Build & Deploy

### Local Build

```bash
npm run build
npm run preview
```

### GitHub Pages Deployment

This project automatically deploys to GitHub Pages via GitHub Actions:

1. **Push to main branch** triggers automatic deployment
2. **Built files** are generated and deployed
3. **Live site** available at https://coimbrox.github.io/

## 🎨 Customization

### Colors & Theme

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: "your-primary-color",
      secondary: "your-secondary-color",
      // ... more colors
    }
  }
}
```

### Content

- **Personal Info:** Update `src/components/sections/Hero.tsx`
- **About Section:** Modify `src/components/sections/About.tsx`
- **Skills:** Edit `src/components/sections/Skills.tsx`
- **Projects:** Update `src/components/sections/Projects.tsx`

### Assets

Replace images in `src/assets/` with your own:
- `gabriel-avatar.jpg` - Your profile picture

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size:** < 200KB (gzipped)
- **First Contentful Paint:** < 1.5s

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Gabriel Coimbra**
- **Website:** [coimbrox.github.io](https://coimbrox.github.io/)
- **LinkedIn:** [coimbrawebs](https://www.linkedin.com/in/coimbrawebs/)
- **GitHub:** [coimbrox](https://github.com/coimbrox)
- **Email:** coimbrawebs@gmail.com

---

⭐ **If you found this portfolio inspiring, please give it a star!**

Made with ❤️ by [Gabriel Coimbra](https://github.com/coimbrox)