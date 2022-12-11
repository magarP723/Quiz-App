import { createSlice } from "@reduxjs/toolkit";

const initialState = { score: 0 };
export const ScoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    storeScore(state, action) {
      state.score = action.payload;
    },
  },
});

export const getScore = (state) => state.score.score;
export const { storeScore } = ScoreSlice.actions;
export default ScoreSlice.reducer;
