import { useContext } from "react";
import StudentContext from "./StudentContext";

function StudentDetails() {
  const { student } = useContext(StudentContext);

  return (
    <>
      <h3>Name: {student.name}</h3>
      <h3>Course: {student.course}</h3>
    </>
  );
}

export default StudentDetails;