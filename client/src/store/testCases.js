import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTestCases } from "../api/testCases";

const initialTestCasesState = {
  testCases: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getAllTestCases = createAsyncThunk(
  "testCases/getTestCases",
  async (thunkAPI) => {
    try {
      return await getTestCases();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const testCasesSlice = createSlice({
  name: "testCases",
  initialState: initialTestCasesState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllTestCases.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getAllTestCases.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.codeBlocks = action.payload;
      })
      .addCase(getAllTestCases.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default testCasesSlice.reducer;
export const selectAllTestCases = (state) => state.testCases.testCases;
