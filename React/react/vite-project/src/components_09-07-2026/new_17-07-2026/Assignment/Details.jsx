import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPatient, assignDoctor, deletePatient, dischargePatient, setPatients } from "./patientSlice";
import Header from "./Header";
import Dashboard from "./Dashboard";
import SearchBar from "./SearchBar";
import PatientForm from "./PatientForm";
import PatientList from "./PatientList";
import { getPatients } from "./Api";

function Details() {
  const dispatch = useDispatch()
  const patients = useSelector(
    (state) => state.patient.patients
  )

  const [search, setSearch] = useState("");
  useEffect(() => {
    async function loadPatients() {
      const data = await getPatients();
      dispatch(setPatients(data));
    }

    loadPatients()
  }, [dispatch])

  function addNewPatient(patient) {
    dispatch(addPatient(patient));
  }

  function assignPatientDoctor(id, doctor) {
    if (doctor) {
      alert("Select a doctor");
      return;
    }

    dispatch(
      assignDoctor({id,doctor,})
    )
  }

  function discharge(id) {
    dispatch(dischargePatient(id));
  }

  function removePatient(id) {
    dispatch(deletePatient(id));
  }

  const filteredPatients = patients.filter((patient) =>
    patient.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      <Dashboard patients={patients} />
      <SearchBar
        search={search}
        setSearch={setSearch}/>
      <PatientForm addNewPatient={addNewPatient} />

      <PatientList
        patients={filteredPatients}
        assignPatientDoctor={assignPatientDoctor}
        dischargePatient={discharge}
        deletePatient={removePatient}/>

    </div>
  );
}

export default Details;