import React, { Component } from 'react'
import './appStyle.css'


 class Form extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        username: '',
        comments: '',
        countries: 'empty'
     }
   }


   handleUsernameChange = (event) => {
    this.setState({
        username: event.target.value
    })
   }

handleCommentsChange = (event) => {
    this.setState({
        comments: event.target.value
    })
}

handleCountriesChange = (event) => {
    this.setState({
        countries: event.target.value
    })
}

handleSubmit = (event) => {
    console.log(`name : ${this.state.username}`)
    console.log(`comment : ${this.state.comments}`)
    console.log(`country: ${this.state.countries}`)

    event.preventDefault()
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div className='box'>
                <label>Username</label><br/>
                <input type="text" onChange={this.handleUsernameChange} />
            </div>
            <br/>
            <div>
              <label>Comment</label><br/>
              <textarea onChange={this.handleCommentsChange} className='usernameInput'>
              </textarea>
            </div>
            <br/>
            <div>
               <label >Country</label><br/>
               <select onChange={this.handleCountriesChange}>
               <option value="empty">Choose your country</option>
                <option value="congo">Congo</option>
                <option value="ghana">Ghana</option>
                <option value="france">France</option>
                <option value="benin">Benin</option>
                <option value="togo">Togo</option>
                <option value="norway">Norway</option>
                <option value="germany">Germany</option>
               </select>
            </div>
            <br/>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form