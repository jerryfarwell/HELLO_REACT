import React from 'react'
import LinkedChild from './LinkedChild'


function LinkedParent() {
    const artists = [
        {
            id: 1,
            firstName: "fally",
            lastName: "Ipupa",
            country: "Congo",
            age: "42"
        },
       
        {
            id: 2,
            firstName: "Roga Roga",
            lastName: "Ngumbo",
            country: "Republic of Congo",
            age: "47"
        },
      
        {
            id: 3,
            firstName: "Koffi",
            lastName: "Olomomide",
            country: "Congo",
            age: "72"
        },
        
        {
            id: 4,
            firstName: "Akon",
            lastName: "Sben",
            country: "Senegal",
            age: "44"
        },

    ]

    const artistsList = artists.map(artist => (<LinkedChild key={artist.id} artist={artist}/>))

  return (
    <div>
      <h1>{artistsList}</h1>  
    </div>
  )
}

export default LinkedParent

// the key={artist.id} in the const artistsList delete errors in the console 
