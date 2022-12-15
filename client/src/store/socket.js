import { createSlice } from "@reduxjs/toolkit";

const initialSocketState = {
  socket: {},
  room: "",
  numOfUsers: 0,
};
const socketSlice = createSlice({
  name: "socket",
  initialState: initialSocketState,
  reducers: {
    editSocket(state, action) {
      state.socket = action.payload;
    },
    editRoom(state, action) {
      state.room = action.payload;
    },
    editNumOfUsers(state) {
      state.numOfUsers = state.numOfUsers + 1;
    },
  },
});

export default socketSlice.reducer;
export const socketActions = socketSlice.actions;
