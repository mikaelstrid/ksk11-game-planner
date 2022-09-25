import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IActivities } from "../models/all.model";
import { DataService } from "../services/data.service";

function Game() {
  const [activities, setActivities] = useState<IActivities>();

  useEffect(() => {
    setActivities(DataService.loadActivities());
  }, []);
  let { id } = useParams();

  if (!activities) return <p>Laddar...</p>;

  if (!id) return <p>404</p>;

  const game = activities.games.find((a) => a.id === parseInt(id ?? ""));
  if (!game) return <p>404</p>;

  return (
    <div>
      <h2>
        {`${game.datetime.toLocaleDateString("sv")} ${game.opponent.name}`}
      </h2>
    </div>
  );
}

export default Game;
