import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name(true)}</h1>
      </div>
    )
  }
}

export default User;


// in this example we are using props as function, the function is set into the import file 