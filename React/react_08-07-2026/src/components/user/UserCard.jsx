// props and states and rendering dynamic data
import React, { useState } from "react";

function UserCard(props) {
  const [likes, setLikes] = useState(0);
  const increaseLikes = () => {setLikes(likes + 1)}

  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Course: {props.course}</p>
      <h3>Likes: {likes}</h3>
      <button onClick={increaseLikes}>Like</button>
    </div>
  );
}

export default UserCard;