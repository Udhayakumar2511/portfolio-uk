import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Resume from '../components/sections/Resume';
import Projects from '../components/sections/Projects';
import Publications from '../components/sections/Publications';
import Contact from '../components/sections/Contact';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Publications />
      <Contact />
    </div>
  );
};

export default HomePage;