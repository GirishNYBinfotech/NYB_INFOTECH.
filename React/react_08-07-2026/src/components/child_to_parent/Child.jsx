function Child({ sendData }) {

  const message = "Hello Parent!";

  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={() => sendData(message)}>
        Send Data to Parent
      </button>
    </div>
  );
}

export default Child;