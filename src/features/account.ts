import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type User = {
  userId: string;
  email: string;
  username: string;
};
type State = {
  value: {
    user?: User;
    accessToken?: string;
  };
  /**
   * idle: no user, not sign in
   * loading: attempt to sign in
   * succeeded: success sign in
   * failed: fail sign in
   */
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
};

// Define the initial state using that type
const initialState: State = {
  value: {},
  status: "idle",
};

export type SignInParams = {
  emailOrUsername: string;
  password: string;
};
export const signIn = createAsyncThunk(
  "account/signin",
  async (params: SignInParams) => {
    const data = await axios
      .post("http://localhost:3000/user/signin", params)
      .then((response) => {
        return response.data;
      });

    return data;
    // .then((response: { data: { accessToken: string } }) => {
    //   const accessToken = response.data.accessToken;
    //   console.dir(accessToken);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    // .then(() => {});
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.value = {
        ...state.value,
        user: action.payload,
      };
    },
    setAccessToken: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.value = {
        ...state.value,
        accessToken: action.payload.accessToken,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.value = {
        ...state.value,
        accessToken: action.payload.accessToken,
      };
    });

    builder.addCase(signIn.rejected, (state, action) => {
      state.status = "failed";

      console.log(action.payload);
    });
  },
});

export const { setUser, setAccessToken } = accountSlice.actions;

export default accountSlice.reducer;
