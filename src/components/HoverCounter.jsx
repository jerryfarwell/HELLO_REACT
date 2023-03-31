import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import UpdatedComponent from './withCounter'  // we must import the export function

 class HoverCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  handleMousseChange() {
    this.setState({
        count: this.state.count + 1
    })
}

  render() {
    return (
      <div>
          <h1 onMouseOver={() => {this.handleMousseChange()}}>Clicked {this.state.count} times</h1>
      </div>
    )
  }
}

 export default UpdatedComponent(HoverCounter)  // UpdatedComponent is from the export file 

// by doing this we can call the props of withCounter.jsx file  <h1>{this.props.name}</h1> this will show the name in the export file
// this is important when the props is very long so we set in a specific page intead of for example puting it into App.jsx by using <HoverCounter name="jerry" />
// this props can be render in any file by only importing the function and seting the export function in the import file in the line export with ()

