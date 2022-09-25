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
      <Row>
        <Col md="3">
          <ul className="list-unstyled">
            {activities.games.map((game) => (
              <li key={game.id}>
                <Link to={`${game.id}`}>
                  <div className="my-2">{`${game.datetime.toLocaleDateString(
                    "sv"
                  )} ${game.opponent.name}`}</div>
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
