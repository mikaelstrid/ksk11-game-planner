import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITeam } from "../../models/all.model";

export type TeamsState = ITeam[];

const initialState: TeamsState = [
  { id: "1", name: "Stenungsund Stingers" },
  { id: "2", name: "Lerum BK" },
];

export const TeamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ITeam>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state = state.filter((p) => p.id !== action.payload);
    },
    update: (state, action: PayloadAction<ITeam>) => {
      const index = state.findIndex((p) => p.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});

export const { add, remove, update } = TeamsSlice.actions;

export default TeamsSlice.reducer;
