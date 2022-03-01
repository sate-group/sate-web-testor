import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGetUserProfile, fetchSignIn } from "./account-fetchs";

export type Profile = {
  userId: string;
  email: string;
  username: string;
  isEmailVerified: boolean;
  displayName: string;
  mention: string;
  photoUrl: string;
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
    builder.addCase(fetchSignIn.pending, (state) => {});
    builder.addCase(
      fetchSignIn.fulfilled,
      (state, action: PayloadAction<{ accessToken: string }>) => {
        const accessToken = action.payload.accessToken;
        state.value = {
          ...state.value,
          accessToken,
        };
      }
    );
    builder.addCase(fetchSignIn.rejected, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(fetchGetUserProfile.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(
      fetchGetUserProfile.fulfilled,
      (state, action: PayloadAction<{ profile: Profile }>) => {
        const profile = action.payload.profile;
        state.status = "succeeded";
        state.value.profile = profile;
      }
    );
    builder.addCase(fetchGetUserProfile.rejected, (state, action) => {
      state.status = "failed";

      console.log(action.payload);
    });
  },
});

export const {} = accountSlice.actions;

export default accountSlice.reducer;
