import Student from "./Student";
import withWelcome from "./Withwelcome";

const NewStudent=withWelcome(Student);
function Hoccall() {
  return <NewStudent />
}

export default Hoccall