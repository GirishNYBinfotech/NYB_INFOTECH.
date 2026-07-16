import React, { useContext } from "react";
import { LanguageContext } from "./Provider";


function Greet() {
  const { language, setLanguage } = useContext(LanguageContext);

  const message = {
    English: "Hello",
    Telugu: "Namaste",}

  return (
    <div>
      <h2>{message[language]}</h2>
      <button onClick={()=>setLanguage("English")}>English</button>
      <button onClick={()=>setLanguage("Telugu")}>Telugu</button>
    </div>
  );
}

export default Greet;