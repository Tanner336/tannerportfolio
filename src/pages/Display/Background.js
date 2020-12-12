import React from 'react';
import "./Background.css";
import resumePic from "../../assets/resume-pic.png"


function Background() {

  return(
    <div className="background-container">
      <h1 className="background-text">Welcome to Tanner Cook's Portfolio</h1>
      <a href="./assets/Tanner Resume 2020 (1).pdf" target="blank">
        <img className="resumepic" src={resumePic} alt="resume pic" ></img>
      </a>
    </div>
  )
};

export default Background;