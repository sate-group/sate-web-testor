import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Profile = {
  id: string;
  email: string;
  username: string;
  isEmailVerified: boolean;
  displayName: string;
  mention: string;
  photoUrl: string;
};
type State = {
  myProfile?: Profile;
  /**
   * idle: no profile, not sign in
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
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = authSlice.actions;
