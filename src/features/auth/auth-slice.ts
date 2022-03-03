import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCheckAuth, fetchSignIn } from "./auth-fetchs";

type State = {
  accessToken?: string;
  /**
   * idle: no data, not sign in
   * pending: attempt to sign in
   * succeeded: success sign in
   * failed: fail sign in
   */
  status: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
};

// Define the initial state using that type
const initialState: State = {
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * fetchSignIn
     */
    builder.addCase(fetchSignIn.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(
      fetchSignIn.fulfilled,
      (state, action: PayloadAction<{ accessToken: string }>) => {
        state.status = "succeeded";

        const accessToken = action.payload.accessToken;
        state.accessToken = accessToken;
      }
    );
    builder.addCase(fetchSignIn.rejected, (state) => {
      state.status = "failed";
    });
    /**
     * fetchCheckAuth
     */
    builder.addCase(fetchCheckAuth.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(
      fetchCheckAuth.fulfilled,
      (state, action: PayloadAction<{ accessToken: string }>) => {
        state.status = "succeeded";

        const accessToken = action.payload.accessToken;
        state.accessToken = accessToken;
      }
    );
    builder.addCase(fetchCheckAuth.rejected, (state, action) => {
      state.status = "failed";
      console.log(action);
    });
  },
});

export const {} = authSlice.actions;
