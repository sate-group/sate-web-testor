import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";


export const checkUserMiddleware =
  (api: MiddlewareAPI) => (next: Dispatch) => (action: Action<string>) => {
    next(action);
  };
