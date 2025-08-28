# Codebase Index

## Project Overview
This is an award-winning website built with React, GSAP, and Tailwind CSS. The website is inspired by Zentry.com and features scroll-triggered animations, clip path shaped animations, 3D hover effects, and video transitions.

## Tech Stack
- React.js
- GSAP (GreenSock Animation Platform)
- Tailwind CSS
- Vite (Build tool)

## Project Structure
```
award-winning-website/
├── public/
│   ├── audio/
│   ├── fonts/
│   ├── img/
│   ├── videos/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Key Components

### Main Files
- `src/App.jsx` - Main application component that imports and renders all other components
- `src/main.jsx` - Entry point that renders the App component
- `src/index.css` - Global styles with custom fonts, animations, and utility classes
- `index.html` - Main HTML file

### Components
1. **About.jsx** - About section with animated content
2. **AnimatedTitle.jsx** - Animated text component using GSAP
3. **Button.jsx** - Reusable button component with hover effects
4. **Contact.jsx** - Contact section with interactive elements
5. **Features.jsx** - Features showcase with bento grid layout
6. **Footer.jsx** - Website footer
7. **Hero.jsx** - Hero section with video background and interactive elements
8. **Navbar.jsx** - Navigation bar with audio toggle
9. **Nexus.jsx** - Nexus section with game cards
10. **Prologue.jsx** - Prologue section with timeline
11. **Story.jsx** - Story section with image animations
12. **Vault.jsx** - Vault section with interactive items
13. **VideoPreview.jsx** - Video preview component with 3D hover effects

## Dependencies
### Production
- `@gsap/react` - React plugin for GSAP
- `clsx` - Utility for constructing className strings
- `gsap` - Animation library
- `react` - Core React library
- `react-dom` - React DOM rendering
- `react-icons` - Icon library
- `react-use` - React hooks library

### Development
- `@vitejs/plugin-react` - React plugin for Vite
- `autoprefixer` - CSS vendor prefixer
- `eslint` - JavaScript linter
- `postcss` - CSS processor
- `prettier` - Code formatter
- `tailwindcss` - Utility-first CSS framework
- `vite` - Build tool

## Key Features
1. Scroll-Based Animations - Dynamic animations triggered by scrolling
2. Clip Path Shaped Animations - Unique geometric transitions using CSS clip-paths
3. 3D Hover Effects - Interactive 3D transformations on hover
4. Video Transitions - Seamlessly integrated video elements
5. Smooth UI/UX - Polished interfaces with smooth interactions
6. Completely Responsive - Flawless adaptation across all devices

## Custom CSS Classes
The project defines many custom utility classes in `index.css`:
- Typography: `.hero-heading`, `.special-font`, custom font families
- Animations: `.indicator-line`, `.animated-word`, `.three-body` (loading spinner)
- Layout: `.mask-clip-path`, `.absolute-center`, `.flex-center`
- Component-specific: `.bento-tilt`, `.game-card`, `.vault-item`, etc.

## Animations
GSAP is used extensively throughout the application:
- ScrollTrigger for scroll-based animations
- Timeline animations for complex sequences
- 3D transforms for interactive elements
- Custom easing functions for smooth transitions

## Fonts
Custom fonts are loaded via @font-face in CSS:
- Zentry (font-zentry)
- General (font-general)
- Circular Web (font-circular-web)
- Robert Medium (font-robert-medium)
- Robert Regular (font-robert-regular)

## Assets
The project uses various assets stored in the public directory:
- Videos: Hero section background videos
- Images: Logo and other static images
- Audio: Loop audio file for navbar
- Fonts: Custom font files in WOFF2 format