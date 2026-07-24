import React, { useState } from "react";

function Apicalls() {
  const [data, setData] = useState([]);
  const api = "https://jsonplaceholder.typicode.com/posts";

  // 1. GET - Get data
  const getData = () => {
    fetch(api)
      .then((response) => response.json())
      .then((result) => {
        setData(result.slice(0, 5));
      })
      .catch((error) => {
        console.log("GET Error:", error)
      });
  };

  // 2. POST - Create new data
  const postData = () => {
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "React",
        body: "Learning API Calls",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Created:", result);
      })
      .catch((error) => {
        console.log("POST Error:", error);
      });
  };

  // 3. PUT - Update complete data
  const putData = () => {
    fetch(`${api}/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        title: "Updated React",
        body: "Updated complete data",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Updated:", result);
      })
      .catch((error) => {
        console.log("PUT Error:", error);
      });
  };

  // 4. PATCH - Update specific data
  const patchData = () => {
    fetch(`${api}/1`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New React Title",
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Patched:", result);
      })
      .catch((error) => {
        console.log("PATCH Error:", error);
      });
  };

  // 5. DELETE - Delete data
  const deleteData = () => {
    fetch(`${api}/1`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Data Deleted Successfully");
        }
      })
      .catch((error) => {
        console.log("DELETE Error:", error);
      });
  };

  return (
    <div>
      <h1>React API Calls</h1>
      <button onClick={getData}>GET</button>
      <button onClick={postData}>POST</button>
      <button onClick={putData}>PUT</button>
      <button onClick={patchData}>PATCH</button>
      <button onClick={deleteData}>DELETE</button>

      <h2>GET Data:</h2>

      {data.map((item) => (
        <div key={item.id}>
          <p>
            {item.id}. {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Apicalls