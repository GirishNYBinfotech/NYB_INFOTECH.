import { configureStore } from "@reduxjs/toolkit";

import employeeReducer from "./employeeSlice";

const store = configureStore({

  reducer: {

    employee: employeeReducer

  }

});

console.log("🏪 Redux Store Created");

export default store;