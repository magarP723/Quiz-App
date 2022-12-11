import { createSlice } from "@reduxjs/toolkit";
//this creates selected answer array to evaluate score.
const initialState = [
  { id: 0, answer: "" },
  { id: 1, answer: "" },
  { id: 2, answer: "" },
  { id: 3, answer: "" },
  { id: 4, answer: "" },
];
export const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    addAnswer(state, action) {
      const a = action.payload.questionID;
      state[a].answer = action.payload.answer;
    },
  },
});

export const getAllAnswers = (state) => state.answer;
export const { addAnswer } = answerSlice.actions;
export default answerSlice.reducer;
