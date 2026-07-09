function Employeeform({ title, sendEmployee }) {
  return (
    <div>
      <h2>{title}</h2>

      <button onClick={() => sendEmployee("Ravi")}>Ravi</button>

      <button onClick={() => sendEmployee("King")}>King</button>
    </div>
  );
}

export default Employeeform;