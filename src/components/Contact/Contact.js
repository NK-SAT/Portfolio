import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Contact Me</h2>
          <p>Feel free to reach out through any of the platforms!</p>
        </div>
        <div className="contact-links">
  <p className="contact-cta">👇 Tap an icon to reach me!</p>
  <div className="contact-links-icons">
    <a href="tel:+916369642432" aria-label="Phone">
      <FaPhone size={28} />
    </a>
    <a href="mailto:nk.sat.27@gmail.com" aria-label="Email">
      <FaEnvelope size={28} />
    </a>
    <a href="https://www.linkedin.com/in/nithish-kumar-3b1b4222a" target="_blank" rel="noreferrer" aria-label="LinkedIn">
      <FaLinkedin size={28} />
    </a>
    <a href="https://github.com/NK-SAT" target="_blank" rel="noreferrer" aria-label="GitHub">
      <FaGithub size={28} />
    </a>
  </div>
</div>
      </div>
    </section>
  );
};

export default Contact;