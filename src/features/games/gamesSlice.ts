import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IGame } from "../../models/all.model";

export interface GamesState {
  games: IGame[];
}

const initialState: GamesState = {
  games: [
    {
      id: 1,
      date: new Date().toISOString().substring(0, 10),
      opponentId: 1,
      isHomeGame: true,
      roosters: [
        { id: 1, players: [1, 2] },
        { id: 2, players: [2] },
      ],
    },
    {
      id: 2,
      date: new Date().toISOString().substring(0, 10),
      opponentId: 2,
      isHomeGame: true,
      roosters: [],
    },
  ],
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IGame>) => {
      state.games.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.games = state.games.filter((p) => p.id !== action.payload);
    },
    addRoosterToGame: (state, action: PayloadAction<number>) => {
      const game = state.games.find((g) => g.id === action.payload);
      if (game) {
        game.roosters.push({
          id:
            game?.roosters.map((r) => r.id).reduce((a, b) => Math.max(a, b)) +
            1,
          players: [],
        });
      }
    },
    addPlayerToRooster: (
      state,
      action: PayloadAction<{
        gameId: number;
        roosterId: number;
        playerId: number;
      }>
    ) => {
      const game = state.games.find((g) => g.id === action.payload.gameId);
      if (game) {
        const rooster = game.roosters.find(
          (r) => r.id === action.payload.roosterId
        );
        if (rooster) {
          rooster.players.push(action.payload.playerId);
        }
      }
    },
    removePlayerFromRooster: (
      state,
      action: PayloadAction<{
        gameId: number;
        roosterId: number;
        playerId: number;
      }>
    ) => {
      const game = state.games.find((g) => g.id === action.payload.gameId);
      if (game) {
        const rooster = game.roosters.find(
          (r) => r.id === action.payload.roosterId
        );
        if (rooster) {
          rooster.players = rooster.players.filter(
            (p) => p !== action.payload.playerId
          );
        }
      }
    },
  },
});

export const {
  add,
  remove,
  addRoosterToGame,
  addPlayerToRooster,
  removePlayerFromRooster,
} = gamesSlice.actions;

export const selectGames = (state: RootState) => state.games.games;
export const selectNextGameId = (state: RootState) =>
  state.games.games.map((t) => t.id).reduce((a, b) => Math.max(a, b)) + 1;

export default gamesSlice.reducer;
