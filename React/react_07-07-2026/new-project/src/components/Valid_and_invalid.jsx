// valid functions
import React from 'react'

 const Valid_and_invalid=()=>{
    const name="Girish"
    const a=10
    const b=20
    const age=18
    const isLoggedIn=true
    const student={
        name1:"king"
    }
    const colors=["Red","Blue"]
    const first="king";
    const last="queen";
  return (
    <div>
        {/* valid */}
        {/* variables */}
        <h3>variables</h3>
       <p>{name}</p>
       {/* numbers */}
       <h3>numbers</h3>
       <p>{100}</p>
       {/* strings */}
       <h3>strings</h3>
       <p>{"hello"}</p>
       {/* arematic */}
       <h3>aremthmatic</h3>
       <p>{a+b}</p>
       {/* ternary operator */}
       <h3>ternary operator</h3>
       <p>{age >= 18 ? "Adult" : "Minor"}</p>
       {/* logical operator */}
       <h3>logical operator</h3>
       <p>{isLoggedIn && "Welcome"}</p>
       {/* object */}
       <h3>object</h3>
       <p>{student.name1}</p>
       {/* array */}
       <h3>arrays</h3>
       <p>{colors[0]}</p>
       {/* template literals */}
       <h3>template literals</h3>
       <p>{`${first} ${last}`}</p>
       {/* inavlid */}
       {/* loops,conditional statments,variable declerations,function declerations,return atament and mltiple staments*/}
    </div>
  )
}

export default Valid_and_invalid