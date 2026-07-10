import React from 'react'

function Post() {
    const addPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: "React",
        body: "Fetch API",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={addPost}>Create Post</button>
    </div>
  );
}



export default Post