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
      link: '#',
    },
    ,
    {
      title: 'Blogging Site - WordPress',
      description: 'This website was built to try out services of WordPress.',
      link: 'https://100daysofjava2.wordpress.com/',
    },
  ];

  return (
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
  );
};

export default Projects;