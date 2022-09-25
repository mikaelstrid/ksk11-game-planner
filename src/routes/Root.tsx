import React from "react";
import { Container } from "reactstrap";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default Root;
