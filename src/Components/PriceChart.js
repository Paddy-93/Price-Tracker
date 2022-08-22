import React, { useEffect, useState } from 'react'
import { VictoryAxis,VictoryChart, VictoryLine } from 'victory';

const PriceChart = () => {
  const [coinData,setCoinData] = useState([]);

  useEffect(()=>{
    getCoinData()
  },[])

  const getCoinData = async() => {
    const datePrices = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily").then(results=>results.json());
    console.log("HEREf "+ JSON.stringify(datePrices.prices));

      setCoinData(datePrices.prices.map((datePrice,idx) => {
        let myDate = new Date(datePrice[0]).toLocaleDateString("en-US");
        debugger;
        console.log("UTC " + datePrice[0] + " date " +myDate)
        return {x: myDate, y:datePrice[1]};
      }))
    

  }

  return (
  <div >
    <VictoryChart >
      <VictoryLine 
        data={coinData}
       
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
}

export default PriceChart