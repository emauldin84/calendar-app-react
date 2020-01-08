import React from 'react'
import moment from 'moment'

import './Month.css'

const Month = (props) => {
    // const startWeek = moment().startOf('month').week(); // === 1
    // const endWeek = moment().endOf('month').week(); // === 5
    // const startMonth = moment().startOf('year').month() // === 0
    // const endMonth = moment().endOf('year').month() // === 11
    // console.log('startWeek',startWeek)
    // console.log('endWeek',endWeek)
    // console.log('startYear',startMonth)
    // console.log('endYear',endMonth)

    // let yearData = []
    // for (let month = startMonth; month < endMonth; month++) {
    //     let weeksPerMonth = moment(moment().month(month)).endOf('month').week() - (month > 0 ? moment(moment().month(month-1)).endOf('month').week() : 0)
    //     console.log(weeksPerMonth)
    //     yearData.push({
    //         month: month,
    //         weeks: Array(weeksPerMonth).fill(0).map((n, i) => moment().month(month).startOf('month').clone().add(n + i, 'week'))
    //     })
    // }
    
    // console.log('yearData', yearData)
    // // console.log('Moment TESTS', moment(moment().month(1)).endOf('month').week() - moment(moment().month(1-1)).endOf('month').week())
    // // console.log('Moment TESTS', moment(moment().month(0)).endOf('month').week())

    // let monthData = []
    // for(let week = startWeek; week <= endWeek; week++){
    //     monthData.push({
    //         week:week,
    //         days:Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
    //     })
    // }
    // console.log('monthData', monthData)
    // console.log(moment().week(1).startOf('week').clone().add(2 + 1, 'day'))

    // let monthDisplay = monthData.map((week, i) => {
    //     return (
    //         <tr key={i}>
    //             {week.days.map(day => {
    //                 return (
    //                     <td key={day._d}>{moment(day._d).format('D')}</td>
    //                     )
    //             })}
    //         </tr>
    //     )
    // })
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