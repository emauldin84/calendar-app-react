import React from 'react'

import './Month.css'

const Month = (props) => {
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let date = new Date()
    let month = date.getMonth()
    let currentMonth = months[month]

    return (
        <div className='month-container'>
            <p className='month'>{currentMonth}</p>
            <table>
                <tbody>
                    <tr className='weekdays'>
                        <td>S</td>
                        <td>M</td>
                        <td>T</td>
                        <td>W</td>
                        <td>T</td>
                        <td>F</td>
                        <td>S</td>
                    </tr>
                    {/* {monthDisplay} */}
                </tbody>
            </table>
        </div>
    )
}


export default Month