import { configureStore } from "@reduxjs/toolkit";
import codeBlocksReducer from "./codeBlocks";
import socketReducer from "./socket";

const store = configureStore({
  reducer: {
    codeBlocks: codeBlocksReducer,
    socket: socketReducer,
  },
});

export default store;
