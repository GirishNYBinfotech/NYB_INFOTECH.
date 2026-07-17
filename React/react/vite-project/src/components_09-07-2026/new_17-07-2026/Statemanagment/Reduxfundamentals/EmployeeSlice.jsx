import { createSlice } from "@reduxjs/toolkit";

const EmployeeSlice = createSlice({
  name: "employee",
  initialState: {
    present: 0
  },

  reducers: {
    markPresent(state) {
      state.present++;
    }
  }
});

export const { markPresent }=EmployeeSlice.actions;
export default EmployeeSlice.reducer;