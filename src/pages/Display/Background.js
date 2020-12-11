import React from 'react';
import "./Background.css"

function Background() {

  return(
    <div className="background-container">
      <h1 className="background-text">Welcome to Tanner Cook's Portfolio</h1>
      <a href="./assets/Tanner Resume 2020 (1).pdf" target="blank">
        <img className="resumepic" src={"./assets/resume-pic.png"} alt="resume pic" ></img>
      </a>
    </div>
  )
};

export default Background;