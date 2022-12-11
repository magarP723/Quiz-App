import { configureStore } from "@reduxjs/toolkit";
import getCategory from "./features/CategorySlice";
import getQuestion from "./features/QuestionSlice";
import answerReducer from "./features/CheckAnswer";
import scoreReducer from "./features/ScoreSlice";
export const store = configureStore({
  reducer: {
    category: getCategory,
    question: getQuestion,
    answer: answerReducer,
    score: scoreReducer,
  },
});
