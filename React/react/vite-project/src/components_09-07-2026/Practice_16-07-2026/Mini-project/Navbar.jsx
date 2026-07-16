import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


function Navbar() {

    const {theme,toggleTheme}=useContext(ThemeContext);
    return(
        <div>
            <h1>Library Management</h1>
            <h3>Current Theme : {theme}</h3>
            <button onClick={toggleTheme}>
                Change Theme
            </button>
            <hr/>
        </div>
    );
}

export default Navbar;