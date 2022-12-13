import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCodeBlocks } from "../api/codeBlocks";

const initialCodeBlocksState = {
  codeBlocks: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getAllCodeBlocks = createAsyncThunk(
  "codeBlocks/getCodeBlocks",
  async (thunkAPI) => {
    try {
      return await getCodeBlocks();
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

const codeBlocksSlice = createSlice({
  name: "codeBlocks",
  initialState: initialCodeBlocksState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCodeBlocks.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getAllCodeBlocks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.codeBlocks = action.payload;
      })
      .addCase(getAllCodeBlocks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default codeBlocksSlice.reducer;
export const selectAllCodeBlocks = (state) => state.codeBlocks.codeBlocks;
