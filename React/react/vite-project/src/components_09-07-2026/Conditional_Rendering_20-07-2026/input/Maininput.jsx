import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function Maininput() {
  const [page, setPage] = useState("");
  return (
    <div>
      <h1>input Rendering</h1>
      <input
        type="text"
        placeholder="Enter home, about or contact"
        onChange={(e) => setPage(e.target.value)}/>
      <hr />
      {page.toLowerCase()==="home" && <Home/>}
      {page.toLowerCase()==="about" && <About/>}
      {page.toLowerCase()==="contact" && <Contact/>}
      {page !== "" &&
        page.toLowerCase()!=="home" &&
        page.toLowerCase()!=="about" &&
        page.toLowerCase()!=="contact" && (
          <h2>File not found</h2>
        )}
    </div>
  );
}

export default Maininput;