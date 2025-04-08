import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconContext } from "react-icons";
import {
    SiSpringboot,
    SiReact,
    SiAngular,
    SiFirebase,
    SiGit
  } from "react-icons/si";
import { FaJava, FaDatabase, FaCode } from "react-icons/fa";
  const iconMap = {
    springboot: <SiSpringboot />,
    react: <SiReact />,
    sql: <FaDatabase />,
    angular: <SiAngular />,
    firebase: <SiFirebase />,
    git: <SiGit />,
    java: <FaJava />,
    ui: <FaCode />
  };
const SkillItem = ({ icon, name, level }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        width: `${level}%`,
        transition: { duration: 1, ease: "easeInOut" },
      });
    } else {
      controls.start({ width: 0 }); // Reset when not in view
    }
  }, [controls, inView, level]);

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-header">
        <IconContext.Provider value={{ size: "2rem", color: "#00ffcc" }}>
          {iconMap[icon]}
        </IconContext.Provider>
        <span className="skill-name">{name}</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </div>
  );
};

export default SkillItem;
