import React, { Component } from 'react';
import Projects from "../Projects/Projects";
import Display from "../Display/Display";
import profPic from "../../assets/github-profile-pic.png";
import resumeLink from "../../assets/TannerCookResume.pdf";
import githubPic from "../../assets/github.png"
import linkedInPic from "../../assets/linkedin.png"
import gmailPic from "../../assets/gmail.png"
import { SettingOutlined } from "@ant-design/icons";
import { CopyOutlined } from "@ant-design/icons";
import { HomeOutlined } from "@ant-design/icons";
import "./AboutMe.css"

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gohome: false,
      viewProjects: false
    }

    this.handleHomeButton = this.handleHomeButton.bind(this);
    this.handleProjectsChange = this.handleProjectsChange.bind(this);
    this.resumeButton = this.resumeButton.bind(this);

  }

  handleHomeButton() {
    this.setState({ gohome: true })
  }

  handleProjectsChange(props) {
    this.setState({ viewProjects: true })
  }

  resumeButton() {
    const url = resumeLink
    window.open(url, '_blank')
  }

  render() {
    const aboutMeValue = this.state.gohome === false & this.state.viewProjects === false ?
      <div>
        <div className="box">
          <div className="picContainerAboutMe">
            <div>
              <img src={profPic} alt="Profile Pic" className="profPic"></img>
            </div>
            <div className="display-text">
              <p>
                Full-stack software developer, living out of the research triangle in North Carolina. This portfolio is meant to display some of my favorite projects and applications.
              </p>
            </div>
            <button className="homeButtonAbout" onClick={this.handleHomeButton}>
              <HomeOutlined />
              <p>Home</p>
            </button>
            <button className="projectsButton" onClick={this.handleProjectsChange}>
              <SettingOutlined className="projectsImage" />
              <p>Projects</p>
            </button>
            <button className="resumepic" onClick={this.resumeButton}>
              <CopyOutlined />
              <p>Resume</p>
            </button>
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
        </div>
      </div>
      : this.state.viewProjects === true ?
        <Projects />
        :
        <Display />

    return (aboutMeValue)

  }
};

export default AboutMe;