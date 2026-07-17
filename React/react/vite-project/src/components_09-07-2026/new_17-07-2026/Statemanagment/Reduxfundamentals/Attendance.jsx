import { useSelector, useDispatch } from "react-redux";
import { markPresent } from "./EmployeeSlice";


function Attendance() {
  const present = useSelector((state) => state.employee.present);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Employees Present: {present}</h2>
      <button onClick={() => dispatch(markPresent())}>Mark Present</button>
    </div>
  );
}

export default Attendance;