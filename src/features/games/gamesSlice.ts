import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { IGame } from "../../models/all.model";

export type GamesState = IGame[];

const initialState: GamesState = [
  {
    id: "1",
    date: new Date().toISOString().substring(0, 10),
    opponentId: "1",
    isHomeGame: true,
    roosters: [
      { id: "1", players: ["1", "2"] },
      { id: "2", players: ["2"] },
    ],
  },
  {
    id: "2",
    date: new Date().toISOString().substring(0, 10),
    opponentId: "2",
    isHomeGame: true,
    roosters: [],
  },
];

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IGame>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state = state.filter((p) => p.id !== action.payload);
    },
    addRoosterToGame: (state, action: PayloadAction<string>) => {
      const game = state.find((g) => g.id === action.payload);
      if (game) {
        game.roosters.push({
          id: nanoid(),
          players: [],
        });
      }
    },
    addPlayerToRooster: (
      state,
      action: PayloadAction<{
        gameId: string;
        roosterId: string;
        playerId: string;
      }>
    ) => {
      const game = state.find((g) => g.id === action.payload.gameId);
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
        gameId: string;
        roosterId: string;
        playerId: string;
      }>
    ) => {
      const game = state.find((g) => g.id === action.payload.gameId);
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

export default gamesSlice.reducer;
