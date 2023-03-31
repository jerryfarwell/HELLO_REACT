import React, { Component } from 'react'




 class ClickCounterTwo extends Component {
constructor(props) {
  super(props)

  this.state = {
     count: 0
  }
}

handleClikChange = () => {
    this.setState(prevState => {
        return {count: prevState.count + 1}
    })
}
  render() {
    const {count} = this.state
    return (
      <div>
        <button onClick={() => {this.handleClikChange()}}>Clicked {count} times </button>
      </div>
    )
  }
}

export default ClickCounterTwo


// this is  nother way of writing counter with event this is not the simplest way or the easiest way but it's good to know
// we create prevState that replaces this.sate  So by returning this count: prevState.count + 1 is like saying count: this.sate.count + 1
// this line const {count} = this.state will then help us to render count by simply puting {count}