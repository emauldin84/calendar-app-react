import React from 'react'

import Month from '../Month/Month'

const Calendar = (props) => {
    return (
        <div>
            <Month year={props.year}/>
        </div>
    )
}

export default Calendar