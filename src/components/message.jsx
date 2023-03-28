import React, { Component } from "react";



class Message extends Component{

    constructor(){
        super()
        this.state = {
            statement: 'Welcome to jerry react app'
        }
    }

changedStatement(){
    this.setState({
        statement: "thank you"
    })
}


    render(){
        return(
            <div>
                <h1>{this.state.statement}</h1>
                <button onClick={() => this.changedStatement()}>Subcribe</button>
            </div>
        )
    }
}

export default Message;