import { useState } from "react";

function Local_State() {

  const [name, setName] = useState("");

  return (
    <div>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>

    </div>
  );
}

export default Local_State;