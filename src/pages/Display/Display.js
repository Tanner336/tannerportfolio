import React, { Component } from 'react';
import Background from "./Background"
import "./Display.css"
import profPic from "../../assets/github-profile-pic.png"
import resumePic from "../../assets/resume-pic.png"
import Projects from "../Projects/Projects"
import resumeLink from "../../assets/TannerResume2020.pdf"
import Footer from "../Footer/Footer";


class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewProjects: false
    }
    this.handleProjectsChange = this.handleProjectsChange.bind(this);
    this.resumeButton = this.resumeButton.bind(this)

  }

  handleProjectsChange(props) {
    this.setState({ viewProjects: true })
  }

  resumeButton() {
    const url=resumeLink
    window.open(url,'_blank')
  }


  render() {
    const returnValue = this.state.viewProjects === false ?
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
                <p>Projects</p>
              </button>
              <button className="resumepic" onClick={this.resumeButton}>
                <p>Resume</p>
              </button>
            </div>

          </div>
          <Background />


        </div>
        <Footer />
      </div>
      :
      <Projects />

    return (returnValue)
  }


};

export default Display;