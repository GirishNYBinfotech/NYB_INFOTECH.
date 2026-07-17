import React, { useState } from "react";

function PatientForm({ addNewPatient }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Please fill all fields");
      return;
    }

    addNewPatient({
      id: Date.now(),
      name,
      email,
      phone,
      doctor: "Not Assigned",
      status: "Waiting",
    });

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form className="patient-form" onSubmit={submitHandler}>

      <input
        type="text"
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}/>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}/>

      <button type="submit">Add Patient</button>
    </form>
  );
}

export default PatientForm;