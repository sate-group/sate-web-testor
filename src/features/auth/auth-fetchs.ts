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
      .post("http://localhost:3000/auth/signin", params)
      .then((response) => ({ accessToken: response.data.accessToken }))
);
