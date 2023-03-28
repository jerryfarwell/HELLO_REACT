import React from 'react'

function LinkedChild({artist}) {


  return (
    <div>
       {artist.firstName} is from {artist.country} his age is {artist.age}
    </div>
  )
}

export default LinkedChild