import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employees",

  initialState: {
    employees: []
  },

  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        emp => emp.id !== action.payload
      );
    }
  }
})

export const { addEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;