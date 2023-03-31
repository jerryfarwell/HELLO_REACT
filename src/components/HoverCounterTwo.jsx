import React, { Component } from 'react'




export class HoverCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    handleMousseChange = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }


  render() {
    const {count} = this.state
    return (
      <div>
        <h1 onMouseOver={() => {this.handleMousseChange()}}>If you touch me i'll change {count} times </h1>
      </div>
    )
  }
}

export default HoverCounterTwo