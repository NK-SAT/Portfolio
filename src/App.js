import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Body/Body';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Hobbies from './components/Hobbies/Hobbies';

const App = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      alert("Nithish.Dev : I would suggest using desktop for better experience. Still, do you want to continue?");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}

export default App;
