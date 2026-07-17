import React, { useState } from "react";

function PatientCard({
  patient,
  assignPatientDoctor,
  dischargePatient,
  deletePatient,
}) {
  const [doctor, setDoctor] = useState("");

  return (
    <div className="card">
      <h3>{patient.name}</h3>
      <p>Email : {patient.email}</p>
      <p>Phone : {patient.phone}</p>
      <p>Doctor : {patient.doctor}</p>
      <p>Status : {patient.status}</p>
      <select
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}>
        <option value="">Select Doctor</option>
        <option>Dr. Smith</option>
        <option>Dr. Kumar</option>
        <option>Dr. Priya</option>
        <option>Dr. James</option>
      </select>

      <br /><br />
      <button onClick={() =>assignPatientDoctor(patient.id, doctor)}>Assign</button>
      <button onClick={() => dischargePatient(patient.id)}> Discharge</button>
      <button onClick={() => deletePatient(patient.id)}>Delete</button>
    </div>
  );
}

export default PatientCard;