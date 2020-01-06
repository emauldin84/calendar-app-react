import React from 'react'

import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='left-nav-container'>
                <div className='nav-items'>logo</div>
                <div className='nav-items'>calendar title</div>
            </div>
            <div className='right-nav-container'>
                <div className='nav-items'>arrows</div>
                <div className='nav-items'>2020</div>
                <div className='nav-items'>other displays...</div>
            </div>
        </div>
    )
}


export default Navbar