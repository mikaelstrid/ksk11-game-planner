import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { useAppSelector } from "../../app/hooks";
import { selectGames } from "./gamesSlice";

function Games() {
  const games = useAppSelector(selectGames);

  return (
    <>
      <Row>
        <Col md="3">
          <ul className="list-unstyled">
            {games.map((game) => (
              <li key={game.id}>
                <Link to={`${game.id}`}>
                  <div className="my-2">{`${game.date} ${game.opponentId}`}</div>
                </Link>
              </li>
            ))}
          </ul>
          <Link to={`/games/new`}>Ny match</Link>
        </Col>
        <Col md="9">
          <Outlet />
        </Col>
      </Row>
    </>
  );
}

export default Games;
