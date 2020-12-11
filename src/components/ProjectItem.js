import React, { Component } from "react";

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
      <div style={{height: "100%", width: "850px", margin: "5%", backgroundColor: "lightblue", borderStyle: "solid"}}>
        <div>
          <img src={this.state.image} onMouseEnter={this.moveImage} onMouseLeave={this.stillImage} style={{height:"115px", width: "200px", margin: "1%", float:"left"}} alt="project pic"></img>
        </div>
        <div style={{fontFamily: "Verdana, sans-serif", fontWeight: "bold", fontSize: "larger", textDecoration: "underline"}}>
          <p>{this.props.project.title}</p>
        </div>
        <div style={{fontFamily: "Brush Script MT"}}>
          <p>{this.props.project.description}</p>
        </div>
        <div style={{fontFamily: "Brush Script MT"}}>
          <p>Github Repo: <a href={this.props.project.github}>{this.props.project.title}</a></p>
        </div>
        <div style={{fontFamily: "Brush Script MT"}}>
          <p>URL: <a href={this.props.project.url}>{this.props.project.title}</a></p>
        </div>
        
      </div>
    )
  }
}

export default ProjectItem;
