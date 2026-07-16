// import { createContext, useState } from "react";

// export const ThemeContext = createContext();
// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("light");
//   function toggleTheme() {
//     setTheme(theme === "light" ? "dark" : "light");
//   }
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );

// }
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  }

  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    } else {
      document.body.style.backgroundColor = "#222222";
      document.body.style.color = "#ffffff";
    }

    document.body.style.transition = "0.4s";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}