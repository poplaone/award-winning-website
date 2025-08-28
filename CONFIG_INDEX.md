# Configuration Files Index

## Project Configuration Overview

This document summarizes all configuration files used in the project.

## 1. Package.json

### Scripts
- `dev`: Run development server (vite)
- `build`: Build for production (vite build)
- `lint`: Run ESLint (eslint .)
- `preview`: Preview production build (vite preview)

### Dependencies
**Production:**
- @gsap/react: React plugin for GSAP
- clsx: Utility for constructing className strings
- gsap: Animation library
- react: Core React library
- react-dom: React DOM rendering
- react-icons: Icon library
- react-use: React hooks library

**Development:**
- @eslint/js: ESLint JavaScript plugin
- @types/react: TypeScript definitions for React
- @types/react-dom: TypeScript definitions for React DOM
- @vitejs/plugin-react: React plugin for Vite
- autoprefixer: CSS vendor prefixer
- eslint: JavaScript linter
- eslint-plugin-react: React specific linting rules
- eslint-plugin-react-hooks: React Hooks linting rules
- eslint-plugin-react-refresh: React Refresh linting rules
- eslint-plugin-tailwindcss: Tailwind CSS linting rules
- globals: Global variables for ESLint
- postcss: CSS processor
- prettier: Code formatter
- tailwindcss: Utility-first CSS framework
- vite: Build tool

## 2. Vite Configuration (vite.config.js)

### Plugins
- @vitejs/plugin-react: Enables React Fast Refresh and JSX support

### Configuration
- Standard Vite configuration with React plugin

## 3. Tailwind CSS Configuration (tailwind.config.js)

### Content
- index.html
- All JavaScript/TypeScript files in src directory

### Theme Extensions
**Font Families:**
- zentry: Custom font family
- general: Custom font family
- circular-web: Custom font family
- robert-medium: Custom font family
- robert-regular: Custom font family

**Colors:**
- Blue palette: 50, 75, 100, 200, 300
- Violet: 300
- Yellow: 100, 300

### Plugins
- No additional plugins

## 4. PostCSS Configuration (postcss.config.js)

### Plugins
- tailwindcss: Process Tailwind CSS
- autoprefixer: Add vendor prefixes to CSS

## 5. ESLint Configuration (eslint.config.js)

### Language Options
- ECMAScript 2020
- Browser globals
- JSX support

### Settings
- React version: 18.3

### Plugins
- react: React specific linting rules
- react-hooks: React Hooks linting rules
- react-refresh: React Refresh linting rules
- tailwindcss: Tailwind CSS linting rules

### Rules
- Recommended JavaScript rules
- Recommended React rules
- Recommended React Hooks rules
- react/jsx-no-target-blank: Disabled
- react-refresh/only-export-components: Warn with constant export allowance
- react/prop-types: Disabled (using TypeScript instead)

## 6. Git Ignore (.gitignore)

### Ignored Files/Directories
- node_modules/
- dist/
- .env
- .env.*

## 7. Index.html

### Head
- UTF-8 charset
- Viewport meta tag for responsive design
- Favicon link
- Title: "Vite + React"

### Body
- Root div for React app
- Module script for main.jsx entry point

## Environment Variables
The project doesn't appear to use environment variables at this time.