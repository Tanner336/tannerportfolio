import React, { Component } from "react";
import ProjectItem from "../../components/ProjectItem"
import "./Projects.css"
import profPic from "../../assets/github-profile-pic.png"
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
import thinkcakesStill from "../../assets/thinkcakes.png"
import thinkcakesMove from "../../assets/thinkcakes.gif"
import Display from "../Display/Display";




class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gohome: false,
      projects: [
        {
          title: "Out Yonder",
          description: "React/Node/Express/Mongodb app made for locating parks across the US and any additional information about them",
          url: "https://out-yonder.herokuapp.com/",
          github: "https://github.com/wilsoncollin7/project-3",
          image: outYonderStill,
          movingImage: outYonderMove
        },
        {
          title: "Gallivant",
          description: "JS/JQuery/Node/HTML/CSS Web application that helps plan and display travel details, such as flight times, weatther info for the destination, and points of interest.",
          url: "https://wasteofadrumbum.github.io/Gallivant/",
          github: "https://github.com/WasteOfADrumBum/Gallivant",
          image: gallivantStill,
          movingImage: gallivantMove
        },
        {
          title: "Code Quiz",
          description: "The 'Code' Quiz is a fun web game that asks the user simple random coding questions and challenges them to get the highest score in the alloted time",
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
          description: "React/JQuery/JS simple web application that allows the user to enter employee information and is then saved and displayed on a table.",
          url: "https://tanner336.github.io/React-Employee-Dir/",
          github: "https://github.com/Tanner336/React-Employee-Dir",
          image: employeeDirStill,
          movingImage: employeeDirMove
        },
        {
          title: "ThinkCakes",
          description: "*This project is still in development*  This is a JS/JQuery/SQL/Node/handlebars app that makes a user account and saves users favorite cake recipes. It allows them to upload their own recipes, as well as rate and comment on other users recipes.",
          url: "",
          github: "https://github.com/arodrigu1/Project2",
          image: thinkcakesStill,
          movingImage: thinkcakesMove
        }
      ]

    };
    this.renderProjects = this.renderProjects.bind(this);
    this.handleHomeButton = this.handleHomeButton.bind(this);
  }

  renderProjects() {
    const projects = this.state.projects.map((project, index) => {
      return <ProjectItem project={project} key={index}/>
        // return <li>{project.title} {index}</li> 
    })
    return projects;
      
  }

  handleHomeButton() {
    this.setState({gohome: true})
  }
    

  

  render() {
    const goHomeValue = this.state.gohome === false ?
    <div>
    <div className="projects-pic-container">
      <img src={profPic} alt="Profile Pic" style = {{padding: "2px", height: "215px", margintop: "10px" }}></img>
      <div className="display-text">
      These are my current web applications. Some are finished and some are currently being worked on in my spare time.
      <button className="homeButton" onClick={this.handleHomeButton}>
        Home
      </button>
    </div>

    </div>
    <div className="project-container">
      <h1 className="projects-display-text" style={{fontStyle: "Italic"}}>Current Projects Finished and in Development</h1>
      <section className="projects">
        <ol>
          {this.renderProjects()}
        </ol>
      </section>
    </div>
  </div>
  :
  <Display />

  return (goHomeValue)
  }
}

export default Projects;