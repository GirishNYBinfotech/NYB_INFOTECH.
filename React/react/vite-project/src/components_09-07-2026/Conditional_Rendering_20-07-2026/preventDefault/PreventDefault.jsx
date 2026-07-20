import React from 'react'

function PreventDefault() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PreventDefault