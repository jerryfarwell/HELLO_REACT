import React, { Component } from 'react'




 class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

handleClickChange(){
    this.setState({
        count: this.state.count + 1
    })
}

  render() {
    return (
      <div>
        <button onClick={() => {this.handleClickChange()}}>Clicked {this.state.count} times </button>
      </div>
    )
  }
}

export default ClickCounter

// this is a simple click counter we decided to render the clicked within the clicked button 