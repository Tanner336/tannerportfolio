import React from 'react';
import "./Footer.css";

function Footer() {


  return (
    <div className="footer-container">
      <div className="footer-text">
          <a href="https://github.com/Tanner336">
            <img className="githubpic" src={"./assets/github.png"} alt="github-logo"></img>
          </a>
          <a href="https://www.linkedin.com/in/tanner-cook-3b78421ab/">
            <img className="linkedInpic" src={"./assets/linkedin.png"} alt="linkedIn-logo"></img>
          </a>
          <a href="mailto:tannercook336@gmailcom" target= "html link">
            <img className="gmailpic" src={"./assets/gmail.png"} alt="Gmail-logo"></img>
          </a>
      </div>
    </div>
  );

};

export default Footer;