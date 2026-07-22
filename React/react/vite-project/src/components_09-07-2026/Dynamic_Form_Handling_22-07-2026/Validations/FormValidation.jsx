import React, { useState } from "react";

function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({})
  const handleChange=(e)=>{
    const {name,value}=e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validate = () => {
    let newErrors = {}
    if (formData.name.trim()===""){
      newErrors.name = "Name is required"
    }
    if (formData.email.trim()===""){
      newErrors.email = "Email is required"
    } 
    else if (!formData.email.includes("@")){
      newErrors.email = "Enter a valid email with @"
    }
    if (formData.password==="") {
      newErrors.password="enter Password"
    } 
    else if (formData.password.length<6) {
      newErrors.password ="Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length===0
  }
  const handleSubmit=(e)=> {
    e.preventDefault()

    if (validate()) {
      alert("Form submitted successfully")
      console.log(formData)
    }
  }

  return (
    <div>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        {errors.name && (
          <p>{errors.name}</p>
        )}

        <br />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p>{errors.email}</p>
        )}
        <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p>{errors.password}</p>
        )}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default FormValidation