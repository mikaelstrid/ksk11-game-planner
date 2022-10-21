import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { useAppSelector } from "../../app/hooks";
import { selectTeams } from "./teamsSlice";

function Teams() {
  const teams = useAppSelector(selectTeams);

  return (
    <>
      <Row>
        <Col md="3">
          <ul className="list-unstyled">
            {teams.map((team) => (
              <li key={team.id}>
                <Link to={`${team.id}/edit`}>
                  <div className="my-2">{team.name}</div>
                </Link>
              </li>
            ))}
          </ul>
          <Link to={`/teams/new`}>Nytt lag</Link>
        </Col>
        <Col md="9">
          <Outlet />
        </Col>
      </Row>
    </>
  );
}

export default Teams;
