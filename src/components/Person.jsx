import React from 'react'


function Person({person}) {     {/* here person is props that we can see in the import file <Person person={person} /> */}

  return (
    <div>
        <h1>{person.name} à {person.age} ans </h1> 
    </div>
  )
}

export default Person

// the return here will be the answer of the return of the import file it will enter into this <div>{personList}</div> in the import file wich is NameList.jsx
