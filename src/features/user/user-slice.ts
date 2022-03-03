import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGetMyProfile } from "./user-fetchs";

export type Profile = {
  id: string;
  email: string;
  username: string;
  isEmailVerified: boolean;
  mention: string | undefined;
  photoUrl: string | undefined;
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetMyProfile.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(
      fetchGetMyProfile.fulfilled,
      (state, action: PayloadAction<{ myProfile: Profile }>) => {
        state.status = "succeeded";

        const myProfile = action.payload.myProfile;
        state.myProfile = myProfile;
      }
    );
    builder.addCase(fetchGetMyProfile.rejected, (state, action) => {
      state.status = "failed";

      console.log("Rejected in fetchGetMyProfile function", action.payload);
    });
  },
});

export const {} = userSlice.actions;
