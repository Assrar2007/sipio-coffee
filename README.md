# SIPIO COFFEE — Premium Cinematic Coffee Brand Website

> An elite, award-winning specialty coffee web experience featuring a 300-frame scroll-linked cinematic cold pour animation, editorial luxury typography, responsive craft menu, and persistent shopping cart.

![SIPIO Coffee Banner](public/assets/10-three-drink-footer.webp)

---

## ✨ Key Features

- ☕ **300-Frame Scroll-Linked Hero Canvas**: Interactive coffee animation mapped seamlessly to scroll progress (0% $\rightarrow$ Frame 001, 100% $\rightarrow$ Frame 300).
- 🎨 **Luxury Editorial Design System**: Curated color palette (Dark Espresso `#171008`, Warm Caramel `#D8781E`, Amber `#E48A2A`, Warm Cream `#FFF4E5`, Soft Beige `#F1E2CF`).
- ✍️ **Sophisticated Typography**: Bebas Neue display headlines paired with Manrope and Inter contemporary sans-serif.
- 🛒 **Functional Shopping Bag**: Persistent cart with quantity adjustments, free shipping progress tracker, and confetti-powered checkout modal.
- 📖 **The Art of Brewing**: 4-phase interactive brewing journey showcasing single-origin sourcing, micro-roasting, 9-bar extraction, and cold pour ceremony.
- ⭐ **Customer Reviews Carousel**: Interactive testimonials carousel with star ratings, drink tags, keyboard arrow navigation, and touch swipe.
- 📱 **Fully Responsive**: Optimized for ultra-wide desktop (1440px+), laptop, tablet, and mobile with a fluid slide-out drawer menu.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Vanilla Tailwind CSS v3](https://tailwindcss.com/)
- **Animation & Transitions**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Celebration**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Assrar2007/sipio-coffee.git
cd sipio-coffee

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Building for Production

```bash
npm run build
```

The production assets will be generated in `dist/`.

---

## 🌐 Deploy to GitHub Pages

### Automatic Deployment (GitHub Actions)
Pushing to the `main` branch automatically triggers `.github/workflows/deploy.yml` which builds and publishes the website to GitHub Pages.

### Manual Deployment
```bash
npm run deploy
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
