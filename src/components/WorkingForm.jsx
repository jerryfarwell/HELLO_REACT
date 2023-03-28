import React, { Component } from 'react'




 class WorkingForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName: '',
         email: '',
         password: '',
         countries: 'first'
      }
    }

handleFirstNameChange = (event) => {
  this.setState({
     firstName: event.target.value
  })
}

handleEmailChange = (event) => {
    this.setState({
        email: event.target.value
    })
}

handlePasswordChange = (event) => {
    this.setState({
        password: event.target.value
    })
}


handleCountriesChange = (event) => {
    this.setState({
        countries: event.target.value
    })
}

handleSubmit = (event) => {
    console.log(`${this.state.firstName}  ${this.state.email} ${this.state.password} ${this.state.countries}`)
    event.preventDefault()
}

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit} >
         <div>
            <h5><label>First Name  </label></h5><br/>
            <input type="text"  onChange={this.handleFirstNameChange}/>
         </div>
         <br/>
         <div>
            <h5><label htmlFor="email">Email</label></h5><br/>
            <input type="text"  onChange={this.handleEmailChange}/>
         </div>
         <br/>
         <div>
            <h5><label>Pssword</label></h5><br/>
            <input type="text"  onChange={this.handlePasswordChange}/>
         </div>
         <br/>
         <div>
            <h5><label>Country</label></h5><br/>
            <select name="" id=""  onChange={this.handleCountriesChange}>
                <option value="first">Choose your country in the list </option>
                <option value="Congo">CONGO</option>
                <option value="france">FRANCE</option>
                <option value="ghana">GHANA</option>
            </select>
         </div>
         <br/>
         <div>
            <button type='submit'>Submit</button>
         </div>
         </form>
      </div>
    )
  }
}

export default WorkingForm