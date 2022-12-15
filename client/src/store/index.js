import { configureStore } from "@reduxjs/toolkit";
import codeBlocksReducer from "./codeBlocks";
import socketReducer from "./socket";
import usersReducer from "./users";
import testCasesReducer from "./testCases";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["editSocket"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
  reducer: {
    codeBlocks: codeBlocksReducer,
    socket: socketReducer,
    users: usersReducer,
    testCases: testCasesReducer,
  },
});

export default store;
