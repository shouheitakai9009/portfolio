import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
