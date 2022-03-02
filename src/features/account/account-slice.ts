import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { conformsTo } from "lodash";
import { fetchGetUserProfile } from "./account-fetchs";

export type Profile = {
  userId: string;
  email: string;
  username: string;
  isEmailVerified: boolean;

  // optional
  mention: string | undefined;
  photoUrl: string | undefined;
};
type State = {
  value: {
    profile?: Profile;
    accessToken?: string;
  };
  /**
   * idle: no user, not sign in
   * pending: attempt to sign in
   * succeeded: success sign in
   * failed: fail sign in
   */
  status: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
};

// Define the initial state using that type
const initialState: State = {
  value: {},
  status: "idle",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(fetchGetUserProfile.pending, (state) => {});
    builder.addCase(
      fetchGetUserProfile.fulfilled,
      (state, action: PayloadAction<{ profile: Profile }>) => {
        const profile = action.payload.profile;
        state.value.profile = profile;
      }
    );
    builder.addCase(fetchGetUserProfile.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const {} = accountSlice.actions;
