import React, { Component } from 'react'



 class ChildComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'hello'
    }
  }

  HandleMessage(){
    this.setState({
      message: `hello parent from child ! is this ${this.props.name} ?`
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>{this.props.children}</h1>
        <br/>
        <button onClick={() => {this.HandleMessage()}}>Press me</button>
      </div>
    )
  }
}

export default ChildComponent