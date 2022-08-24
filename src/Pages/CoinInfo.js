import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Description from '../Components/CoinInfo/Description'
import PriceChart from '../Components/CoinInfo/PriceChart'


const CoinInfo = () => {
    const [coinInfo, setCoinInfo] = useState(null);

    const { id } = useParams()

    useEffect(()=> {
        getCoinInfo();
    },[id])

    const getCoinInfo = async() => {
        const info = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`).then(results=>results.json());
        // let coin = {
        //     rank: info.market_cap_rank, 
        //     image : info.image.small, 
        //     name : info.name,
        //     symbol : info.symbol,
        //     description: info.description.en,
        //     currPrice: info.market_data.current_price.usd,
        //     dailyHigh: info.high_24h,
        //     dailyLow: info.low_24h,
        //     dailyChangePerc: info.price_change_percentage_24h,
        //     volume : info.total_volume.usd,
        //     fullyDilutedVal : info.fully_diluted_valuation,
        //     circulatingSupply: info.circulating_supply,
        //     totalSupply : info.total_supply,
        //     maxSupply :  info.max_supply
        // } 
        setCoinInfo(info)
      }
    
  return (
    <div>
        <Description coinInfo={coinInfo} id={id}/>
        <PriceChart id={id}/>
    </div>
  )
}

export default CoinInfo
