import React, { useEffect, useState } from "react";

function Get() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response)=>response.json())
      .then((data)=>setPosts(data))
      .catch((error)=>console.log(error))
  }, [])
  return (
    <div>
      <h1>GET Request</h1>
      {<div key={posts.id}>
        <h3>{posts.title}</h3>
        <p>{posts.body}</p>
        </div>
      }
    </div>
  )
}
export default Get