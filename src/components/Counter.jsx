import React, { Component } from 'react'



export class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

increment(){
    this.setState({
        count: this.state.count + 1
    }, () => {
        console.log(this.state.count)
    })
}


  render() {
    return (
      <div>
        <h1>{this.state.count} likes </h1>
        <button onClick={() => this.increment()}>Increase</button>
      </div>
    )
  }
}

export default Counter