import React from 'react'
import {RiSearchLine} from 'react-icons/ri'
import './serchbar.css'

const Serchbar = () => {
  return (
    <div className='searchbar-container'>
        <span><RiSearchLine /></span>
        <input type="text" name="search" placeholder='Effectuer la recherche ...' />
    </div>
  )
}

export default Serchbar