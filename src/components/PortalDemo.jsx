import React from 'react'
import  ReactDOM  from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
    <div>
     <h1>PortalDemo</h1>
    </div>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo

// here we have create a function with rfce we have decided to call this file PortalDemo 
// aside the return we first add this line ReactDOM.createPortal
// and into the return we put our jsx and we have to put a ,  and then we can now get the id created in index.html
// this line will help us get into the new id  document.getElementById('portal-root')
// and of course we have to put and import this file into our App.jsx to make it work