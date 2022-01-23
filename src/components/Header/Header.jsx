import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import menus from "./menus";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                {menus.map((menu) => (
                  <Nav.Link key={menu.id} as={NavLink} to={menu.tomenu}>
                    {" "}
                    {menu.namemenu}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
