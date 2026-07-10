import { useContext } from "react";
import StudentContext from "./StudentContext";

function StudentMarks() {
  const { student, setStudent } = useContext(StudentContext);
  const updateMarks=()=>{
    setStudent({
      ...student,
      marks: 95,
    })
  }
  return (
    <>
      <h3>Marks: {student.marks}</h3>

      <button onClick={updateMarks}>Update Marks</button>
    </>
  );
}

export default StudentMarks;