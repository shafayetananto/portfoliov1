import frameDiaryImage1 from './assets/projects/frameDiary/frameDiary.webp';
import frameDiaryImage2 from './assets/projects/frameDiary/frameDiary2.webp';
import frameDiaryImage3 from './assets/projects/frameDiary/frameDiary3.webp';
import frameDiaryImage4 from './assets/projects/frameDiary/frameDiary4.webp';
import frameDiaryImage5 from './assets/projects/frameDiary/frameDiary5.webp';
import frameDiaryImage6 from './assets/projects/frameDiary/frameDiary6.webp';

import descriptaAiImage1 from './assets/projects/descriptaAi/descriptaAi.webp';
import descriptaAiImage2 from './assets/projects/descriptaAi/descriptaAi2.webp';
import descriptaAiImage3 from './assets/projects/descriptaAi/descriptaAi3.webp';
import descriptaAiImage4 from './assets/projects/descriptaAi/descriptaAi4.webp';

import laCorteRossoImage1 from './assets/projects/laCorteRosso/laCorteRosso.webp';
import laCorteRossoImage2 from './assets/projects/laCorteRosso/laCorteRosso2.webp';
import laCorteRossoImage3 from './assets/projects/laCorteRosso/laCorteRosso3.webp';
import laCorteRossoImage4 from './assets/projects/laCorteRosso/laCorteRosso4.webp';
import laCorteRossoImage5 from './assets/projects/laCorteRosso/laCorteRosso5.webp';
import laCorteRossoImage6 from './assets/projects/laCorteRosso/laCorteRosso6.webp';
import laCorteRossoImage7 from './assets/projects/laCorteRosso/laCorteRosso7.webp';

