import React from 'react'

function Hero({heroName}) {

    if (heroName === 'joker' || heroName === 'jokerr' || heroName === 'jokera'){
        throw new Error("not an hero")
    }


  return (
    <div>
        {heroName}
    </div>
  )
}

export default Hero

// we have decided to call this file hero, here we have created our function using rfce and we added one property {heroName}  and then we return it into the jsx
// and we put our condition here that simply mean if one of tese names matches the props then throw an error
// this is good nut not enough to make it work we have to create a new file let call it errorBoundary
