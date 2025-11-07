# Smart City Insights - Static Website

A modern, responsive static website for Smart City Insights built with React and Tailwind CSS.

## Features

- 🎨 Modern, professional design with gold color theme
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations and transitions
- ♿ Accessibility and SEO best practices
- 🌐 Static site generation (builds to `dist` directory)

## Technology Stack

- **React** 18.2.0 (JavaScript/JSX)
- **Tailwind CSS** 3.4.0
- **Vite** 5.0.8
- **PostCSS** & **Autoprefixer**

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build the static site for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── About.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Website Sections

1. **Header/Navigation** - Sticky header with navigation menu, Login, and CTA buttons
2. **Hero Section** - Eye-catching landing section with headline and call-to-action
3. **Features Section** - Grid layout showcasing key features and services
4. **About/Insights Section** - Statistics, insights, and impact metrics
5. **Footer** - Contact information, links, and social media

## Color Theme

The website uses a gold color palette:
- Primary Gold: `#D4AF37`
- Secondary Gold: `#F4D03F`
- Dark Gold: `#b8941f`
- Light Gold: `#fef5c7`

## Deployment

The static site can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any other static hosting service

Simply build the project and deploy the `dist` directory.

## License

MIT

