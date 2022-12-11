import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  error: null,
  status: "idle",
};
export const fetchCategory = createAsyncThunk("categories", async () => {
  try {
    const response = await axios.get("https://opentdb.com/api_category.php");
    return response.data.trivia_categories;
  } catch (err) {
    return err;
  }
});

export const QuizSlice = createSlice({
  name: "category",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = "success";
        state.categories = state.categories.concat(action.payload);
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.err;
      });
  },
});

export const getCategories = (state) => state.category.categories;
export const getStatus = (state) => state.category.status;
export const getError = (state) => state.category.error;
export default QuizSlice.reducer;
