import { createContext, useState } from "react";

// Create Context
export const CounterContext = createContext();

// Create Provider
function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;