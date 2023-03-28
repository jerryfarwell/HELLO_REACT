import React, { Component } from 'react'
import './myStyle.css'


export class ErrorBoundary extends Component {
constructor(props) {
  super(props)

  this.state = {
    hasError: false
  }
}

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }


  render() {
    if (this.state.hasError) {
        return <h1 className='errorB'>Something went wrong.</h1>;
      }
      return this.props.children; 
  }
}

export default ErrorBoundary

// we have decided to call this file errorBoundary.jsx  here we just build a class with rce
// and we build a constructor using rconst   we put a state of hasError: false
// here this line is important to check anytime our function is verify  static getDerivedStateFromError(error)
// and we simply return hasError: true   this is normal we are using state meaning things can change anytime
// and then we render the condition saying if hasError: true meaning if one this (heroName === 'joker' || heroName === 'jokerr' || heroName === 'jokera') is entered then put something went wrong 
// else you should just put the value or values entered 
// you must now use the <ErrorBoundary></ErrorBoundary> into our App.jsx