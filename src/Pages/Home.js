import React, { useEffect, useState } from 'react'

const TABLE_HEADERS = ["Coin", "Current Price", "Market Cap", "24 Hour Change (%)"];

const Home = () => {

    const [coinList, setCoinList] = useState([]);

    useEffect(()=> {
        getCoins();
    },[])

    const getCoins = async () => {
        const data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false").then(results=>results.json());
        setCoinList(data)
        console.log(data)
    }

    const renderTableHeader = () =>(
        //console.log("RENDER HEADER")
        TABLE_HEADERS.map(header => (
            <th>{header}</th>
        ))
    )

    const renderCoinsTable = () =>(
        coinList.map(coin => (
            <tr key={coin.id}>
                <td><img src={coin.image} alt="Logo" width="20" height="20"/>{coin.name} ({coin.symbol}) </td>
                <td>{coin.current_price}</td>
                <td>{coin.market_cap}</td>
                <td>{coin.price_change_percentage_24h}</td>
            </tr>
        ))
    )
  return (
    <table id="coins-table">
        <tbody>
            <tr>{renderTableHeader()}</tr>
            {renderCoinsTable()} 
        </tbody>
    </table>
  )
}

export default Home