import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {
                username => {
                    return <h1>Hello {username} !</h1>
                }
            }
        </UserConsumer>
        <h1>Many other things can be added and it will be rendered into our main file wich is App.jsx</h1>
      </div>
    )
  }
}

export default ComponentF

// this is ComponentF where the function is set and where the consumer is imported 
// we can here set the function into arrows that will call the value set into the provider in App.jsx
// username can replace by anything React understant that it is the value set into the provider in App.jsx
// the <h1></h1> simply shows that we can add anything 