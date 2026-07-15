import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./CounterSlice"

const store = configureStore({
  reducer: {
    counter: CountSlice,
  },
});

export default store;