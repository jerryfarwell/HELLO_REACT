import React, { Component } from 'react'


 class ErrorForm extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         email: '',
         firstName: ''
      }
    }


handleFirstnameChange = (event) => {
    this.setState({
        firstName: event.target.value
    })
}

handleEmailChange = (event) => {
this.setState({
    email: event.target.value
})
}



handleSubmit = (event) => {
    console.log(`${this.state.email} ${this.state.firstName}`)

    event.preventDefault()
}

handleButton(){
    if (email === 'jerry@mankou'){
        throw new Error('wrong email adress')
      }
}


  render() {
    return (
      <div>
    <form action="" onSubmit={this.handleSubmit}>
        <div>
        <label htmlFor="">First name </label><br/>
        <input type="text" onChange={this.handleFirstnameChange}/>
        </div><br/>
        <div>
            <label htmlFor="">Email</label><br/>
            <input type="text" onChange={this.handleEmailChange}/>
        </div><br/>
        <div>
            <button type='submit' onClick={() => {this.handleButton}}>Submit</button>
        </div>

      </form>

      </div>
    )
  }
}

export default ErrorForm

// This is just trying it didn't work on it 
// i will keep it up 😂