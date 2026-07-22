import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  return (
    <div>
      <h2>Controlled Component</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <h3>Name: {name}</h3>
    </div>
  )
}

export default ControlledForm