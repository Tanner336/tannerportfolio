import React, { Component } from "react";
import './Container.css'
import HomePage from "../HomePage/HomePage";


class Container extends Component {

  render() {
    return (
      <div>
        <HomePage className="wholeContainer" /> 
      </div>
    );
    }

}

export default Container;