import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar'
import Asidebar from '../../components/Asidebar'
import HighLight from '../../components/highLight'
import TopSchools from '../../components/topSchools'

const Home = () => {
  return (
    <div className='home-container'>
      <div className="aside">
        <Asidebar />
      </div>
      <div className="principal">
        <Navbar />
        <div className="main">
          <HighLight />
          <TopSchools />
        </div>
      </div>
    </div>
  )
}

export default Home