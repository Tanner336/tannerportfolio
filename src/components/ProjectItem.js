import React, { Component } from "react";
import "../pages/Projects/Projects.css"

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      image: this.props.project.image
    }
  
    this.moveImage=this.moveImage.bind(this)
    this.stillImage=this.stillImage.bind(this)
  }


  moveImage () {
    this.setState({image: this.props.project.movingImage})
  }

  stillImage () {
    this.setState({image: this.props.project.image})
  }

  render() {
    return(
      <div className="projectCard">
        <div>
          <img src={this.state.image} onMouseEnter={this.moveImage} onMouseLeave={this.stillImage} style={{height:"115px", width: "200px", margin: "1%", float:"left"}} alt="project pic"></img>
        </div>
        <div style={{fontFamily: "Helvetica, san-serif", fontWeight: "bold", fontSize: "larger", textDecoration: "underline"}}>
          <p>{this.props.project.title}</p>
        </div>
        <div style={{fontFamily: "Garamond, serif", fontWeight: "bold"}}>
          <p>{this.props.project.description}</p>
        </div>
        <div style={{fontFamily: "Garamond, serif", fontWeight: "bold"}}>
          <p>Github Repo: <a href={this.props.project.github}>{this.props.project.title}</a></p>
        </div>
        <div style={{fontFamily: "Garamond, serif", fontWeight: "bold"}}>
          <p>URL: <a href={this.props.project.url}>{this.props.project.title}</a></p>
        </div>
        
      </div>
    )
  }
}

export default ProjectItem;
