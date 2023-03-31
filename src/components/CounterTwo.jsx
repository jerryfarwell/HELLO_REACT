import React, { Component } from 'react'




class CounterTwo extends Component {

  
  render() {
    return (
      <div>
        {this.props.render(true)}
      </div>
    )
  }
}

export default CounterTwo