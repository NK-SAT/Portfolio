import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Body/Body';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

const App = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      alert("For best experience, please view this website on desktop.");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}

export default App;
