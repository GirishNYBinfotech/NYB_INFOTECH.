import AuthContext from "./AuthContext";
import Home from "./Home";

function Maincontext() {

    const auth={
        isLoggedIn:true,
        username: "Girish"
    };

    return (
        <AuthContext.Provider value={auth}>
            <Home />
        </AuthContext.Provider>
    );
}

export default Maincontext;