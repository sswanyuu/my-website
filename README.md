# 🌟 Olga Shih - Frontend Engineer Portfolio

> A modern, responsive portfolio website showcasing my journey as a Frontend Engineer based in Sydney, Australia.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen)](https://sswanyuu.github.io/my-website/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/sswanyuu/my-website)

## 🎯 Overview

This is my personal portfolio website built with modern web technologies. It features a clean, responsive design with internationalization support (English/Traditional Chinese), dark/light theme toggle, and showcases my projects and skills as a Frontend Engineer.

## ✨ Features

- 🌐 **Internationalization (i18n)** - English & Mandarin
- 🌙 **Dark/Light Theme** - Toggle between themes with system preference detection
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Performance Optimized** - Built with React best practices
- 🎨 **Modern UI/UX** - Clean design with smooth animations

## 🛠️ Tech Stack

### Frontend

- **React** 18.3.1 - UI library
- **TypeScript** 4.9.5 - Type-safe JavaScript
- **SCSS** - Advanced CSS preprocessing
- **Bootstrap** 5.3.6 - CSS framework

### Internationalization

- **i18next** 23.15.1 - Internationalization framework
- **react-i18next** 14.1.3 - React bindings for i18next
- **i18next-browser-languagedetector** - Automatic language detection

### Development Tools

- **React Scripts** 5.0.1 - Build tools and dev server
- **Prettier** 3.5.3 - Code formatting
- **ESLint** - Code linting
- **gh-pages** 6.3.0 - GitHub Pages deployment

### Deployment

- **GitHub Pages** - Static site hosting
- **GitHub Actions** - CI/CD pipeline

## 📁 Project Structure

```
my-website/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # Website favicon
│   ├── yu-profile.jpg      # Profile image
│   └── yu-profile.png      # Profile image (PNG)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Common components
│   │   ├── sections/       # Page sections
│   │   │   ├── Hero.tsx    # Hero section
│   │   │   ├── About.tsx   # About section
│   │   │   ├── Skills.tsx  # Skills section
│   │   │   ├── Projects.tsx # Projects section
│   │   │   ├── Contact.tsx # Contact section
│   │   │   ├── Navigation.tsx # Navigation bar
│   │   │   └── Footer.tsx  # Footer section
│   │   ├── Button.tsx      # Custom button component
│   │   ├── ProjectCard.tsx # Project card component
│   │   ├── SkillCard.tsx   # Skill card component
│   │   ├── SocialIcon.tsx  # Social media icons
│   │   ├── ThemeToggle.tsx # Theme switcher
│   │   └── LanguageSwitcher.tsx # Language switcher
│   ├── contexts/           # React contexts
│   │   ├── ThemeContext.tsx # Theme management
│   │   └── LanguageContext.tsx # Language management
│   ├── data/              # Static data
│   │   └── portfolioData.ts # Projects, skills, contact info
│   ├── i18n/              # Internationalization
│   │   ├── index.ts       # i18n configuration
│   │   └── locales/       # Translation files
│   │       ├── en.json    # English translations
│   │       └── zh.json    # Chinese translations
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main App component
│   ├── App.scss           # Main stylesheet
│   └── index.tsx          # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions workflow
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md             # Project documentation
```

### Live Site

Visit the live site at: [https://sswanyuu.github.io/my-website/](https://sswanyuu.github.io/my-website/)

## 🎨 Key Features Details

### Theme System

- **Auto Detection** - Respects system preference
- **Manual Toggle** - Light/Dark/Auto modes
- **Persistent Storage** - Remembers user preference
- **Bootstrap Integration** - Uses Bootstrap's color scheme system

### Internationalization

- **Two Languages** - English and Traditional Chinese
- **Auto Detection** - Based on browser settings
- **Persistent Storage** - Remembers language preference
- **Easy Extension** - Simple to add more languages

## 🔧 Customization

### Adding New Languages

1. Create a new JSON file in `src/i18n/locales/`
2. Add the language to `availableLanguages` in `LanguageContext.tsx`
3. Update the language detector configuration

### Customizing Styles

- Global styles: `src/App.scss`
- Component-specific styles: Individual component files
- Theme colors: Bootstrap variables in SCSS files

## 🙏 Acknowledgments

- Icons by [Bootstrap Icons](https://icons.getbootstrap.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Hosting by [GitHub Pages](https://pages.github.com/)

---

**Made with ❤️ in Sydney, Australia**
