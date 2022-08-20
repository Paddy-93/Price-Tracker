import React, { useEffect, useState } from 'react'

const Home = () => {

    const [coinList, setCoinList] = useState(null);

    useEffect(()=> {
        getCoins();
        console.log(coinList);
    },[])

    const getCoins = async () => {
        const data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then(results=>results.json());
        setCoinList(data)
    }

    const renderCoins = () =>{
        return (
            <div>
                {coinList.map(coin => (
                    <div key={coin.id}>{coin.name}</div>
                ))}
            </div>
        )
    }
  return (
    <div> 
       {renderCoins()}
    </div>
  )
}

export default Home