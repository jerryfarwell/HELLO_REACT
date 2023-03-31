import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'   // make sure this is imported

export class ComponentE extends Component {
  render() {
    return (
      <div>
        <ComponentF />
         {this.context}         {/* this line is the one that will call the value set into App.jsx */}
        <h1>j'ecris depuis le E</h1>
      </div>
    )
  }
}

ComponentE.contextType = UserContext   // this is the one that links the export default into UserContex.jsx with this file 


export default ComponentE

// this is ComponentE, here we simply import ComponentF to create link with ComponentC 
// the <h1></h1> simply mean we can add whatever we want and it appear into our render file 