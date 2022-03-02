import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


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
  