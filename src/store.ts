import { configureStore, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { checkUserMiddleware } from "./features/account/account-middlewares";
import { accountSlice } from "./features/account/account-slice";
import { authSlice } from "./features/auth/auth-slice";

// const loggingMiddleware =
//   (_: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
//     console.log(action.type);
//     next(action);
//   };

export const store = configureStore({
  reducer: {
    account: accountSlice.reducer,
    auth: authSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(checkUserMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
