import React, { Component } from 'react'



class ClassClick extends Component {

    clickHandler(){
        console.log('cliked')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick

