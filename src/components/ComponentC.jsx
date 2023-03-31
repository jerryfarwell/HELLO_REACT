import React, { Component } from 'react'
import ComponentE from './ComponentE'

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <ComponentE />  
        <h1>Je suis thot l'atlante maitre des mysteres </h1>
      </div>
    )
  }
}

export default ComponentC
// this is ComponentC.jsx,  here we just make sure to import the file that is going to create a link between App.jsx, ComponentC.jsx and UserContext.jsx
// the <h1></h1> simply shows that anything can be added into the file 