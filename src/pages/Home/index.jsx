import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar'
import Asidebar from '../../components/Asidebar'

const Home = () => {
  return (
    <div className='home-container'>
      <Asidebar />
      <div className="principal">
        <Navbar />
      </div>
    </div>
  )
}

export default Home