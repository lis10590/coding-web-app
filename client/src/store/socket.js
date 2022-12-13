import { createSlice } from "@reduxjs/toolkit";

const initialSocketState = { socket: {} };
const socketSlice = createSlice({
  name: "socket",
  initialState: initialSocketState,
  reducers: {
    editSocket(state, action) {
      state.socket = action.payload;
    },
  },
});

export default socketSlice.reducer;
export const socketActions = socketSlice.actions;
