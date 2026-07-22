import React, { useState } from "react";

function TextArea() {
  const [address,setAddress]=useState("")
  const handleChange=(e)=>{
    setAddress(e.target.value)
  }
  return (
    <div>
      <h2>Text Area</h2>
      <label>Address: </label>
      <textarea
        value={address}
        onChange={handleChange}
        placeholder="Enter your address"/>
      <h3>Address:</h3>
      <p>{address}</p>
    </div>
  )
}

export default TextArea