import React, { useEffect, useState } from 'react'
import CoinTable from '../Components/CoinTable';

const TABLE_HEADERS = ["Coin", "Current Price", "Market Cap", "24 Hour Change (%)"];

const Home = () => {


  return (
    <div>
        <CoinTable/>
    </div>
  )
}

export default Home