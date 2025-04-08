import React from 'react';
import './Body.css';
import profilePic from '../../assets/good1.jpg';
import decor from '../../assets/tran.png';

const Body = () => {
  return (
    <section className="body-section" id="home">
      <div className="body-container">
        <div className="body-image">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="body-content">
          <h1>Hello, I'm Nithish Kumar</h1>
          <p>Full Stack Developer | AI & Cybersecurity Enthusiast</p>
          <p>
            Hi, I’m Nithish Kumar, a passionate developer with interests in Full Stack Development, Cybersecurity, and Artificial Intelligence. 
            I enjoy building meaningful digital experiences and learning new technologies.</p>
            <img src={decor} alt="Decor" className="decor-img" />
        </div>
      </div>
    </section>
  );
};

export default Body;
