import React from 'react'
import React, {Component} from 'react'  // here we always make sure that this is imported when we use class 

class Welcome extends Component{
    render(){
        return(
        <h1>hello {this.props.name} a.k.a {this.props.superName}</h1>
        );
    }
}

// it is almost the same with function the only difference here is that props become this.props 
export default Welcome; 