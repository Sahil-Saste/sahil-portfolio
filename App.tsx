import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';

const App: React.FC = () => {
  return (
    <div className="text-white min-h-screen">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-12 lg:px-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;