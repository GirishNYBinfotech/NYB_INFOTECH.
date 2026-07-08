function Child({ sendName }) {

  const handleChange = (e) => {
    sendName(e.target.value);
  };

  return (
    <div>
      <h2>Child Component</h2>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />
    </div>
  );
}

export default Child;