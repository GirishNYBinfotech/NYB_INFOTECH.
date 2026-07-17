import React from "react";
import PatientCard from "./PatientCard";


function PatientList({
  patients,
  assignPatientDoctor,
  dischargePatient,
  deletePatient,
}) {
  return (
    <div className="patient-list">

      {patients.map((patient) => (
        <PatientCard
          key={patient.id}
          patient={patient}
          assignPatientDoctor={assignPatientDoctor}
          dischargePatient={dischargePatient}
          deletePatient={deletePatient}
        />
      ))}

    </div>
  );
}

export default PatientList;