import react, { Component } from "react";


const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    
     render () {
        return (
            <div>
                <OriginalComponent name="jerry"/>
            </div>
        )
     }
  }
  return NewComponent
}

export default UpdatedComponent;


// our file name is withCounter.jsx  when we create a specific file with a function that will be reuse we can start with non capital letter 
// in this example OriginalComponent is our props that is why we return it <OriginalComponent name= "jerry"/>
// return NewComponent this is very important to make it work

