import { useContext } from "react";
import AuthContext from "./AuthContext";

function Navbar() {
    const auth=useContext(AuthContext);
    return (
        <>
            {auth.isLoggedIn? <h2>Welcome {auth.username}</h2>: <h2>Please Login</h2>}
        </>
    )
}

export default Navbar;