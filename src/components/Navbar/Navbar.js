import React from 'react'

import './Navbar.css'
import logo from '../../assets/calendar-minimalist.png'

const Navbar = (props) => {
    return (
        <div className='nav-container'>
            <div className='left-nav-container'>
                <img className='nav-items logo' alt='calendar logo' src={logo}/>
                <div className='nav-items'>calendar title</div>
            </div>
            <div className='right-nav-container'>
                <div className='nav-items arrow-containers' onClick={props.decYear}>
                    <i className="arrow left"></i>
                </div>
                <div className='nav-items year'>{props.year}</div>
                <div className='nav-items arrow-containers' onClick={props.incYear}>
                    <i className="arrow right"></i>
                </div>
                <div className='nav-items'>other displays...</div>
            </div>
        </div>
    )
}


export default Navbar