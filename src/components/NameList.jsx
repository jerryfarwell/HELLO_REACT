import React from 'react'
import Person from './Person'


function NameList() {

    const persons = [

        {
            id: 1,
            name: 'jerry',
            age: 32,
            skill: 'coding'
        },

        
        {
            id: 2,
            name: 'alex',
            age: 22,
            skill: 'singing'
        },

        
        {
            id: 3,
            name: 'jule',
            age: 42,
            skill: 'travelling'
        },

        
        {
            id: 4,
            name: 'geb',
            age: 32,
            skill: 'power'
        },


    ]
    const personList = persons.map(person => <Person person={person}/>)
  return (
    <div>{personList}</div>
  )
}

export default NameList

// here .map make as usual the only thing that changes is that we are importing Person form Person.jsx and give it a props  wich simply the value of array and this props will be call in Person.jsx
