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

  }

  handleProjectsChange(props) {
    this.setState({viewProjects: true})
  }


  render() {
    const returnValue = this.state.viewProjects === false ?
      <div>
      <div className="pic-container">
        <img src={profPic} alt="Profile Pic" className="profPic"></img>
        <div className="display-text">
          This website is meant to display my web applications that are finished or I am currently working on to potential employers.
        </div>
        <a href={resumeLink} target="blank">
        <img className="resumepic" src={resumePic} alt="resume pic" ></img>
        </a>
        <button className="projectsButton" onClick={this.handleProjectsChange}>
          View Projects
        </button>

      </div>
      <Background />
      <Footer />

    </div>
    :
    <Projects />
    
    return (returnValue)  
  }


};

export default Display;