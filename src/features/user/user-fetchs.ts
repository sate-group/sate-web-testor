import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Profile } from "./user-slice";

export type GetMyProfileParams = {
  accessToken: string;
};
export const fetchGetMyProfile = createAsyncThunk<
  Profile,
  GetMyProfileParams,
  any
>("user/fetch-get-my-profile", async (params: GetMyProfileParams) => {
  return axios
    .get("http://localhost:3000/user/myprofile", {
      headers: { Authorization: `Bearer ${params.accessToken}` },
    })
    .then((response) => {
      return response.data;
    });
});
