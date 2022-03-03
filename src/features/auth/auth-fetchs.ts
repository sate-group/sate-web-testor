import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSignIn = createAsyncThunk<
  { accessToken: string },
  {
    emailOrUsername: string;
    password: string;
  },
  any
>("auth/fetch-signin", async (params) =>
  axios
    .post("http://localhost:3000/auth/signin", params)
    .then((response) => ({ accessToken: response.data.accessToken }))
    .catch((err) => err)
);

export const fetchCheckAuth = createAsyncThunk(
  "auth/fetch-check-auth",
  async (params: { accessToken: string }, { rejectWithValue }) =>
    axios
      .post("http://localhost:3000/auth/check", {
        headers: { Authorization: `Bearer ${params.accessToken}` },
      })
      .then((response) => {
        return { accessToken: params.accessToken };
      })
      .catch((err) => {
        if (!err.response) {
          throw err;
        }

        return rejectWithValue(err.response.data);
      })
);
