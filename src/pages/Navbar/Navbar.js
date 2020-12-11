import React from 'react'
import {
  BrowserRouter,
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
            <BrowserRouter basename="/">
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="/tannerportfolio">Tanner Cook Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/tannerportfolio"></Nav.Link>
                    <Nav.Link href="/tannerportfolio">Home</Nav.Link>
                    <Nav.Link href="/tannerportfolio/projects">Projects</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/tannerportfolio">
                  <Display />
                </Route>
                <Route exact path="/tannerportfolio">
                  <Display />
                </Route>
                <Route path="/tannerportfolio/projects">
                  <Projects />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    )
  }
}

export default BootstrapNavbar;