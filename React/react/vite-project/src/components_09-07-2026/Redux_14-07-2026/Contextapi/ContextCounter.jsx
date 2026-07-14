import { useContext } from "react";
import { CounterContext } from "./ProviderCounter";


function ContextCounter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h2>Context API Counter</h2>

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Add</button>

      <button onClick={() => setCount(count - 1)}>Sub</button>
    </div>
  );
}

export default ContextCounter;