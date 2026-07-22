import React, { useState } from "react";

function RadioButton() {
  const [gender, setGender] = useState("");
  const handleChange = (e) => {
    setGender(e.target.value);
  }
  return (
    <div>
      <h2>Radio Button</h2>
      <label>Select Gender:</label>
      <br />
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={gender==="Male"}
        onChange={handleChange}
      />
      Male
      <br />
      <input
        type="radio"
        name="gender"
        value="Female"
        checked={gender==="Female"}
        onChange={handleChange}
      />
      Female
      <br />
      <input
        type="radio"
        name="gender"
        value="Other"
        checked={gender==="Other"}
        onChange={handleChange}
      />
      Other
      <h3>Selected Gender:{gender}</h3>
    </div>
  )
}
export default RadioButton