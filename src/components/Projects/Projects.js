import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Diabetics Detection Based on Retinal Abnormalities - ML',
      description: 'A diabetics Detection ML model for identifing diabetics.',
      link: 'https://github.com/NK-SAT/Diabetes_Detection_using_IRIS_Image',
    },
    {
      title: 'Smart Street Light System - Internet of Things',
      description: 'An IoT based project that automates the working of street lights, reports failures.',
      link: 'https://github.com/NK-SAT/Smart-Street-Light-System',
    },
    {
      title: 'Geospatial Analysis for Hotel recommendation - Data Mining',
      description: 'A data-driven project leveraging predictive analytics to identify the location for hotels.',
      link: 'https://github.com/NK-SAT/Data-Mining-Geospatial-Analysis',
    },
    {
      title: 'Personal Diary App - Android Studio',
      description: 'A secure personal diary app using Firebase for cloud storage and robust authentication.',
      link: 'https://github.com/NK-SAT/Personal_Diary_Android_App',
    },
    {
      title: 'Portfolio Site - React',
      description: 'This website you are looking at — built with React, styled from scratch.',
      link: 'https://github.com/NK-SAT/Portfolio',
    },
    ,
    {
      title: 'Blogging Site - WordPress',
      description: 'This website was built to try out services of WordPress.',
      link: 'https://100daysofjava2.wordpress.com/',
    },
  ];

  const certifications = [
    {
      title: "Ideathon - 🥈 2nd Prize",
      description: "Feb 2023",
      link: "https://drive.google.com/file/d/13eO6Bk6rvYSoTZy7crw818_2_JVA9JX7/view?usp=sharing",
    },
    {
      title: "Ethical Hacking Certfication - NPTEL",
      description: "IIT Kharagpur | July 2025 - Oct 2025",
      link: "https://drive.google.com/file/d/1GBQoylIGKuQExpsiTRHOU92oEOEeY0RH/view?usp=sharing",
    },
    {
      title: "CyberSecurity - Course",
      description: "IIT Bhubaneshwar | June 2022 - July 2022",
      link: "https://drive.google.com/file/d/1Lu9r7_nmppvr5tvd4d6mrBWTHjN_-dpk/view?usp=sharing",
    },
  ];

  return (
    <>
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>
  
      <section className="certifications" id="certifications">
        <h2>Certifications</h2>
        <div className="project-grid">
          {certifications.map((cert, index) => (
            <div className="project-card" key={index}>
              <h3>
                <a href={cert.link} target="_blank" rel="noreferrer">
                  {cert.title}
                </a>
              </h3>
              <p>{cert.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );  
};

export default Projects;