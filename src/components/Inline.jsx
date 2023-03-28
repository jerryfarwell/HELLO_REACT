import React from 'react'

const heading = {
    color: 'blue',
    fontSize: '70px'
}

const box = {
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'red',
    padding: '100px'
}

function Inline() {
  return (
    <div>
        <div style={box}>
      <h1 style={heading}>Inline </h1>
       </div>
    </div>
  )
}

export default Inline 

// asuming we want to add a box this should be written like in a file that has the extention .css example border-color should be written like this borderColor 
// it has to be in camelcase the way of writing this is very important