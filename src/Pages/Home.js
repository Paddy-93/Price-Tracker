import React, { useEffect, useState } from 'react'
import CoinTable from '../Components/CoinTable';
import Search from '../Components/Search';
import './Home.style.css'

const Home = () => {
  return (
    <div className='styledDiv' >
        <CoinTable/>
        <Search/>
    </div>
  )
}

export default Home