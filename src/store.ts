import { configureStore } from "@reduxjs/toolkit";
import { accountSlice } from "./features/account";
import deviceReducer from "./features/connection-state";

export const store = configureStore({
  reducer: {
    device: deviceReducer,
    account: accountSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
