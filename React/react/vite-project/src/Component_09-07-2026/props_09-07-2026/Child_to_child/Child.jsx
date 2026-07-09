function Child({ sendData }) {
  return (
    <div>
      <h3>Child 1</h3>

      <button onClick={()=>sendData("Hello from Child")}>Send to Child 2</button>
    </div>
  );
}

export default Child;