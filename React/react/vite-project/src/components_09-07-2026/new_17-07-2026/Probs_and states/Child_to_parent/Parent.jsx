import React from "react";
import Child from "./Child";

function Parent() {
  function receiveData(data) {
    alert(data)
  }
  return <Child sendData={receiveData} />;
}

export default Parent;