import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: []
};

const employeeSlice = createSlice({
  name: "employee",

  initialState,

  reducers: {

    addEmployee: (state, action) => {

      console.log("====================================");
      console.log("🏪 REDUCER : addEmployee");

      console.log("Action Payload");
      console.log(action.payload);

      console.log("Store Before Update");
      console.log(state.employees);

      state.employees.push(action.payload);

      console.log("Store After Update");
      console.log(state.employees);
    },

    deleteEmployee: (state, action) => {

      console.log("====================================");
      console.log("🗑 REDUCER : deleteEmployee");

      console.log("Delete ID");
      console.log(action.payload);

      console.log("Store Before Update");
      console.log(state.employees);

      state.employees = state.employees.filter(
        emp => emp.id !== action.payload
      );

      console.log("Store After Update");
      console.log(state.employees);
    }

  }

});

export const {
  addEmployee,
  deleteEmployee
} = employeeSlice.actions;

export default employeeSlice.reducer;