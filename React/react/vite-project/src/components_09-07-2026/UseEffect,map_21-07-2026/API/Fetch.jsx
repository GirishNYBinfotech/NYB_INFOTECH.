import React, { useState } from "react";

function Fetch() {
  const [data, setData] = useState([])

  // 1. GET - Get data
  const getData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      const result = await response.json()
      setData(result.slice(0, 5))
      console.log(result)
    } 
    catch (error) {
      console.log("GET Error:", error)
    }
  };

  // 2. POST - Create new data
  const postData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "React",
            body: "Learning Fetch API",
            userId: 1,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create data")
      }
      const result = await response.json()
      console.log("Created:", result)
    } 
    catch (error) {
      console.log("POST Error:", error)
    }
  };

  // 3. PUT - Update complete data
  const putData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 1,
            title: "Updated React",
            body: "Complete data updated using PUT",
            userId: 1,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      const result = await response.json()
      console.log("Updated:", result)
    } 
    catch (error) {
      console.log("PUT Error:", error)
    }
  };

  // 4. PATCH - Update partial data
  const patchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            title: "Only Title Updated",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to patch data")
      }
      const result = await response.json()
      console.log("Patched:", result)
    } catch (error) {
      console.log("PATCH Error:", error)
    }
  };

  // 5. DELETE - Delete data
  const deleteData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete data")
      }

      console.log("Data Deleted Successfully")
    } catch (error) {
      console.log("DELETE Error:", error)
    }
  };

  return (
    <div>
      <h1>Fetch API Example</h1>
      <button onClick={getData}>GET</button>
      <button onClick={postData}>POST</button>
      <button onClick={putData}>PUT</button>
      <button onClick={patchData}>PATCH</button>
      <button onClick={deleteData}>DELETE</button>

      <h2>GET Data</h2>
      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.id}.{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Fetch