import React from 'react';
import "./Footer.css";
import githubPic from "../../assets/github.png"
import linkedInPic from "../../assets/linkedin.png"
import gmailPic from "../../assets/gmail.png"


function Footer() {


  return (
    <div className="footer-container">
      <div className="footer-text">
          <a href="https://github.com/Tanner336">
            <img className="githubpic" src={githubPic} alt="github-logo"></img>
          </a>
          <a href="https://www.linkedin.com/in/tanner-cook-3b78421ab/">
            <img className="linkedInpic" src={linkedInPic} alt="linkedIn-logo"></img>
          </a>
          <a href="mailto:tannercook336@gmailcom" target= "html link">
            <img className="gmailpic" src={gmailPic} alt="Gmail-logo"></img>
          </a>
      </div>
    </div>
  );

};

export default Footer;