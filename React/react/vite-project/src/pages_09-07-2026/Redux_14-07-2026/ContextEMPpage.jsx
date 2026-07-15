import { Provider } from "react-redux";
import EmployeeCount from "../../components_09-07-2026/Redux_14-07-2026/contextEMP/EmployeeCount";
import EmployeeForm from "../../components_09-07-2026/Redux_14-07-2026/contextEMP/EmployeeForm";
import EmployeeList from "../../components_09-07-2026/Redux_14-07-2026/contextEMP/EmployeeList";
import EmployeeProvider from "../../components_09-07-2026/Redux_14-07-2026/contextEMP/EmployeeProvider";
import REmployeeForm from "../../components_09-07-2026/Redux_14-07-2026/ReduxEMP/REmployeeForm";
import REmployeeCount from "../../components_09-07-2026/Redux_14-07-2026/ReduxEMP/REmployeeCount";
import REmployeeList from "../../components_09-07-2026/Redux_14-07-2026/ReduxEMP/REmployeeList";



function ContextEmppage() {

    return (
        <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "30px",
        padding: "20px"
      }}
    >

      {/* Context API */}

      <div
        style={{
          width: "45%",
          border: "3px solid blue",
          padding: "20px"
        }}
      >

        <h1>Context API</h1>

        <EmployeeProvider>

          <EmployeeForm />

          <EmployeeList />

          <EmployeeCount />

        </EmployeeProvider>

      </div>

      {/* Redux */}

      <div
        style={{
          width: "45%",
          border: "3px solid red",
          padding: "20px"
        }}
      >

        <h1>Redux</h1>

        <REmployeeForm/>

        <REmployeeList/>

        <REmployeeCount/>

      </div>

    </div>


    );

}

export default ContextEmppage;