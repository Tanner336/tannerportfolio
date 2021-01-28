import React, { Component } from "react";
import ProjectItem from "../../components/ProjectItem"
import "./Projects.css"
import "../Display/Display.css"
import profPic from "../../assets/github-profile-pic.png"
import resumeLink from "../../assets/TannerCookResume.pdf"
import outYonderStill from "../../assets/OutYonder.png"
import outYonderMove from "../../assets/OutYonder.gif"
import gallivantStill from "../../assets/Gallivant.png"
import gallivantMove from "../../assets/Gallivant.gif"
import codeQuizStill from "../../assets/codequiz.png"
import codeQuizMove from "../../assets/codequiz.gif"
import dayplannerStill from "../../assets/dayplanner.png"
import dayplannerMove from "../../assets/dayplanner.gif"
import employeeDirStill from "../../assets/EmployeeDir.png"
import employeeDirMove from "../../assets/EmployeeDir.gif"
import Display from "../Display/Display";
import AboutMe from "../AboutMe/AboutMe";
import githubPic from "../../assets/github.png";
import githubPicWhite from "../../assets/github-white.png";
import linkedInPic from "../../assets/linkedin.png";
import linkedInPicWhite from "../../assets/linkedin-white.png";
import gmailPic from "../../assets/gmail.png";
import gmailPicWhite from "../../assets/gmail-white.png";
import { HomeOutlined } from "@ant-design/icons";
import { CopyOutlined } from "@ant-design/icons";
import { CustomerServiceOutlined } from "@ant-design/icons";




class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gohome: false,
      viewAboutMe: false,
      projects: [
        {
          title: "Out Yonder",
          description: "React/Node/Express/Mongodb app made for locating parks across the US and any additional information about them, including locations, operating hours, admission fees, etc.",
          url: "https://out-yonder.herokuapp.com/",
          github: "https://github.com/wilsoncollin7/project-3",
          image: outYonderStill,
          movingImage: outYonderMove
        },
        {
          title: "Gallivant",
          description: "JS/JQuery/Node/HTML/CSS Web application that helps plan and display travel details such as flight times, weather info for the destination, and points of interest.",
          url: "https://wasteofadrumbum.github.io/Gallivant/",
          github: "https://github.com/WasteOfADrumBum/Gallivant",
          image: gallivantStill,
          movingImage: gallivantMove
        },
        {
          title: "Code Quiz",
          description: "The 'Code' Quiz is a fun web game that asks the user simple random coding questions and challenges them to get the highest score in the alloted time.",
          url: "https://tanner336.github.io/CodeQuiz/",
          github: "https://github.com/Tanner336/CodeQuiz",
          image: codeQuizStill,
          movingImage: codeQuizMove
        },
        {
          title: "Personal Day Planner",
          description: "This is a reactive web application that utilizes local storage to schedule and plan events throught the day. It also notes the current date and time of day.",
          url: "https://tanner336.github.io/DayPlannerHW/",
          github: "https://github.com/Tanner336/DayPlannerHW",
          image: dayplannerStill,
          movingImage: dayplannerMove
        },
        {
          title: "Employee Directory",
          description: "React/JQuery/JS simple web application that allows the user to enter employee information and is then saved and displayed on a table. It also allows you to sort through those employees.",
          url: "https://tanner336.github.io/React-Employee-Dir/",
          github: "https://github.com/Tanner336/React-Employee-Dir",
          image: employeeDirStill,
          movingImage: employeeDirMove
        },
      ]

    };
    this.renderProjects = this.renderProjects.bind(this);
    this.handleHomeButton = this.handleHomeButton.bind(this);
    this.handleAboutMeChange = this.handleAboutMeChange.bind(this);
    this.resumeButton = this.resumeButton.bind(this);
  }

  renderProjects() {
    const projects = this.state.projects.map((project, index) => {
      return <ProjectItem project={project} key={index} />
    })
    return projects;

  }

  handleHomeButton() {
    this.setState({ gohome: true })
  }

  handleAboutMeChange() {
    this.setState({ viewAboutMe: true })
  }


  resumeButton() {
    const url = resumeLink
    window.open(url, '_blank')
  }


  render() {
    const goHomeValue = this.state.gohome === false & this.state.viewAboutMe === false ?
      <div>
        <div className="box">
          <div className="project-pic-container">
            <img src={profPic} alt="Profile Pic" className="projectPic"></img>
            <div className="display-text">
              <p>These are my current web applications. Showcasing my proficiencies in HTML, CSS, Node.js, JavaScript, and React.js.</p>
              <button className="homeButton" onClick={this.handleHomeButton}>
                <HomeOutlined className="homeButtonImage" />
                <p>Home</p>
              </button>
              <button className="aboutMeButton" onClick={this.handleAboutMeChange}>
                <CustomerServiceOutlined />
                <p>About Me</p>
              </button>
              <button className="resumeButton" onClick={this.resumeButton}>
                <CopyOutlined />
                <p>Resume</p>
              </button>
            </div>
            <div>
              <a href="https://github.com/Tanner336">
                <img className="githubpic" style={{marginLeft: "25px"}} src={githubPic} alt="github-logo" onMouseOver={e => e.currentTarget.src = githubPicWhite} onMouseOut={e => e.currentTarget.src = githubPic}></img>
              </a>
              <a href="https://www.linkedin.com/in/tanner-cook-3b78421ab/">
                <img className="linkedinpic" src={linkedInPic} alt="linkedIn-logo" onMouseOver={e => e.currentTarget.src = linkedInPicWhite} onMouseOut={e => e.currentTarget.src = linkedInPic}></img>
              </a>
              <a href="mailto:tannercook336@gmailcom" target="html link">
                <img className="gmailpic" src={gmailPic} alt="Gmail-logo" onMouseOver={e => e.currentTarget.src = gmailPicWhite} onMouseOut={e => e.currentTarget.src = gmailPic}></img>
              </a>
            </div>
          </div>
          <div className="project-container">
            <h1 className="projects-display-text" style={{ fontStyle: "Italic" }}>Current Projects Finished and in Development</h1>
            <section className="projects">
              <ol>
                {this.renderProjects()}
              </ol>
            </section>
          </div>
        </div>
      </div>
      : this.state.gohome === true ?
        <Display />
        :
        <AboutMe />

    return (goHomeValue)
  }
}

export default Projects;