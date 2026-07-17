import React from "react";

function Dashboard({ patients }) {
  const total = patients.length;

  const admitted = patients.filter(
    (patient) => patient.status === "Admitted"
  ).length;

  const waiting = patients.filter(
    (patient) => patient.status === "Waiting"
  ).length;

  const discharged = patients.filter(
    (patient) => patient.status === "Discharged"
  ).length;

  return (
    <div className="dashboard">

      <div className="box">
        <h3>Total Patients</h3>
        <h2>{total}</h2>
      </div>

      <div className="box">
        <h3>Admitted</h3>
        <h2>{admitted}</h2>
      </div>

      <div className="box">
        <h3>Waiting</h3>
        <h2>{waiting}</h2>
      </div>

      <div className="box">
        <h3>Discharged</h3>
        <h2>{discharged}</h2>
      </div>

    </div>
  );
}

export default Dashboard;
