import React, { useState } from "react";

function Form_Field() {
  const [hasExperience, setHasExperience] = useState("no")
  return (
    <div>
      <h2>Conditional Form</h2>
      <label>Do you have work experience?</label>
      <select
        value={hasExperience}
        onChange={(e) => setHasExperience(e.target.value)}>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
      {hasExperience === "yes" && (
        <div>
          <label>Enter Experience:</label>
          <input type="text" placeholder="Enter experience" />
        </div>
      )}
    </div>
  )
}

export default Form_Field