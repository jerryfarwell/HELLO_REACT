import React from 'react'




function Try(props) {
  return (
    <div>
      <h1>Hello boy how is {props.name} doing</h1>
      <h1>{props.children}</h1>
    </div>
  )
}

export default Try