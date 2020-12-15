import React, { Component } from "react";

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewProjects: false
    }
    this.handleProjectsChange = this.handleProjectsChange.bind(this);

  }

  handleProjectsChange(props) {
    this.setState(this.viewProjects === true)
  }


  render() {
    return (
      <div>
        <button onClick={this.handleProjectsChange}>
          View Projects
        </button>
      </div>
    );
  }

}


export default NavButton;