import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { useAppSelector } from "../../app/hooks";
import TeamHelper from "../../helpers/team.helper";
import { selectTeams } from "../teams/teamsSlice";
import { selectGames } from "./gamesSlice";

function Games() {
  const games = useAppSelector(selectGames);
  const teams = useAppSelector(selectTeams);

  return (
    <>
      <Row>
        <Col md="3">
          <ul className="list-unstyled">
            {games.map((game) => (
              <li key={game.id}>
                <Link to={`${game.id}`}>
                  <div className="my-2">
                    {TeamHelper.getTeamName(game.opponentId, teams)}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <hr />
          <Link to={`/games/new`}>+ Ny match</Link>
        </Col>
        <Col md="9">
          <Outlet />
        </Col>
      </Row>
    </>
  );
}

export default Games;
