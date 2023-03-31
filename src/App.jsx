import React from 'react'
import './App.css'
import { Button } from 'bootstrap'
import { useState } from 'react'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/UserContext'




function App() {
  return (
    <div>
      <UserProvider value="jerry"> 
        <ComponentC />
      </UserProvider> 
    </div>
  )
}

export default App

// this is App.jsx, here we wrap  <ComponentC /> with <UserProvider></UserProvider> by doing this we can pass the value that can be set in ComponentF.jsx
// the question here is why not into ComponentE ? it's because ComponentE just set the link by importing ComponentF

