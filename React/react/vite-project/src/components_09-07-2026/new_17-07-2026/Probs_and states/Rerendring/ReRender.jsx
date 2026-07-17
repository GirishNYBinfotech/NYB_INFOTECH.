import React, { useState } from "react";

function ReRender({ name }) {
  const [marks, setMarks] = useState(70);

  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Marks: {marks}</h3>

      <button onClick={() => setMarks(marks + 5)}>Increase Marks</button>

      <hr />
    </div>
  );
}

export default ReRender;