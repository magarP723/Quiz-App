import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { modifyResult } from "../utils/shuffleOption";
import axios from "axios";

const initialState = {
  questions: [],
  error: null,
  status: "idle",
};

export const fetchQuestions = createAsyncThunk("questions", async (data) => {
  const { categoryId } = data;
  try {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=5&category=${categoryId}`
    );
    return response.data.results;
  } catch (err) {
    return err;
  }
});

export const QuestionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestions.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "success";
        const finalData = action.payload.map((i, key) => modifyResult(i, key));
        state.questions = state.questions.concat(finalData);
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.err;
      });
  },
});

export const getQuestions = (state) => state.question.questions;
export const getQueStatus = (state) => state.question.status;
export const getQueError = (state) => state.question.error;

export default QuestionSlice.reducer;
