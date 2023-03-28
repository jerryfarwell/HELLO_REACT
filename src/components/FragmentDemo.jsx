import React from 'react'



function FragmentDemo() {
  return (
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dicta quaerat nesciunt dolor possimus hic consequuntur laudantium fugiat, minus quasi itaque vitae perferendis, consectetur reiciendis veniam architecto pariatur, esse beatae.</p>
    </React.Fragment>
  )
}

export default FragmentDemo

// React.Fragment allows us to add any element in our jsx it behaves just like div but has more open advantage 
// to avoid errors example <div><td></td></div> might send an error but </React.Fragment><td></td></React.Fragment> will send any error in the console

