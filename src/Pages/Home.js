import React, { useEffect, useState } from 'react'
import CoinTable from '../Components/CoinTable';
import './Home.style.css'

const Home = () => {
  return (
    <div className='styledDiv' >
        <CoinTable/>
    </div>
  )
}

export default Home