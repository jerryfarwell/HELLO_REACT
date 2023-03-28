import React from 'react'



function Columns() {

    const items = ["first_item", "second_item", "third_item"]
  return (
    <React.Fragment>
        {
            items.map(item => <h1>{item}</h1>)
        }
        <td>First Name :</td>
        <td>Jerry</td>
        <td>Last Name</td>
        <td>Farwell</td>
    </React.Fragment>
  )
}

export default Columns