# The Wedding Company – Frontend Developer Intern Assignment

> A pixel-perfect, interactive quiz application built with Next.js, TypeScript, and Tailwind CSS

[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://figma-to-nextjs-twc.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/BDhanush489/Figma-to-Nextjs-TWC)

---

## Table of Contents

- [Overview](#overview)
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Design Implementation](#design-implementation)
- [Performance & Optimization](#performance--optimization)
- [Accessibility](#accessibility)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Author](#author)

---

## Overview

This project is a **pixel-perfect frontend implementation** of a knowledge quiz application, built from the provided Figma design. It demonstrates:

- Accurate design replication
- Smooth animations and transitions
- Responsive and accessible UI
- Clean, maintainable code architecture
- Modern React patterns with TypeScript

**Assignment Goal:** Replicate the Figma mockup with precision, ensuring excellent UX, accessibility, and code quality.

---

## Demo

**Live Application:** [View Demo](https://figma-to-nextjs-twc.vercel.app/)

**GitHub Repository:** [View Code](https://github.com/BDhanush489/Figma-to-Nextjs-TWC)

---

## Features

### Core Functionality
- **Interactive Quiz System** - Multi-question quiz with real-time feedback
- **Score Tracking** - Animated counter that increments (0 → 1 → 2 → 3...)
- **Animated Results** - Confetti celebration with pop-in animations
- **Navigation** - Forward/backward question navigation
- **Restart Option** - Reset quiz and retake

### Design & UI
- **Pixel-Perfect Design** - 100% match with Figma specifications
- **Custom Gradients** - `#15313D → #3CABDA` gradient implementation
- **Typography** - DM Serif Display font as specified
- **Smooth Animations** - Hover effects, transitions, and confetti
- **Responsive Layout** - Optimized for all screen sizes

### Technical Excellence
- **Performance Optimized** - Fast load times, minimal bundle size
- **WCAG 2.1 Compliant** - Accessible to all users
- **TypeScript** - Type-safe code throughout

---

## Tech Stack

| Technology            | Version | Purpose                        |
|-----------------------|---------|--------------------------------|
| **Next.js**           | 14.x    | React framework with SSR/SSG   |
| **React**             | 18.x    | UI component library           |
| **TypeScript**        | 5.x     | Type safety and better DX      |
| **Tailwind CSS**      | 3.x     | Utility-first styling          |

---

## Project Structure
```
wedding-company-quiz/
├── app/
│   ├── layout.tsx           # Root layout with font configuration
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles and Tailwind imports
├── public/
│   ├── cat-paw.gif          # Animated decoration
│   └── favicon.ico          # Site favicon
├── .eslintrc.json           # ESLint configuration
├── tailwind.config.ts       # Tailwind customization
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/BDhanush489/Figma-to-Nextjs-TWC.git
   cd Figma-to-Nextjs-TWC
```

2. **Install dependencies**
```bash
   npm install
   # or
   yarn install
```

3. **Run development server**
```bash
   npm run dev
   # or
   yarn dev
```

4. **Open in browser**
```
   http://localhost:3000
```

### Build for Production
```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## 🎨 Design Implementation

### Color Palette
```css
Primary Dark:   #15313D
Primary Light:  #3CABDA
Background:     Linear gradient (sky-200 → blue-200 → sky-300)
Question Box:   rgba(60, 171, 218, 0.15)
```

### Typography
- **Heading:** DM Serif Display (90px on desktop, responsive scaling)
- **Body:** System fonts with Tailwind defaults
- **Font Weights:** Regular (400), Medium (500), Semibold (600)

### Key Design Details
- **Border Radius:** 40px for main container, 28px for options
- **Shadows:** Multi-layer shadows for depth
- **Spacing:** Consistent padding and margins matching Figma
- **Animations:** 
  - Score counter: 2-second increment animation
  - Confetti: 50 particles with random delays
  - Pop-in: Cubic-bezier easing for results screen

---

## Performance & Optimization

- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic route-based splitting
- **Tailwind JIT** - Just-in-time compilation for minimal CSS
- **Tree Shaking** - Unused code elimination
- **Lazy Loading** - Components loaded on demand
- **Minimal Bundle** - Optimized production build

### Performance Metrics
- Lighthouse Score: 95+ (target)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s

---

## Accessibility

### WCAG 2.1 AA Compliance
- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements
- Color contrast ratios meet standards (4.5:1 minimum)
- Screen reader friendly
- Alt text for images

---

**Deployment URL:** [Add your URL here]

---

## Author

**Boggarapu Dhanush**

- GitHub: [@BDhanush489](https://github.com/BDhanush489)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## Assignment Details

**Company:** The Wedding Company  
**Position:** Frontend Developer Intern  
**Submission Date:** December 2024  
**Email Subject:** Frontend Intern Application - Boggarapu Dhanush

---

## Acknowledgements

Thank you to **The Wedding Company** for this opportunity to showcase my frontend development skills. I look forward to discussing the implementation further during the interview.

---

## License

This project is created as part of a job application assignment.

---

<div align="center">
  <strong>Built with ❤️ by Boggarapu Dhanush</strong>
</div>