import { createSlice } from "@reduxjs/toolkit";

const notSignSlice = createSlice({
  name: "not-sign",
  initialState: { notSign: true },
  reducers: {
    notSignToggle(state, action) {
      state.notSign = action.payload;
    },
  },
});

export const notSignAction = notSignSlice.actions;

export default notSignSlice;
