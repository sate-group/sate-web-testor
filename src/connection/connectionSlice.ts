import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store"

// Define a type for the slice state
interface State {
  deviceSerialCode?: string,
}

// Define the initial state using that type
const initialState: State = {};

export const connectionSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    connect: (state) => {
    },
  },
});

export const { connect } = connectionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectConnection = (state: RootState) => state.connection;

export default connectionSlice.reducer;
