import { useState } from "react";
import StudentContext from "./StudentContext";
import Header from "./Header";
import StudentDetails from "./StudentDetails";
import StudentMarks from "./StudentMarks";



function Globalstate() {
  const [student, setStudent] = useState({
    name: "Girish",
    course: "React",
    marks: 85,
  });

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
    <Header/>
    <StudentDetails/>
    <StudentMarks/>
    </StudentContext.Provider>
  );
}

export default Globalstate;