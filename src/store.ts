import { configureStore, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { checkUserMiddleware } from "./features/account/account-middlewares";
import { authSlice } from "./features/auth/auth-slice";
import { userSlice } from "./features/user/user-slice";

// const loggingMiddleware =
//   (_: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
//     console.log(action.type);
//     next(action);
//   };

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(checkUserMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
