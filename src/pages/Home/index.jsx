import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar'
import Asidebar from '../../components/Asidebar'
import HighLight from '../../components/highLight'

const Home = () => {
  return (
    <div className='home-container'>
      <Asidebar />
      <div className="principal">
        <Navbar />
        <div className="main">
          <HighLight />
        </div>
      </div>
    </div>
  )
}

export default Home