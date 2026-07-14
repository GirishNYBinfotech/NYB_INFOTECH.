import { Provider } from "react-redux";
import EmployeeCount from "../../components_09-07-2026/Redux_14-07-2026/contextEMP/EmployeeCount";
import EmployeeForm from "../../components_09-07-2026/Redux_14-07-2026/contextEMP/EmployeeForm";
import EmployeeList from "../../components_09-07-2026/Redux_14-07-2026/contextEMP/EmployeeList";
import EmployeeProvider from "../../components_09-07-2026/Redux_14-07-2026/contextEMP/EmployeeProvider";
// import REmployeeCount from "../../components_09-07-2026/Redux_14-07-2026/ReduxEMP/EmployeeList";
// import REmployeeForm from "../../components_09-07-2026/Redux_14-07-2026/ReduxEMP/EmployeeForm";
// import REmployeeList from "../../components_09-07-2026/Redux_14-07-2026/ReduxEMP/Redux/EmployeeList";


function ContextEmppage() {

    return (
        <div>
        <EmployeeProvider>
            <h1>Context API Employee Management</h1>
            <EmployeeForm/>
            <EmployeeList/>
            <EmployeeCount/>
        </EmployeeProvider>
        
        {/* <h1>Redux</h1>
        <REmployeeForm/>
        <REmployeeList/>
        <REmployeeCount/> */}
        

        </div>

    );

}

export default ContextEmppage;