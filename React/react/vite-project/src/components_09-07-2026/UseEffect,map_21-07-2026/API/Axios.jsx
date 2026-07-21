import React, { useState } from "react";
import axios from "axios";

function Axios() {
  const [data, setData] = useState([]);

  // 1. GET - Get data
  const getData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setData(response.data.slice(0, 5));
      console.log(response.data);
    } 
    catch (error) {
      console.log("GET Error:", error);
    }
  };

  // 2. POST - Create new data
  const postData = async () => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts",
        {
          title: "React",
          body: "Learning Axios",
          userId: 1,
        }
      )

      console.log("Created:", response.data)
    } 
    catch (error) {
      console.log("POST Error:", error)
    }
  };

  // 3. PUT - Update complete data
  const putData = async () => {
    try {
      const response = await axios.put("https://jsonplaceholder.typicode.com/posts/1",
        {
          id: 1,
          title: "Updated React",
          body: "Complete data updated using Axios PUT",
          userId: 1,
        }
      );

      console.log("Updated:", response.data)
    } 
    catch (error) {
      console.log("PUT Error:", error)
    }
  };

  // 4. PATCH - Update partial data
  const patchData = async () => {
    try {
      const response = await axios.patch("https://jsonplaceholder.typicode.com/posts/1",
        {
          title: "Only Title Updated",
        }
      )

      console.log("Patched:", response.data)
    } 
    catch (error) {
      console.log("PATCH Error:", error)
    }
  };

  // 5. DELETE - Delete data
  const deleteData = async () => {
    try {
      await axios.delete("https://jsonplaceholder.typicode.com/posts/1"
      );

      console.log("Data Deleted Successfully")
    } 
    catch (error) {
      console.log("DELETE Error:", error)
    }
  };

  return (
    <div>
      <h1>Axios API Example</h1>

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

export default Axios