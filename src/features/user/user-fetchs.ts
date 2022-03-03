import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Profile } from "./user-slice";

export const fetchGetMyProfile = createAsyncThunk<
  { myProfile: Profile },
  { accessToken: string }
>("user/fetch-get-my-profile", async (params) => {
  return axios
    .get("http://localhost:3000/user/myprofile", {
      headers: { Authorization: `Bearer ${params.accessToken}` },
    })
    .then((response) => ({ myProfile: response.data }));
});
