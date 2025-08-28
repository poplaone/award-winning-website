# Animation Summary

## GSAP Animations Overview

This project makes extensive use of GSAP (GreenSock Animation Platform) for creating smooth, high-performance animations. Here's a breakdown of the animation patterns used across components:

## 1. Hero Section Animations (Hero.jsx)

### Video Transitions
- Scale animations for video elements
- Clip-path transformations
- Sequential video loading and transitions
- Loading spinner animation (three-body)

### Text Animations
- Special font styling with Zentry font for key letters
- Transform origin adjustments for 3D effects

## 2. Navbar Animations (Navbar.jsx)

### Scroll Effects
- Hide/show navbar based on scroll direction
- Floating navigation bar with smooth transitions
- Audio indicator line animations

### Hover Effects
- Navigation link hover animations with underline effect

## 3. Section Title Animations (AnimatedTitle.jsx)

### Text Reveal
- Staggered word animations
- 3D transform effects (rotateX, rotateY, translate3d)
- Opacity transitions
- Custom transform origins for dramatic effects

## 4. Features Section Animations (Features.jsx)

### Bento Grid Animations
- Tilt effects on hover using ScrollTrigger
- Staggered animations for grid items
- Background particle systems
- Glow effects with opacity transitions

## 5. About Section Animations (About.jsx)

### Image Reveal
- Clip-path animations for image containers
- Scroll-triggered image positioning
- Gradient background animations
- Particle system effects

### Text Animations
- Subtext positioning and reveal
- Scroll-based opacity changes

## 6. Nexus Section Animations (Nexus.jsx)

### Card Animations
- 3D tilt effects on hover
- Connection line drawing animations (SVG)
- Particle system for floating elements
- Badge reveal animations

## 7. Vault Section Animations (Vault.jsx)

### Item Reveal
- Staggered card animations
- Scroll-triggered positioning
- Particle effects
- Interactive hover states

## 8. Prologue Section Animations (Prologue.jsx)

### Timeline Animations
- Chapter card reveal animations
- Timeline progress visualization
- Narrative text transitions
- Particle effects

## 9. Story Section Animations (Story.jsx)

### Image Transitions
- Complex clip-path animations
- Filter effects (SVG filters)
- Scroll-triggered image positioning
- Parallax effects

## 10. Contact Section Animations (Contact.jsx)

### Form Animations
- Input field focus effects
- Button hover animations
- Background particle systems
- Glow effects

## 11. Footer Animations (Footer.jsx)

### Social Button Animations
- Icon hover effects
- Background particle systems
- Glow transitions

## Animation Techniques Used

### 1. ScrollTrigger
- Used extensively for scroll-based animations
- Pinning elements during scroll
- Scrubbing animations with scroll position
- Start/end position controls

### 2. 3D Transforms
- rotateX, rotateY, rotateZ for 3D effects
- translate3d for hardware acceleration
- transformPerspective for realistic 3D
- transform-origin adjustments

### 3. Clip-path Animations
- Polygon-based clipping for geometric shapes
- Transition between different clip paths
- Scroll-triggered clip-path changes

### 4. Staggered Animations
- Animating multiple elements with delays
- Creating wave-like effects
- Using gsap.utils.toArray() for batch operations

### 5. Particle Systems
- Floating elements with random movements
- Performance-optimized with will-change property
- Reduced motion preferences handling

### 6. SVG Animations
- Line drawing effects
- Path animations
- Filter effects

### 7. Text Animations
- Character/word splitting
- Staggered reveals
- 3D text effects

## Performance Optimizations

### will-change Property
- Applied to animated elements for better performance
- Used on particles, cards, and animated elements

### Reduced Motion Support
- Media query for prefers-reduced-motion
- Disabling animations for accessibility

### Hardware Acceleration
- translate3d for GPU-accelerated animations
- transform-style: preserve-3d

## Custom Easings
- Cubic bezier curves for natural motion
- Custom easing functions for specific effects
- Power-based easings (power1.inOut, etc.)

## Animation Architecture
- useGSAP hook for React integration
- Cleanup functions for memory management
- ScrollTrigger refresh handling
- Component lifecycle integration