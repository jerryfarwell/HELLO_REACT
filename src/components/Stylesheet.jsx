import React from 'react'
import './myStyle.css'

function Stylesheet(props) {

    let className = props.color ? 'primary' : 'secondary'
       

  return (
    <div>
        <div className='box'>
    <h1 className = {`${className} font-first`}>This is my first css </h1>
       </div>
    </div>
  )
}

export default Stylesheet

