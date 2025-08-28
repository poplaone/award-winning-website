# Award-Winning Website - Codebase Summary

## Project Overview
This is an award-winning website built with React, GSAP, and Tailwind CSS. The website is inspired by Zentry.com and features scroll-triggered animations, clip path shaped animations, 3D hover effects, and video transitions.

**Disclaimer**: All design credits go to Zentry. This project is created purely for educational purposes.

## Key Technical Documents

1. [Codebase Index](./CODEBASE_INDEX.md) - Overall structure and components
2. [Component Map](./COMPONENT_MAP.md) - Component relationships and dependencies
3. [Animation Summary](./ANIMATION_SUMMARY.md) - Detailed breakdown of animation techniques
4. [Configuration Index](./CONFIG_INDEX.md) - Project configuration files

## Tech Stack
- React.js
- GSAP (GreenSock Animation Platform)
- Tailwind CSS
- Vite (Build tool)

## Main Sections
1. **Hero** - Video background with interactive elements
2. **Nexus** - Game cards with connection animations
3. **Features** - Bento grid layout showcasing features
4. **About** - Company information with animated content
5. **Vault** - Interactive item showcase
6. **Prologue** - Timeline with narrative elements
7. **Story** - Visual storytelling with image animations
8. **Contact** - Contact form with interactive elements
9. **Footer** - Social links and additional information

## Key Features
- Scroll-based animations using GSAP ScrollTrigger
- 3D hover effects with GSAP transforms
- Clip-path shaped animations for geometric transitions
- Video transitions in the hero section
- Particle systems for background effects
- Responsive design for all device sizes
- Custom fonts and typography
- Performance optimizations (will-change, hardware acceleration)

## Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Browser Support
The website is designed to work on modern browsers. For users with reduced motion preferences, animations are automatically disabled for accessibility.

## Performance Considerations
- Uses will-change property for optimized animations
- Implements hardware acceleration with translate3d
- Includes reduced motion support for accessibility
- Optimized asset loading (videos, images, fonts)

## Customization
To customize this project:
1. Replace assets in the public directory (images, videos, audio)
2. Modify color scheme in tailwind.config.js
3. Update content in component files
4. Adjust animations in the respective component files
5. Modify fonts in index.css

## Learning Resources
This project was created as part of a tutorial by JavaScript Mastery. For detailed learning, refer to their YouTube channel.