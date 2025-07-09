import React from 'react';
import { HeroSection } from './components/HeroSection';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

const App = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;