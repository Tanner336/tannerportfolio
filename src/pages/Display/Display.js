import React, { Component } from 'react';
import Background from "./Background";
import "./Display.css";
import profPic from "../../assets/github-profile-pic.png";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import resumeLink from "../../assets/TannerCookResume.pdf";
import githubPic from "../../assets/github.png"
import linkedInPic from "../../assets/linkedin.png"
import gmailPic from "../../assets/gmail.png"
import { SettingOutlined } from "@ant-design/icons";
import { CopyOutlined } from "@ant-design/icons";
import { CustomerServiceOutlined } from "@ant-design/icons";


class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewProjects: false,
      viewAboutMe: false
    }
    this.handleProjectsChange = this.handleProjectsChange.bind(this);
    this.resumeButton = this.resumeButton.bind(this)
    this.handleAboutMeChange = this.handleAboutMeChange.bind(this);

  }

  handleProjectsChange(props) {
    this.setState({ viewProjects: true })
  }

  handleAboutMeChange() {
    this.setState({ viewAboutMe: true })
  }

  resumeButton() {
    const url = resumeLink
    window.open(url, '_blank')
  }


  render() {
    const returnValue = this.state.viewProjects === false & this.state.viewAboutMe === false ?
      <div>
        <div className="box">
          <div className="pic-container">
            <div>
              <img src={profPic} alt="Profile Pic" className="profPic"></img>
            </div>
            <div className="display-text">
              <p>
                Full-stack software developer, living out of the research triangle in North Carolina. This portfolio is meant to display some of my favorite projects and applications.
              </p>
            </div>
            <div>
              <button className="projectsButton" onClick={this.handleProjectsChange}>
                <SettingOutlined />
                <p>Projects</p>
              </button>
              <button className="aboutMeButton" onClick={this.handleAboutMeChange}>
                <CustomerServiceOutlined />
                <p>About Me</p>
              </button>
              <button className="resumepic" onClick={this.resumeButton}>
                <CopyOutlined />
                <p>Resume</p>
              </button>
            </div>
            <div>
              <a href="https://github.com/Tanner336">
                <img className="githubpic" src={githubPic} alt="github-logo"></img>
              </a>
              <a href="https://www.linkedin.com/in/tanner-cook-3b78421ab/">
                <img className="linkedinpic" src={linkedInPic} alt="linkedIn-logo"></img>
              </a>
              <a href="mailto:tannercook336@gmailcom" target="html link">
                <img className="gmailpic" src={gmailPic} alt="Gmail-logo"></img>
              </a>
            </div>

          </div>
          <Background />
        </div>
      </div>
      : this.state.viewProjects === true ?
        <Projects />
        :
        <AboutMe />

    return (returnValue)
  }


};

export default Display;