import React from "react";
import SkillItem from "./SkillItem";
import { skills } from "./SkillsData";
import { IconContext } from "react-icons";
import { SiAngular, SiFirebase, SiAndroidstudio, SiPostgresql } from "react-icons/si";
import './Skills.css';
import { FaRobot, FaCogs } from "react-icons/fa";
import { MdWifiTethering } from "react-icons/md";


const exploredTechnologies = [
  { name: "Angular", icon: <SiAngular /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Android Studio", icon: <SiAndroidstudio /> },
  {name: "PostgreSQL", icon: <SiPostgresql />},
  {name: "Artificial Intelligence", icon: <FaRobot />},
  {name: "Internet Of Things", icon: <MdWifiTethering />},
  {name: "Machine Learning", icon: <FaCogs />}
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills & Tools</h2>
      <p className="skills-subtitle">Technologies I use and love</p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillItem key={skill.name} {...skill} />
        ))}
      </div>

      {/* ✅ Now this is outside the grid and neatly below */}
      <div className="explored-techs">
        <h4 className="explored-title">Explored Technologies:</h4>
        <div className="tech-icons-line">
          <IconContext.Provider value={{ size: "1.5rem", color: "#ffaa00" }}>
            {exploredTechnologies.map((tech, index) => (
              <span key={index} className="tech-icon-item">
                {tech.icon}
                <span className="tech-name">{tech.name}</span>
                {index < exploredTechnologies.length - 1 && (
                  <span className="separator"> • </span>
                )}
              </span>
            ))}
          </IconContext.Provider>
        </div>
      </div>
    </section>
  );
};

export default Skills;
