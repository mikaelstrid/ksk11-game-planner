import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { useAppSelector } from "../../app/hooks";

function Players() {
  const players = useAppSelector((state) => state.players);

  return (
    <>
      <Row>
        <Col md="3">
          <ul className="list-unstyled">
            {players.map((game) => (
              <li key={game.id}>
                <Link to={`${game.id}`}>
                  <div className="my-2">{`${game.number}. ${game.name} `}</div>
                </Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col md="9">
          <Outlet />
        </Col>
      </Row>
    </>
  );
}

export default Players;
