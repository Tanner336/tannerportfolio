import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import Display from '../Display/Display';
import Projects from '../Projects/Projects';

class BootstrapNavbar extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="/">Tanner Cook Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/"></Nav.Link>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/">
                  <Display />
                </Route>
                <Route exact path="/">
                  <Display />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default BootstrapNavbar;