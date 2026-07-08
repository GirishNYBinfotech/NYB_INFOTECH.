function Child({ sendData }) {
  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={() => sendData("Hello from Child!")}>
        Send Message
      </button>
    </div>
  );
}

export default Child;