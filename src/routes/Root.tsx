import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar color="light" className="mb-5">
        <NavbarBrand href="/">KSK Team 11 Game Planner</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="/players">Spelare</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/games">Matcher</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Container>
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
