import React, { useEffect, useState } from "react";
import { DataService } from "./services/data.service";

function App() {
  // const [schedule, setSchedule] = useState<ISchedule>();

  // useEffect(() => {
  //   DataService.loadSchedule();
  //   setSchedule(DataService.loadSchedule());
  // }, []);

  // const teams = DataService.getTeams();
  // DataService.registerUpdateCallback(() => {
  //   setSchedule(DataService.loadSchedule());
  // });

  return (
    <div>Hello world!</div>
  );
}

export default App;
