import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "counter",

  initialState: {
    count: 0
  },

  reducers: {
    increment(state) {
      state.count++;
    },

    decrement(state) {
      state.count--;
    },

    reset(state) {
      state.count = 0;
    }
  }
});

export const {
  increment,
  decrement,
  reset} =Slice.actions;

export default Slice.reducer;