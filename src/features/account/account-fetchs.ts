import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type SignInParams = {
  emailOrUsername: string;
  password: string;
};
export const fetchSignIn = createAsyncThunk(
  "account/fetch-signin",
  async (params: SignInParams) =>
    axios
      .post("http://localhost:3000/user/signin", params)
      .then((response) => ({ accessToken: response.data.accessToken }))
);

export type GetUserProfileParams = {
  accessToken: string;
};
export const fetchGetUserProfile = createAsyncThunk(
  "account/fetch-get-user-profile",
  async (params: GetUserProfileParams) => {
    return axios
      .get("http://localhost:3000/user/myprofile", {
        headers: { Authorization: `Bearer ${params.accessToken}` },
      })
      .then((response) => {
        return { profile: response.data };
      });
  }
);
