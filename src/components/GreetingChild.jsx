import React, { Component } from 'react'

 class GreetingChild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isMarried: false,
      }
    }

  render() {
    if (this.state.isMarried){
        return <h1>{this.props.message}</h1>
    }else {
        return <h1>{this.props.secondmessage}</h1>
    }   
  }
}

export default GreetingChild