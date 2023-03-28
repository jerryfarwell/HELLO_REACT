import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {

  constructor(props) {
    super(props)
  
 }
  render() {
    return (
      <div>
         <ChildComponent  name='parent'>
          <button>I'm a fucken child set into a parent file and called into a child file </button>
         </ChildComponent>
      </div>
    )
  }
}

export default ParentComponent