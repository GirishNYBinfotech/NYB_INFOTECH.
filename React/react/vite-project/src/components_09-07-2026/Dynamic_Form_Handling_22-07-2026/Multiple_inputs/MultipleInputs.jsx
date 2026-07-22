import React, { useState } from "react";

function MultipleInputs() {
  const [formData,setFormData]=useState({
    name: "",
    email: "",
    age: ""
  })
  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <div>
      <h2>Registration Form</h2>
      <form >
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />
        <label>Age: </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      <h3>Entered Data</h3>
      <p>Name:{formData.name}</p>
      <p>Email:{formData.email}</p>
      <p>Age:{formData.age}</p>
    </div>
  );
}

export default MultipleInputs