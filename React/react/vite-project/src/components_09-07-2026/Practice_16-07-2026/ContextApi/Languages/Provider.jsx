import React, { createContext, useState } from "react";

export const LanguageContext=createContext()
function Provider({ children }) {
  const [language, setLanguage] = useState("English")

  return (
    <LanguageContext.Provider value={{ language,setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default Provider;