# Component Relationships Map

## Component Hierarchy

### App.jsx (Root Component)
```jsx
<App>
  <NavBar />
  <Hero />
  <Nexus />
  <Features />
  <About />
  <Vault />
  <Prologue />
  <Story />
  <Contact />
  <Footer />
</App>
```

## Component Dependencies

### App.jsx
- Imports all major page section components

### NavBar.jsx
- Button.jsx (for Product button)
- react-icons/TiLocationArrow (for arrow icon)
- clsx (for conditional classes)
- react-use/useWindowScroll (for scroll tracking)
- GSAP (for animations)

### Hero.jsx
- Button.jsx (for Watch demo button)
- VideoPreview.jsx (for video preview container)
- react-icons/TiLocationArrow (for arrow icon)
- GSAP + ScrollTrigger + useGSAP (for animations)

### Button.jsx
- clsx (for conditional classes)

### VideoPreview.jsx
- GSAP (for 3D hover effects)

### AnimatedTitle.jsx
- GSAP + useGSAP (for text animations)

### Features.jsx
- AnimatedTitle.jsx (for section title)
- GSAP + ScrollTrigger + useGSAP (for animations)

### About.jsx
- AnimatedTitle.jsx (for section title)
- GSAP + ScrollTrigger + useGSAP (for animations)

### Nexus.jsx
- AnimatedTitle.jsx (for section title)
- GSAP + ScrollTrigger + useGSAP (for animations)

### Vault.jsx
- AnimatedTitle.jsx (for section title)
- GSAP + ScrollTrigger + useGSAP (for animations)

### Prologue.jsx
- AnimatedTitle.jsx (for section title)
- GSAP + ScrollTrigger + useGSAP (for animations)

### Story.jsx
- AnimatedTitle.jsx (for section title)
- GSAP + ScrollTrigger + useGSAP (for animations)

### Contact.jsx
- Button.jsx (for Get in touch button)
- AnimatedTitle.jsx (for section title)
- GSAP + ScrollTrigger + useGSAP (for animations)

### Footer.jsx
- Button.jsx (for social buttons)
- react-icons (for social icons)
- GSAP + useGSAP (for animations)

## Shared Utilities
- GSAP - Used across multiple components for animations
- clsx - Used in Button and Navbar for conditional styling
- useGSAP - React hook for GSAP integration
- ScrollTrigger - GSAP plugin for scroll-based animations

## Asset Dependencies
- Videos: Hero.jsx
- Audio: NavBar.jsx
- Images: NavBar.jsx (logo)
- Fonts: Global (index.css)