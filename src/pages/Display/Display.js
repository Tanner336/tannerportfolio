import React from 'react';
import Background from "./Background"
import "./Display.css"


function Display() {
  const profPic = "./assets/github-profile-pic.png"

  return (
    <div>
      <div className="pic-container">
        <img src={profPic} alt="Profile Pic" style = {{padding: "2px", height: "215px", margintop: "10px" }}></img>
        <div className="display-text">
          This website is meant to display my web applications that are finished or I am currently working on to potential employers.
        </div>
      </div>
      <Background />

    </div>
    
  );

};

export default Display;