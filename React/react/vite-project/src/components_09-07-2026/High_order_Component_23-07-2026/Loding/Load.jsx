import React from "react";
import UserList from "./UserList";
import Loading from "./Loding";

const UserListWithLoading=Loading(UserList)
function Load() {
  return (
    <div>
      <UserListWithLoading isLoading={false}/>
    </div>
  )
}

export default Load