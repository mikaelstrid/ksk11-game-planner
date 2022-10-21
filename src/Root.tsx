import React from "react";
import { Container, Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar color="light" className="mb-5">
        <NavbarBrand href="/">KSK Team 11 Game Planner</NavbarBrand>
        <Nav>
          <NavItem>
            <Link to={`/players`} className="nav-link">
              Spelare
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`/teams`} className="nav-link">
              Lag
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`/games`} className="nav-link">
              Matcher
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
      <Container fluid>
        <Outlet />
      </Container>
      <div className="container">
        <footer className="my-4">
          <p className="text-center text-muted border-top mt-3 pt-3">
            © 2022 Kållered Icebears Team 11
          </p>
        </footer>
      </div>
    </>
  );
}

export default Root;
