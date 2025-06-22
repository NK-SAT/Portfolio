import React from 'react';
import { SiLeetcode } from "react-icons/si";
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>
        Hi, I’m Nithish Kumar, a passionate developer with interests in Full Stack Development, Cybersecurity, and Artificial Intelligence. 
        I enjoy building meaningful digital experiences and learning new technologies.
      </p>
       <div className="leetcode-badge">
    <SiLeetcode color="#FFA116" size="1.3em" style={{ marginRight: "8px" }} />
    <strong>115+ LeetCode Problems Solved</strong> —{" "}
    <a 
      href="https://leetcode.com/u/nithish_sat/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      View Profile ↗
    </a>
  </div>
    </section>
  );
};

export default About;