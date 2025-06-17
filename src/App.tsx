import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.scss';
import { ThemeProvider } from './contexts/ThemeContext';
import {
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
  Navigation,
} from './components/sections/index';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
