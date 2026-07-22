import React, { useState } from "react";

function Inputfield() {
  const [formData, setFormData] = useState("")

  const handleChange = (e) => {
    setFormData(e.target.value)
  }
  return (
    <div>
      <h2>Registration Form</h2>

      <input
        type="text"
        name="name"
        value={formData}
        onChange={handleChange}
        placeholder="Enter name"
      />


      <h3>Entered Data</h3>
      <p>Name: {formData}</p>
    </div>
  );
}

export default Inputfield