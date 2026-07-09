import { useContext } from "react";
import StudentContext from "./StudentContext";

function Header() {
  const { student } = useContext(StudentContext);
  return <h2>Welcome, {student.name}</h2>;
}
export default Header;