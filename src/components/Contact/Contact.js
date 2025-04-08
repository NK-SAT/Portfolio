import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Contact Me</h2>
          <p>Feel free to reach out through any of the platforms!</p>
        </div>
        <div className="contact-links">
          <a href="mailto:nk.sat.27@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/nithish-kumar-3b1b4222a" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/NK-SAT" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;