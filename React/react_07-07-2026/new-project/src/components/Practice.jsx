import React from 'react'
import { useState } from "react"


function Fragments(){
    return(
        <React.Fragment>
            <h4>This is for react fragments</h4>
        </React.Fragment>
    )
}

// jsx expression
function Expression() {
  const name="Girish"
  console.log(name)
  return (
    <h1>Welcome,{name}!</h1>
  )
}

function Age() {
  const a=10
  const b=20

  return (
    <h2>Sum={a+b}</h2>
  )
}

// calling a function inside a jsx
function Add() {
  function addition(x,y) {
    return x+y
  }
  return (
    <div>
      <h2>Sum1={addition(10,40)}</h2>
    </div>
  )
}

// usestate

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>increase</button>
      <button onClick={()=>setCount(count-1)}>decrease</button>
    </div>
  )
}




const Practice=()=>{
  return (
    <div>
        <Fragments/>
        <Expression/>
        <Age/>
        <Add/>
        <Counter/>
    </div>
  )
}

export default Practice