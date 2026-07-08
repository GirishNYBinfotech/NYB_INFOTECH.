function Child1({ sendData }) {
  return (
    <>
      <h3>Child 1</h3>

      <button onClick={() => sendData("Hello from Child 1")}>
        Send Data
      </button>
    </>
  );
}

export default Child1;