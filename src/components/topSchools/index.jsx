import React from 'react'
import Ecoles from '../ecoles'
import './topschool.css'

const TopSchools = () => {
  return (
    <div className='topschool-container'>
        <div className="school-section">
          <h1 className="title">Top 5 Secondaires populaires</h1>
          <Ecoles />
        </div>
        <div className="school-section">
          <h1 className="title">Top 5 Primaires populaires</h1>
          <Ecoles />
        </div>
    </div>
  )
}

export default TopSchools