import React from 'react'
import Serchbar from '../serchBar'
import {FaBell} from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="navbar-header">
            <h1>Sous division Bbo</h1>
            <span>Mercredi 07 Septembre 2022 | 14h55</span>
        </div>
        <div className="navbar-body">
            <span className='msg'><FaBell /></span>
            <Serchbar />
        </div>
    </div>
  )
}

export default Navbar