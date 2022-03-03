import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSignIn = createAsyncThunk<
  { accessToken: string },
  {
    emailOrUsername: string;
    password: string;
  }
>("auth/fetch-signin", async (params) =>
  axios
    .post("http://localhost:3000/auth/signin", params)
    .then((response) => ({ accessToken: response.data.accessToken }))
);

export const fetchCheckAuth = createAsyncThunk<
  undefined,
  { accessToken: string }
>("auth/fetch-check-auth", async (params) =>
  axios.post("http://localhost:3000/auth/check", {
    headers: { Authorization: `Bearer ${params.accessToken}` },
  })
);
