import { useState } from 'react'
import background from './assets/orangeCover.jpeg';
import LandingBanner from './components/landingBanner';
import Footer from './components/footer';
import Projects from './components/projects';
import Timeline from './components/timeline';
import Toolkit from './components/toolkit';
import Contact from './components/contact';

import './App.css'

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
    <div>
      <div className="flex flex-col items-center gap-4 bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <nav className="w-full flex justify-end p-4 gap-6">
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-200">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-200">About</button>
          <button onClick={() => scrollToSection('projects')} className="text-white hover:text-gray-200">Projects</button>
          <button onClick={() => scrollToSection('experience')} className="text-white hover:text-gray-200">Experience</button>
          <button onClick={() => scrollToSection('experience')} className="text-white hover:text-gray-200">Tool Kit</button>
          <button onClick={() => scrollToSection('contact')} className="text-white hover:text-gray-200">Contact</button>
        </nav>
        <LandingBanner id="landing-banner"/>
      </div>
      <Projects id="projects"/>
      <Timeline id="experience"/>
      <Toolkit id="toolkit"/>
      <Contact id="contact"/>
      <Footer />
    </div>
    
    </>
  )
}

export default App
