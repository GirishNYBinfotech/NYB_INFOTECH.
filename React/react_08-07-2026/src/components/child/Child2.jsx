import React from 'react'

function Child2(y) {
  let c=10
  return (
    <div>
      <h3>child2</h3>
      <p>value2:{y.b}</p>
      <p>messages:{y.message}</p>
    </div>
  )
}

export default Child2