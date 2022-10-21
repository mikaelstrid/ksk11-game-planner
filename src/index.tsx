import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { store } from "./app/store";
import { Provider as StoreProvider } from "react-redux";
import Root from "./Root";
import Players from "./features/players/Players";
import Games from "./features/games/Games";
import Game from "./features/games/Game";
import NewGame from "./features/games/NewGame";
import Teams from "./features/teams/Teams";
import NewTeam from "./features/teams/NewTeam";
import EditTeam from "./features/teams/EditTeam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1 className="text-center">404</h1>,
    children: [
      {
        path: "/players",
        element: <Players />,
      },
      {
        path: "/teams",
        element: <Teams />,
        children: [
          {
            path: "new",
            element: <NewTeam />,
          },
          {
            path: ":id/edit",
            element: <EditTeam />,
          },
          {
            path: ":id",
            element: <Game />,
          },
        ],
      },
      {
        path: "/games",
        element: <Games />,
        children: [
          {
            path: "new",
            element: <NewGame />,
          },
          {
            path: ":id",
            element: <Game />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
);
