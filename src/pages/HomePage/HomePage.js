import React, { Component } from "react";
import './HomePage.css'
import BootstrapNavbar from "../Navbar/Navbar";
import Display from "../Display/Display"
import Footer from "../Footer/Footer";


class HomePage extends Component {


  render() {
    return (
      <div>
        <BootstrapNavbar />
        <Display classname="body"/>
        <Footer classname= "footer"/>
      </div>
    );
    }
}

export default HomePage