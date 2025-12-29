# ContentSpark - AI-Powered Social Media Content Generation

A stunning, asymmetric landing page built with Next.js 15, showcasing ContentSpark - an AI tool for social media content generation.

## 🚀 Features

- **Modern Asymmetric Design** - No traditional centered layouts, everything is edgy and unique
- **Glassmorphism Effects** - Beautiful frosted glass UI elements throughout
- **Smooth Animations** - Framer Motion animations on scroll, hover, and interactions
- **Dark Mode** - Toggle between light and dark themes with next-themes
- **Fully Responsive** - Mobile-first design that works on all devices
- **Waitlist Integration** - Email validation with Zod and localStorage persistence
- **Performance Optimized** - Built for Lighthouse 95+ scores

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui components
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Fonts:** Geist Sans + Geist Mono
- **Validation:** Zod

## 📦 Installation

1. **Download and install:**
   ```bash
   npx shadcn@latest add https://v0.app/YOUR_PROJECT_URL
   ```

2. **Or manually install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🎨 Design Philosophy

This landing page breaks all traditional design rules:
- **No centered hero sections** - Diagonal split-screen layout
- **Overlapping elements** - Cards and components layer over each other
- **Staggered grids** - Asymmetric card layouts with varying sizes
- **Chaotic testimonials** - Post-it style overlapping quotes
- **Diagonal timelines** - Zigzag flow for "How It Works"
- **Neon accents** - Glowing borders and shadows throughout

## 📄 Structure

```
app/
├── page.tsx              # Main landing page
├── layout.tsx            # Root layout with fonts and metadata
└── globals.css           # Global styles and design tokens

components/
├── header.tsx            # Asymmetric navigation
├── hero.tsx              # Diagonal split hero section
├── features.tsx          # Overlapping feature cards
├── how-it-works.tsx      # Zigzag timeline
├── pricing.tsx           # Staggered pricing cards
├── testimonials.tsx      # Horizontal scrolling testimonials
├── faq.tsx               # Split layout accordion
├── final-cta.tsx         # Full bleed CTA
├── footer.tsx            # Asymmetric footer
├── waitlist-form.tsx     # Email form with validation
├── theme-provider.tsx    # Theme context
└── theme-toggle.tsx      # Dark mode toggle
```

## 🎯 Performance

- Optimized images with next/image
- Lazy loading animations
- Minimal JavaScript bundle
- Server components where possible
- Built for 95+ Lighthouse scores

## 📝 License

MIT - Feel free to use this for your own projects!

---

Built with ❤️ using v0.app
