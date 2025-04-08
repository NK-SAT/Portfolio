import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Body/Body';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
