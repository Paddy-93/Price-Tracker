import React, { useEffect, useState } from 'react'
import { VictoryAxis,VictoryChart, VictoryLine } from 'victory';

const PriceChart = ( { id }) => {
  const [priceData,setpriceData] = useState([])

  useEffect(()=>{
    getCoinPrices()
  },[id])

  const getCoinPrices = async() => {
    const datePrices = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`).then(results=>results.json());
    console.log(datePrices);  
    setpriceData(datePrices.prices.map((datePrice,idx) => {
        let myDate = new Date(datePrice[0]).toLocaleDateString("en-US");
        return {x: myDate, y:datePrice[1]};
      }))
  }



  if(priceData && priceData.length > 0){
    return (
      <div style={{float:"right"}}>
            <h1>30 Day Chart</h1>
            <VictoryChart >
              <VictoryLine 
                data={priceData}
              />
            <VictoryAxis
                dependentAxis={true}
                style={{
                  grid: { stroke: "grey" }
                }}
              />
              <VictoryAxis 
                fixLabelOverlap={true}
              />
          </VictoryChart> 
      </div>

    )
  } else {
    return <></>
  }
}

export default PriceChart