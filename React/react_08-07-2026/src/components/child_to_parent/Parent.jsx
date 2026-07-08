// child to parent using callback function
import Child from "./Child";

function Parent() {

  const receiveData = (data) => {
    console.log("Received from Child:", data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <Child sendData={receiveData} />
    </div>
  );
}

export default Parent;