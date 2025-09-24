# Shadojus Website

Eine moderne Next.js-Website mit Liquid Glass Design und Atomic Design Pattern - Zero Overhead Development.

## 🚀 Quick Start

```bash
# Development server starten
npm run dev

# Build für Produktion
npm run build

# Produktion lokal testen
npm start
```

Die Website läuft auf [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Atomic Design Pattern
```
components/
├── atoms/           # Grundlegende UI-Elemente
│   ├── Button.tsx
│   ├── Text.tsx
│   └── GlassCard.tsx
├── molecules/       # Kombinierte Komponenten
│   ├── Navigation.tsx
│   └── ProjectCard.tsx
└── organisms/       # Komplexe Sektionen
    ├── Hero.tsx
    ├── Projects.tsx
    └── Contact.tsx
```

### Liquid Glass Design
- **Glassmorphism:** `glass` className für transparente Elemente
- **Backdrop Blur:** Modernste CSS-Filter für Tiefeneffekt
- **Schwarzer Hintergrund:** Minimalistisch und elegant
- **Smooth Animations:** 300ms Transitions für alle Interaktionen

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Font:** Inter (optimiert)
- **Deployment:** Vercel

## 📁 Projektstruktur

```
website_shadojus/
├── app/                    # Next.js App Router
│   ├── globals.css        # Liquid Glass Styles
│   ├── layout.tsx         # Root Layout
│   └── page.tsx           # Homepage
├── components/            # Atomic Design Components
│   ├── atoms/            # Grundlegende Elemente
│   ├── molecules/        # Kombinierte Komponenten
│   └── organisms/        # Komplexe Sektionen
├── lib/                  # Utilities
│   └── utils.ts          # Helper Funktionen
└── public/               # Statische Assets
```

## 🎯 Zero Overhead Principles

1. **Minimale Dependencies:** Nur Next.js, React, TypeScript, Tailwind
2. **Atomic Design:** Wiederverwendbare, modulare Komponenten
3. **Performance First:** Optimierte Fonts, Images, Code Splitting
4. **Type Safety:** Vollständige TypeScript Integration
5. **Modern CSS:** Native CSS Features statt externe Libraries

## 🚀 Deployment

### Vercel (Empfohlen)
```bash
# GitHub Repository erstellen
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/shadojus/website.git
git push -u origin main

# Vercel Dashboard: Import Repository
# Automatisches Deployment startet
```

### Lokale Entwicklung
```bash
# Dependencies installieren
npm install

# Development server
npm run dev

# Linting
npm run lint
```

## 📊 Performance Features

- ✅ Next.js 15 App Router
- ✅ Automatic Code Splitting  
- ✅ Optimized Fonts (Inter)
- ✅ Tailwind CSS 4 (Minimaler Bundle)
- ✅ TypeScript (Type Safety)
- ✅ SEO Optimiert
- ✅ Responsive Design

## 🔧 Customization

### Farben anpassen
```css
/* app/globals.css */
.glass {
  background: rgba(255, 255, 255, 0.05); /* Transparenz */
  backdrop-filter: blur(16px);           /* Blur-Effekt */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Border */
}
```

### Neue Komponenten
```tsx
// components/atoms/NewAtom.tsx
interface NewAtomProps {
  children: React.ReactNode
  className?: string
}

export function NewAtom({ children, className = '' }: NewAtomProps) {
  return (
    <div className={`glass ${className}`}>
      {children}
    </div>
  )
}
```

## 📞 Kontakt

- **Email:** shadojus@gmail.com
- **Instagram:** [@shadojus](https://instagram.com/shadojus)
- **Website:** [shadojus.vercel.app](https://shadojus.vercel.app)

---

**Zero Overhead Development** - Effizient, Modern, Skalierbar! 🚀