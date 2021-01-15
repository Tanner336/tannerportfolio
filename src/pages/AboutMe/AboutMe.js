import React, { Component } from 'react';
import Projects from "../Projects/Projects";
import Display from "../Display/Display";
import profPic from "../../assets/github-profile-pic.png";
import resumeLink from "../../assets/TannerCookResume.pdf";
import { SettingOutlined } from "@ant-design/icons";
import { CopyOutlined } from "@ant-design/icons";
import { HomeOutlined } from "@ant-design/icons";
import "./AboutMe.css"

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gohome: false
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
    const url=resumeLink
    window.open(url,'_blank')
  }

  render() {
    return (
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
            <button className="projectsButton" onClick={this.handleHomeButton}>
                <HomeOutlined />
                <p>Home</p>
            </button>
            <button className="projectsButton" onClick={this.handleProjectsChange}>
                <SettingOutlined className="projectsImage"/>
                <p>Projects</p>
              </button>
              <button className="resumepic" onClick={this.resumeButton}>
                <CopyOutlined />
                <p>Resume</p>
              </button>
            </div>
          </div>
        </div>

    )
    
  }
};

export default AboutMe;