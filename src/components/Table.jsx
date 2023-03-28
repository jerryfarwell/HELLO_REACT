import React from 'react'
import Columns from './Columns'




function Table() {
  return (
    <div>
        <table> 
            <tbody>
                <tr>
                    <Columns />
                </tr>
                <tr>
                    <Columns /> 
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table

// this is how we create tables this is helping us working on fragment 
// <table></table> open a new table 
// <tbody></tbody> is the body of the table 
// <tr></tr> is every line of the table 
// and <td></td> wich is in the export file is where the content of the table is put 
// we are using <React.Fragment></React.Fragment> here because in the export file we have td and this can not be exported into a <div></div> it will work but put errors in the console
