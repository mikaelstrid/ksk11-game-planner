import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { IActivities } from "../models/all.model";
import { DataService } from "../services/data.service";

function Games() {
  const [activities, setActivities] = useState<IActivities>();

  useEffect(() => {
    setActivities(DataService.loadActivities());
  }, []);

  if (!activities) return <p>Laddar...</p>;

  return (
    <>
      <h1>Matcher</h1>
      <Row>
        <Col md="3">
          <ul>
            {activities.games.map((game) => (
              <li key={game.id}>
                <Link to={`${game.id}`}>
                  {`${game.datetime.toLocaleDateString("sv")} ${
                    game.opponent.name
                  }`}
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

export default Games;
