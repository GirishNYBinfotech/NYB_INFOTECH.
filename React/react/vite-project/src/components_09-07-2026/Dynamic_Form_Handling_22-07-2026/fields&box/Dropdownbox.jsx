import React, { useState } from "react";

function Dropdownbox() {
  const [country, setCountry] = useState("")
  const handleChange = (e) => {
    setCountry(e.target.value);
  }
  return (
    <div>
      <h2>Dropdown</h2>
      <label>Select Country: </label>
      <select value={country} onChange={handleChange}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>
      <h3>Selected Country: {country}</h3>
    </div>
  )
}

export default Dropdownbox