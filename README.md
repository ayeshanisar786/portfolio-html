# Noor Tahir - Portfolio Website

A stunning, production-ready portfolio website showcasing the work of Noor Tahir, a professional Graphic Designer and 3D Animator.

## Features

- **Modern Design**: Clean, minimal design with lots of whitespace and premium feel
- **Smooth Animations**: Premium animations powered by Framer Motion
- **Smooth Scrolling**: Buttery smooth scrolling experience with Lenis
- **Custom Cursor**: Interactive custom cursor that responds to hover states
- **Loading Screen**: Elegant loading animation on initial page load
- **Scroll Progress**: Visual progress indicator at the top of the page
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Performance Optimized**: Lazy loading, image optimization, and 60fps animations
- **Premium Typography**: Space Grotesk and Instrument Serif fonts
- **Grain Texture**: Subtle grain overlay for that designer portfolio feel

## Sections

1. **Hero** - Animated introduction with parallax scrolling
2. **About** - Experience, education, and skills
3. **Logofolio** - Collection of 16 logo designs with hover animations
4. **Branding** - Case studies for Intagleo Systems, BP Spacer, and LimeLight
5. **Work** - Categorized portfolio including:
   - Book Illustrations
   - Digital Art
   - UI/UX Design
   - 3D Posters
   - Game Design
6. **Contact** - Get in touch section with social links

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Language**: TypeScript
- **Fonts**: Space Grotesk, Instrument Serif (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ayeshanisar786/portfolio-html.git
cd portfolio-html
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-html/
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page composition
├── components/
│   ├── About.tsx             # About section
│   ├── Branding.tsx          # Branding projects
│   ├── Contact.tsx           # Contact section
│   ├── CustomCursor.tsx      # Custom cursor component
│   ├── Hero.tsx              # Hero section
│   ├── LoadingScreen.tsx     # Loading animation
│   ├── Logofolio.tsx         # Logo showcase
│   ├── Navigation.tsx        # Navigation bar
│   ├── ScrollProgress.tsx    # Progress bar & back-to-top
│   ├── SmoothScroll.tsx      # Lenis smooth scroll wrapper
│   └── Work.tsx              # Work showcase with filters
└── public/
    └── images/               # All portfolio images
        ├── logos/
        ├── branding/
        ├── illustrations/
        ├── digital-art/
        ├── ui-ux/
        ├── posters/
        └── game/
```

## Design Features

### Animations
- Scroll-triggered animations with Framer Motion
- Staggered element reveals
- Parallax scrolling effects
- Hover interactions on all interactive elements
- Magnetic button effects
- Image reveal animations

### Micro-Interactions
- Button press feedback
- Link underline slide animations
- Scroll indicator on hero
- Custom cursor shape changes
- Number count-up animations
- Smooth page transitions

### Performance
- Lazy loading for all images
- Optimized images for web
- 60fps animations
- Fast initial load with code splitting

## License

All design work and images are © Noor Tahir. All rights reserved.

Website code is for portfolio purposes.

---

**Designed & Developed with passion by Noor Tahir**
