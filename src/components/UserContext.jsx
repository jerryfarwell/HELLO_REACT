import React from "react";



const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer


export {UserProvider, UserConsumer}

export default UserContext


// this is UserContext.jsx, here we also export UserContext to be able to use it in ComponentE

// here we just create a context a context needs two parameters a provider and a consumer 
// and this is how it should set up
// we export both of them because Userprovider is going to be imported in App.jsx and UserConsumer in the file where the function is going to be define 
