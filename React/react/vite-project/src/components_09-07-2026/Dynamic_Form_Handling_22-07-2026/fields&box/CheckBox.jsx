import React, { useState } from "react";

function Checkbox() {
  const [skills,setSkills]=useState([])
  const handleChange=(e)=>{
    const { value, checked }=e.target
    if(checked){
      setSkills([...skills, value]);
    } 
    else {
      setSkills(
        skills.filter((skill)=>skill!==value)
      )
    }
  }

  return (
    <div>
      <h2>Checkbox</h2>
      <label>Select Skills:</label>
      <br />
      <input
        type="checkbox"
        value="HTML"
        checked={skills.includes("HTML")}
        onChange={handleChange}
      />
      HTML
      <br />
      <input
        type="checkbox"
        value="CSS"
        checked={skills.includes("CSS")}
        onChange={handleChange}
      />
      CSS
      <br />
      <input
        type="checkbox"
        value="React"
        checked={skills.includes("React")}
        onChange={handleChange}
      />
      React
      <h3>Selected Skills:</h3>
      <p>{skills.join(", ")}</p>
    </div>
  )
}

export default Checkbox