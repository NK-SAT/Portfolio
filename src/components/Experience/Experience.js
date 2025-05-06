import React from 'react';
import './Experience.css';
import { HiOutlineDocumentText } from "react-icons/hi";
import tranGraph from '../../assets/graphtran.png'

const Experience = () => {
  return (
    <section className="experience" id="about">
      <h2>Professional Experience</h2>
      <div className="experience-background">
          <img src={tranGraph} alt="Graph" className="background-image" />
        </div>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
          <h3> Nissan Digital India (NDI)
            <div className="tooltip-container">
              <a
                href="https://drive.google.com/file/d/1RkC7ofj0Yqvw7NKAOvvVO7zVcnQsu7P-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="document-icon">
                <HiOutlineDocumentText />
                <span className="custom-tooltip">View Completion Certificate</span>
              </a>
            </div></h3>
            <span className="duration">July 2024 – March 2025</span>
            <ul>
              <li>Completed an 8-month internship at Nissan Digital India (NDI) as a Full Stack Developer. Worked extensively
                with technologies like React, Spring Boot and PostgreSQL, gaining hands-on experience in developing dynamic user
                interfaces, building robust backend services, and managing databases in an Agile Project environment. Developed a
                Proof of Concept (POC) independently using SAP Fiori, demonstrating expertise in building enterprise applications
                and user-centric interfaces.</li>
              <li>Contributed to various projects involving React, Spring Boot, and Angular, focusing on feature development, bug
                fixes, and UI enhancements. Developed and integrated an API in Spring Boot to export data to an Excel sheet.
                Implemented API integration in React to interact with this backend service, ensuring seamless data export functionality</li>
              <li>Gained practical experience with tools like GIT commands, Jira, and Bitbucket for version control and task
                management. This internship provided valuable exposure to working in a professional development environment and
                strengthened adaptability across different technologies.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Optisol Solutions <div className="tooltip-container">
              <a
                href="https://drive.google.com/file/d/1rVbuCVVXwSDR5fN2D3xef1s1Nt2qCvNS/view"
                target="_blank"
                rel="noopener noreferrer"
                className="document-icon">
                <HiOutlineDocumentText />
                <span className="custom-tooltip">View Completion Certificate</span>
              </a>
            </div></h3>
            <span className="duration">June 2023 – July 2023</span>
            <ul>
              <li>One-month Full Stack Internship in Chennai.</li>
              <li>Engaged in a month of physical internship on Full Stack Development in Optisol Solutions, Chennai. In this period
                of training, I learnt to develop an interactive website connected to Firebase for data storage and came to know about
                stacks such as MERN, LAMP.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
