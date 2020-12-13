import React, { Component } from "react";
import './HomePage.css'
import Display from "../Display/Display"



class HomePage extends Component {

  render() {
    return (
      <div>
        <Display classname="body" /> 
      </div>
    );
    }
}

export default HomePage