import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    selectCareer(state, { payload }: PayloadAction<number | null>) {
      state.selctedCareerId = payload;
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
