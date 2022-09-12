import React from 'react'
import './asidebar.css'
import {MdDashboard, MdSchool, MdPeopleAlt, MdSettings, MdLogout} from 'react-icons/md'

const Asidebar = () => {
  return (
    <div className='asidebar-container'>
        <span className="logo">LOGO SD BBO</span>
        <ul className="list-items">
            <li className='active'><MdDashboard className='menu-icon'/><a href="#">Tableu de bord</a></li>
            <li><MdSchool className='menu-icon'/><a href="#">Ecoles</a></li>
            <li><MdPeopleAlt className='menu-icon'/><a href="#">Eleves</a></li>
            <li><MdSettings className='menu-icon'/><a href="#">Parametre</a></li>
        </ul>
        <div className="show-status">
            <div className="profile-pic">
                <img src="./assets/profil-image.jpg" alt="profile-pic" />
            </div>
            <span>Bonjour, <strong>Clara M.</strong></span>
            <div className="logout">
                <span><MdLogout className='logout-icon' /><a href="#">Deconnexion</a></span>
            </div>
        </div>
    </div>
  )
}

export default Asidebar