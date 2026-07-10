function List({ heading, items }) {
  return (
    <div>
      <h2>{heading}</h2>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;