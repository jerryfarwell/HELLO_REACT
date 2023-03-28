import React, { Component } from 'react'



 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello'
      }
    }

changedMessage(){
    this.setState({
        message: 'how are you doing ?'
    }, () => {console.log(this.state.message)})
}

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changedMessage()}>Click</button>
      </div>
    )
  }
}

export default EventBind