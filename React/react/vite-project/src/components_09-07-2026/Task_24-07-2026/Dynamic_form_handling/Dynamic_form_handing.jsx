import React, { useState } from "react";

function Dynamic_form_handling() {
  const [formData, setFormData]=useState({
    name: "",
    email: ""
  })

  const handleChange=(e)=>{
    const {name,value}=e.target

    setFormData({
      ...formData,
      [name]: value
    });
  }
  const handleSubmit=(e)=>{
    e.preventDefault()

    alert(
    `Name: ${formData.name}
    Email: ${formData.email}`
    )
  }
  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Dynamic_form_handling

