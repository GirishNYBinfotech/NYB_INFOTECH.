import Employee from "./Employee";
import Reusable_component from "./Reusable_component";
import Student from "./Student";


const StudentWithBorder =Reusable_component(Student)
const EmployeeWithBorder =Reusable_component(Employee)
function Usable_component() {
  return (
    <div>
      <StudentWithBorder name="Girish" />
      <EmployeeWithBorder name="Rahul" />
    </div>
  );
}

export default Usable_component