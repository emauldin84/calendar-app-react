import React from 'react'
import moment from 'moment'

import './Month.css'

const Month = (props) => {
    const startWeek = moment().startOf('month').week();
    const endWeek = moment().endOf('month').week();

    let monthData = []
    for(let week = startWeek; week < endWeek; week++){
        monthData.push({
            week:week,
            days:Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
        })
    }
    console.log(monthData)

    let monthDisplay = monthData.map(week => {
        return (
            <tr>
                {week.days.map(day => {
                    return (
                        <td>{moment(day._d).format('D')}</td>
                        )
                })}
            </tr>
        )
    })


    return (
        <div className='month-container'>
            <p className='month'>Month</p>
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
                    {monthDisplay}
                </tbody>
            </table>
        </div>
    )
}


export default Month