import html5 from './assets/icons/html5.svg'
import css3 from './assets/icons/css3.svg'
import react from './assets/icons/react.svg'
import tailwindcss from './assets/icons/tailwindcss.svg'
import reactrouter from './assets/icons/reactrouter.svg'
import framermotion from './assets/icons/framermotion.svg'
import tmdb from './assets/icons/tmdb.svg'
import gemini from './assets/icons/gemini.svg'
import ai from './assets/icons/ai.svg'
import swiper from './assets/icons/swiper.svg'
export const PROJECT_DATA = [
  /* 1. FrameDiary */
  {
    name: "frameDiary",
    title: "FrameDiary",
    tagline: "A modern movie-logging app with real-time data from TMDB",
    images: [
      frameDiaryImage1,
      frameDiaryImage2,
      frameDiaryImage3,
      frameDiaryImage4,
      frameDiaryImage5,
      frameDiaryImage6,
    ],

    overview:
      "FrameDiary is an advanced movie discovery and logging platform built with React and the TMDB API. Users can browse Trending, Recently Released, Classics, Award Winners, and other dynamic sections, each powered by API-driven data. The app features a detailed movie page with runtime, cast, crew, genres, tagline, trailers, and similar recommendations. LocalStorage ensures persistent categories like Watched, Favorites, and Watchlist, and React Router enables a seamless spa-like navigation experience.",

    keyFeatures: [
      "Dynamic movie sections using TMDB Discover and Search endpoints",
      "Detailed movie page with cast, crew, trailer, genres, and recommendations",
      "LocalStorage-based persistence for Watched, Favorites, and Watchlist",
      "Optimized TMDB images (posters, backdrops, thumbnails)",
      "Custom loading skeletons and API error handling",
      "SPA navigation with React Router DOM (no full reloads)",
      "Movie search with debounce functionality",
      "Fully responsive UI across mobile, tablet, and desktop",
    ],

    technologies: [
      { name: "React.js", icon: react },
      { name: "Tailwind CSS", icon: tailwindcss },
      { name: "TMDB API", icon: tmdb },
      { name: "HTML5", icon: html5 },
      { name: "React Router", icon: reactrouter },
      { name: "CSS3", icon: css3 }
    ],

    challenges: [
      "Managing multiple asynchronous API calls across different sections",
      "Maintaining smooth UI flows while handling large TMDB images",
      "Building error boundaries for empty or failed API responses",
      "Persisting and syncing user lists without external state libraries",
    ],

    learned: [
      "Building scalable API-fetching architecture with custom hooks",
      "Efficient route handling with React Router (dynamic routes)",
      "Image optimization strategies for large external media",
      "Designing persistent UI states using LocalStorage",
    ],

    githubLink: "https://github.com/shafayetananto/framediary",
    liveLink: 'https://framediary.vercel.app/',
  },

  /* 2. DescriptaAI */
  {
    name: "descriptaAi",
    title: "DescriptaAI",
    tagline: "AI-powered product description generator",
    images: [
      descriptaAiImage1,
      descriptaAiImage2,
      descriptaAiImage3,
      descriptaAiImage4,
    ],

    overview:
      "DescriptaAI is an intelligent product description generator built with React, Vite, and the Gemini API. Users enter product details, choose a writing tone, and instantly generate multiple description variants. It features input validation, Gemini error handling, and a custom rate-limiting system that restricts users to a certain number of generations within a set time period, with a short cooldown between each attempt.",

    keyFeatures: [
      "AI-generated product descriptions using Gemini API",
      "Tone selection: professional, casual, SEO-focused",
      "Generates multiple variations per request",
      "Robust error handling for API failures and empty inputs",
      "Custom rate-limiting system that caps generation attempts within a set timeframe and enforces a short cooldown",
      "One-click copy-to-clipboard",
      "Fast, responsive UI with clear loading states",
    ],
    technologies: [
      { name: "React.js", icon: react },
      { name: "Tailwind CSS", icon: tailwindcss },
      { name: "Gemini API", icon: gemini },
      { name: "HTML5", icon: html5 },
      { name: "AI", icon: ai },
      { name: "CSS3", icon: css3 },
      { name: "Framer Motion", icon: framermotion }
    ],

    challenges: [
      "Designing a reliable cooldown and rate-limiting mechanism",
      "Handling unpredictable Gemini API responses gracefully",
      "Ensuring descriptions remain readable across tones",
      "Keeping UI responsive during loading and failure states",
    ],

    learned: [
      "Prompt engineering and structured input design",
      "Client-side rate limiting and cooldown logic",
      "Building clean reusable input and form components",
      "Providing stable UX around API-based errors",
    ],

    githubLink: "https://github.com/shafayetananto/descripta-ai",
    liveLink: "https://descripta-ai.vercel.app/",
  },

  /* 3. La Corte Rosso */
  {
    name: "laCorteRosso",
    title: "La Corte Rosso",
    tagline: "A premium fine-dining restaurant website",
    images: [
      laCorteRossoImage1,
      laCorteRossoImage2,
      laCorteRossoImage3,
      laCorteRossoImage4,
      laCorteRossoImage5,
      laCorteRossoImage6,
      laCorteRossoImage7,
    ],

    overview:
      "La Corte Rosso is a luxury restaurant website featuring a multi-page React Router layout with Home, Menu, Story, Gallery, Contact, and Reserve pages. Its fully structured 36-item menu supports category-based filtering, while smooth transitions, curated photography, and a European-inspired palette create an elegant, upscale browsing experience.",

    keyFeatures: [
      "Multi-page layout with React Router DOM",
      "36-item menu with AI-generated food images",
      "Filterable categories: Starters, Main, Dessert, Drinks, Alcohols",
      "Curated gallery with professional interior photography",
      "Slideshow-style transitions on the Home page",
      "Fine-dining visual theme with premium typography",
      "Fully responsive modern layout",
    ],
    technologies: [
      { name: "React.js", icon: react },
      { name: "Tailwind CSS", icon: tailwindcss },
      { name: "React Router", icon: reactrouter },
      { name: "HTML5", icon: html5 },
      { name: "Swiper", icon: swiper },
      { name: "CSS3", icon: css3 },
    ],

    challenges: [
      "Handling large, high-quality images while maintaining fast loads",
      "Designing a consistent luxury aesthetic across all pages",
      "Building a clean and extensible menu filtering system",
      "Creating smooth, non-distracting slideshow transitions",
    ],

    learned: [
      "Structuring multipage React applications cleanly",
      "Working with AI-generated images for consistent styling",
      "Optimizing image-heavy pages for performance",
      "Creating polished layouts that follow a premium brand identity",
    ],

    githubLink: "https://github.com/shafayetananto/lacorterosso",
    liveLink: "https://lacorterosso.vercel.app/",
  }
];
