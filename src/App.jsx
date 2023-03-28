import React from 'react'
import './App.css'
import { Button } from 'bootstrap'
import { useState } from 'react'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import ErrorForm from './components/ErrorForm'
import ErrorFormBoundary from './components/ErrorFormBoundary'




function App() {
  return (
    <div>
      <ErrorFormBoundary>
      <ErrorForm />
      </ErrorFormBoundary>  
    </div>
  )
}

export default App

