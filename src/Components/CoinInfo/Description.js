import React, { useState, useEffect } from 'react'

const Description = ( { coinInfo } ) => {

      if(coinInfo){
        return (
            <div>
                <div className='pl-4' style={{float:"left", width:"55%"}}>
                    <div className='bg-black text-white w-20 text-center rounded-md'>Rank # {coinInfo.market_cap_rank}</div>
                    <div className='font-bold text-xl flex-auto'> <img className='float-left' src={coinInfo.image.thumb}/> {coinInfo.name} <span className='uppercase'>({coinInfo.symbol})</span></div>
                    <div>{coinInfo.market_data.current_price.usd} {coinInfo.price_change_percentage_24h}</div>
                    <div>{coinInfo.market_data.low_24h.usd} 24H Range {coinInfo.market_data.high_24h.usd}</div>
                </div>
            </div>

        )
      } else {
          return (
              <div>No Info Found</div>
          )
      }
}

export default Description