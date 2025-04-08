import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
      setAtTop(scrollY < 100);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="scroll-to-top">
      {isVisible || atTop ? (
        <button
          className="scroll-button"
          onClick={atTop ? scrollToBottom : scrollToTop}
          aria-label={atTop ? 'Scroll to Bottom' : 'Scroll to Top'}
        >
          {atTop ? <FaArrowDown /> : <FaArrowUp />}
        </button>
      ) : null}
    </div>
  );
};

export default ScrollToTopButton;
