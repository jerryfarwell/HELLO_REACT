import React, { Component } from 'react';
import Hero from './Hero';        // this should here to be able to enter the value heroName 
import ErrorBoundary from './ErrorBoundary';  // this should be also imported to able to put <ErrorBoundary></ErrorBoundary>

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroName: '',
    };
  }

  handleNameChange = (event) => {
    this.setState({
      heroName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(`${this.state.heroName}`)
    event.preventDefault();
  };



  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroName={this.state.heroName} />
        </ErrorBoundary>
        
        <form onSubmit={this.handleSubmit}>
          <label>
            Hero Name:
            <input type="text" value={this.state.heroName} onChange={this.handleNameChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
        
      </div>
    );
  }
}

export default ParentComponent;

// here we create a new file with a form to check our error on the page and the console 
// first we have to attribute the value of our input and the when can use the onChange event 
// we have to set the function using heroName in the Hero.jsx   
// we have decided to show the name and the error on page and the console by using <ErrorBoundary></ErrorBoundary> in the return and using  console.log(`${this.state.heroName}`) in the function we created on the form 
// now can import our ParentComponent into App.jsx
