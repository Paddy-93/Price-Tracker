import React, { useEffect, useState } from 'react'
import './CoinTable.style.css'

const TABLE_HEADERS = ["Coin", "Current Price", "Market Cap", "24 Hour Change (%)"];

const CoinTable = () => {

    const [coinList, setCoinList] = useState([]);

    useEffect(()=> {
        getCoins();
    },[])

    const getCoins = async () => {
        const data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then(results=>results.json());
        setCoinList(data)
    }

    const renderTableHeader = () =>(
        TABLE_HEADERS.map(header => (
            <th>{header}</th>
        ))
    )

    const renderCoinsTable = () =>(
        coinList.map(coin => (
            <tr key={coin.id} className>
                <td><img src={coin.image} alt="Logo" width="20" height="20"/>{coin.name} ({coin.symbol}) </td>
                <td>{coin.current_price}</td>
                <td>{coin.market_cap}</td>
                <td style={coin.price_change_percentage_24h < 0 ? { color:"red" } : {color:"green"}}>{coin.price_change_percentage_24h}</td>
            </tr>
        ))
    )
  return (
    <div className='tableFixHead'>
        <table id="coins-table">            
            <thead>
            <tr>{renderTableHeader()}</tr>
            </thead>
            <tbody>
            {renderCoinsTable()} 
            </tbody>
        </table>
    </div>

  )
}

export default CoinTable