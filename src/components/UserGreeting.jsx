import React, { Component } from 'react'
import GreetingChild from './GreetingChild'



 class UserGreeting extends Component {
 constructor(props) {
   super(props)
 
   
   this.state = {
      message: this.props.message
   }
 }

 answer(){
  this.setState({
    message: this.props.secondmessage
  })
 }

  render() {
    return(
      <div>
        <GreetingChild />
      <button onClick={() => {this.answer()}}>Let check</button>
    </div>
    )
  
  }
} 

export default UserGreeting