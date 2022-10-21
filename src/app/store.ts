import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "../features/players/playersSlice";
import gamesReducer from "../features/games/gamesSlice";
import teamsReducer from "../features/teams/teamsSlice";

export const store = configureStore({
  reducer: {
    players: playersReducer,
    games: gamesReducer,
    teams: teamsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
