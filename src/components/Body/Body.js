import React from 'react';
import './Body.css';
import profilePic from '../../assets/profPic.jpg';
import { SiLeetcode } from "react-icons/si";
import decor from '../../assets/tran.png';

const Body = () => {
  return (
    <section className="body-section" id="home">
      <div className="body-container">
        <div className="body-image">
          <img src={profilePic} alt="Profile" className="profile-image" />
        </div>

        <div className="body-content">
          <h1>Hello, I'm Nithish Kumar</h1>
          <p>Full Stack Developer | AI & Cybersecurity Enthusiast</p>
          <p>
            Hi, I’m Nithish Kumar, a passionate developer with interests in Full Stack Development, Cybersecurity, and Artificial Intelligence. 
            I enjoy building meaningful digital experiences and learning new technologies.
          </p>

          <div className="leetcode-badge">
  <div className="leetcode-stats">
    <SiLeetcode color="#FFA116" size="1.5em" style={{ marginRight: "8px" }} />
    <strong>115+ LeetCode Problems Solved</strong>
  </div>
  <div className="leetcode-link">
    <a 
      href="https://leetcode.com/u/nithish_sat/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      See My Coding Progress...
    </a>
  </div>
</div>

          <img src={decor} alt="Decor" className="decor-img" />
        </div>
      </div>
    </section>
  );
};

export default Body;
