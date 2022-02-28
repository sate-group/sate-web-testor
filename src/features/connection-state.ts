import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
type User = {
  userID: string;
  username: string;
  permission: "guest" | "host";
};
type Device = {
  name: string;
  address: string;
  mac: string;
  isOnline: boolean;
  isLeft: boolean;

  users: User[];
};
type Account = {
  userID: string;
  username: string;
  email: string;
};
type State = {
  connectedDevice?: Device;
  myAccount?: Account;
};

// Define the initial state using that type
const initialState: State = {};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    connectDevice: (state, actions) => {},
  },
});

export const { connectDevice } = deviceSlice.actions;

export default deviceSlice.reducer;
