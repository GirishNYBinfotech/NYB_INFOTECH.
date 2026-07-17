import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patient",

  initialState: {
    patients: [],
  },

  reducers: {
    setPatients(state, action) {
      state.patients = action.payload;
    },

    addPatient(state, action) {
      state.patients.push(action.payload);
    },

    deletePatient(state, action) {
      state.patients = state.patients.filter(
        patient => patient.id !== action.payload
      );
    },

    assignDoctor(state, action) {

      const patient = state.patients.find(
        p => p.id === action.payload.id
      );

      if (patient) {
        patient.doctor = action.payload.doctor;
        patient.status = "Admitted";
      }
    },

    dischargePatient(state, action) {

      const patient = state.patients.find(
        p => p.id === action.payload
      );

      if (patient) {
        patient.status = "Discharged";
      }
    }
  }
});

export const {
  setPatients,
  addPatient,
  deletePatient,
  assignDoctor,
  dischargePatient
} = patientSlice.actions;

export default patientSlice.reducer;