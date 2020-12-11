import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class BootstrapNavbar extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand href="/tannerportfolio/#">
                Tanner Cook Portfolio
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/tannerportfolio/#">Home</Nav.Link>
                  <Nav.Link href="/tannerportfolio/projects">Projects</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    )
  }
}

export default BootstrapNavbar;