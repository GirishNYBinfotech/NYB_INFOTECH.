import UserContext from "./UserContext";
import Parent from "./Parent";

function MainContext() {
    return (
        <UserContext.Provider value="Girish">
            <Parent />
        </UserContext.Provider>
    );
}

export default MainContext;