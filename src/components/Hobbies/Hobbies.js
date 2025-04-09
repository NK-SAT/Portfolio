import React from "react";
import "./Hobbies.css";
import { hobbiesData } from "./HobbiesData";

const Hobbies = () => {
  return (
    <section className="hobbies-section" id="hobbies">
      <h2 className="hobbies-title">My Hobbies</h2>
      <div className="hobbies-grid">
        {hobbiesData.map((hobby, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="background-image-hobby" src={hobby.image} alt="" />
                <div className="icon-wrapper">{hobby.icon}</div>
                <h3>{hobby.name}</h3>
              </div>
              <div className="flip-card-back">
                <p>{hobby.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
