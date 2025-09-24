# Shadojus Website# Shadojus Website



Eine moderne Next.js-Website mit Liquid Glass Design und Atomic Design Pattern - Zero Overhead Development.Eine moderne Next.js-Website mit Liquid Glass Design und Atomic Design Pattern - Zero Overhead Development.



## 🚀 Quick Start## 🚀 Quick Start



```bash```bash

# Development server starten# Development server starten

npm run devnpm run dev



# Build für Produktion# Build für Produktion

npm run buildnpm run build



# Produktion lokal testen# Produktion lokal testen

npm startnpm start

``````



Die Website läuft auf [http://localhost:3000](http://localhost:3000)Die Website läuft auf [http://localhost:3000](http://localhost:3000)



## 🎨 Design System## 🎨 Design System



### Atomic Design Pattern### Atomic Design Pattern

``````

components/components/

├── atoms/           # Grundlegende UI-Elemente├── atoms/           # Grundlegende UI-Elemente

│   ├── Button.tsx│   ├── Button.tsx

│   ├── Text.tsx│   ├── Text.tsx

│   └── GlassCard.tsx│   └── GlassCard.tsx

├── molecules/       # Kombinierte Komponenten├── molecules/       # Kombinierte Komponenten

│   ├── Navigation.tsx│   ├── Navigation.tsx

│   └── ProjectCard.tsx│   └── ProjectCard.tsx

└── organisms/       # Komplexe Sektionen└── organisms/       # Komplexe Sektionen

    ├── Hero.tsx    ├── Hero.tsx

    ├── Projects.tsx    ├── Projects.tsx

    └── Contact.tsx    └── Contact.tsx

``````



### Liquid Glass Design### Liquid Glass Design

- **Glassmorphism:** `glass` className für transparente Elemente- **Glassmorphism:** `glass` className für transparente Elemente

- **Backdrop Blur:** Modernste CSS-Filter für Tiefeneffekt- **Backdrop Blur:** Modernste CSS-Filter für Tiefeneffekt

- **Schwarzer Hintergrund:** Minimalistisch und elegant- **Schwarzer Hintergrund:** Minimalistisch und elegant

- **Smooth Animations:** 300ms Transitions für alle Interaktionen- **Smooth Animations:** 300ms Transitions für alle Interaktionen



## 🛠️ Tech Stack## 🛠️ Tech Stack



- **Framework:** Next.js 15 (App Router)- **Framework:** Next.js 15 (App Router)

- **Styling:** Tailwind CSS 4- **Styling:** Tailwind CSS 4

- **Language:** TypeScript- **Language:** TypeScript

- **Font:** Inter (optimiert)- **Font:** Inter (optimiert)

- **Deployment:** Vercel- **Deployment:** Vercel



## 📁 Projektstruktur## 📁 Projektstruktur



``````

website_shadojus/website_shadojus/

├── app/                    # Next.js App Router├── app/                    # Next.js App Router

│   ├── globals.css        # Liquid Glass Styles│   ├── globals.css        # Liquid Glass Styles

│   ├── layout.tsx         # Root Layout│   ├── layout.tsx         # Root Layout

│   └── page.tsx           # Homepage│   └── page.tsx           # Homepage

├── components/            # Atomic Design Components├── components/            # Atomic Design Components

│   ├── atoms/            # Grundlegende Elemente│   ├── atoms/            # Grundlegende Elemente

│   ├── molecules/        # Kombinierte Komponenten│   ├── molecules/        # Kombinierte Komponenten

│   └── organisms/        # Komplexe Sektionen│   └── organisms/        # Komplexe Sektionen

├── lib/                  # Utilities├── lib/                  # Utilities

│   └── utils.ts          # Helper Funktionen│   └── utils.ts          # Helper Funktionen

└── public/               # Statische Assets└── public/               # Statische Assets

``````



## 🎯 Zero Overhead Principles## 🎯 Zero Overhead Principles



1. **Minimale Dependencies:** Nur Next.js, React, TypeScript, Tailwind1. **Minimale Dependencies:** Nur Next.js, React, TypeScript, Tailwind

2. **Atomic Design:** Wiederverwendbare, modulare Komponenten2. **Atomic Design:** Wiederverwendbare, modulare Komponenten

3. **Performance First:** Optimierte Fonts, Images, Code Splitting3. **Performance First:** Optimierte Fonts, Images, Code Splitting

4. **Type Safety:** Vollständige TypeScript Integration4. **Type Safety:** Vollständige TypeScript Integration

5. **Modern CSS:** Native CSS Features statt externe Libraries5. **Modern CSS:** Native CSS Features statt externe Libraries



## 🚀 Deployment## 🚀 Deployment



### Vercel (Empfohlen)### Vercel (Empfohlen)

```bash```bash

# GitHub Repository erstellen# GitHub Repository erstellen

git initgit init

git add .git add .

git commit -m "Initial commit"git commit -m "Initial commit"

git remote add origin https://github.com/shadojus/website.gitgit remote add origin https://github.com/shadojus/website.git

git push -u origin maingit push -u origin main



# Vercel Dashboard: Import Repository# Vercel Dashboard: Import Repository

# Automatisches Deployment startet# Automatisches Deployment startet

``````



### Lokale Entwicklung### Lokale Entwicklung

```bash```bash

# Dependencies installieren# Dependencies installieren

npm installnpm install



# Development server# Development server

npm run devnpm run dev



# Linting# Linting

npm run lintnpm run lint

``````



## 📊 Performance Features## 📊 Performance Features



- ✅ Next.js 15 App Router- ✅ Next.js 15 App Router

- ✅ Automatic Code Splitting  - ✅ Automatic Code Splitting  

- ✅ Optimized Fonts (Inter)- ✅ Optimized Fonts (Inter)

- ✅ Tailwind CSS 4 (Minimaler Bundle)- ✅ Tailwind CSS 4 (Minimaler Bundle)

- ✅ TypeScript (Type Safety)- ✅ TypeScript (Type Safety)

- ✅ SEO Optimiert- ✅ SEO Optimiert

- ✅ Responsive Design- ✅ Responsive Design



## 🔧 Customization## 🔧 Customization



### Farben anpassen### Farben anpassen

```css```css

/* app/globals.css *//* app/globals.css */

.glass {.glass {

  background: rgba(255, 255, 255, 0.05); /* Transparenz */  background: rgba(255, 255, 255, 0.05); /* Transparenz */

  backdrop-filter: blur(16px);           /* Blur-Effekt */  backdrop-filter: blur(16px);           /* Blur-Effekt */

  border: 1px solid rgba(255, 255, 255, 0.1); /* Border */  border: 1px solid rgba(255, 255, 255, 0.1); /* Border */

}}

``````



### Neue Komponenten### Neue Komponenten

```tsx```tsx

// components/atoms/NewAtom.tsx// components/atoms/NewAtom.tsx

interface NewAtomProps {interface NewAtomProps {

  children: React.ReactNode  children: React.ReactNode

  className?: string  className?: string

}}



export function NewAtom({ children, className = '' }: NewAtomProps) {export function NewAtom({ children, className = '' }: NewAtomProps) {

  return (  return (

    <div className={`glass ${className}`}>    <div className={`glass ${className}`}>

      {children}      {children}

    </div>    </div>

  )  )

}}

``````



## 📞 Kontakt## 📞 Kontakt



- **Email:** shadojus@gmail.com- **Email:** shadojus@gmail.com

- **Instagram:** [@shadojus](https://instagram.com/shadojus)- **Instagram:** [@shadojus](https://instagram.com/shadojus)

- **Website:** [shadojus.vercel.app](https://shadojus.vercel.app)- **Website:** [shadojus.vercel.app](https://shadojus.vercel.app)



------



**Zero Overhead Development** - Effizient, Modern, Skalierbar! 🚀**Zero Overhead Development** - Effizient, Modern, Skalierbar! 🚀