import React from 'react'
import './appStyle.css'    // this is the way that simple css must be imported
import styles from './appStyle.module.css' // this is the way module must be imported we have to add styles from to make react understant


function Module() {

  return (
    <div>
        <div className='box-module'>
       <h1 className='error'>This is applying a simple css </h1>
       <h1 className={styles.success} >This is applying a module css </h1>
       </div>
    </div>
  )
}

export default Module

// the first line is a simple css so we just give a className and set it into our file.css
// the second one is a module we must add styles.ourclassName wich is set into our file.module.css