import React from 'react'

function FunctionClick() {

function clickHandler(){
    console.log("Button cliked")
}

  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick

// here the button and the event clickHandler doesn't have () at the end like in a class with setState
//and the message here is going to be shown only in the console so no need to set setState 
