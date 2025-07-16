import React, { useContext, useEffect } from 'react'
import { CoinContext } from '../CoinContext/CoinContext'
import { useLocation, useNavigate } from 'react-router'

const Coins = () => {
  const { Coins, Currency } = useContext(CoinContext)


  const location = useLocation() // Gives the Current URL object which stored in location variable
  

  const queryString = location.search // Gives the complete query param string
  const queryParam = new URLSearchParams(queryString) // URLSearchParams convert query param string into key value pair
  const SearchValue = queryParam.get("search") // .get() gives the value of key passing to it for ex search

  const filteredCoins = SearchValue
    ? Coins.filter((item) => item.name.toLowerCase().includes(SearchValue.toLowerCase()))
    : Coins


  return (
    <div className='flex justify-center items-start m-0 p-4 w-screen min-h-screen'>
      <div className="w-full  max-w-4xl overflow-x-auto mx-auto">
        <table className=" w-auto mx-auto bg-gradient-to-r from-slate-500 to-slate-800  rounded-lg md: flex-wrap ">
          <thead>
            <tr className=' border-gray-600 font-light'>
              <td className='py-3 px-4'>#</td>
              <td className='py-3 px-[17px]'>Coin</td>
              <td className='py-3 px-4'>Price</td>
              <td className='py-3 px-4'>24H Change</td>
              <td className='py-3 px-4'>Market Cap</td>
            </tr>
          </thead>

          <tbody>
            {
              filteredCoins.slice(0, 10).map((item, index) => (

                <tr className="border-b border-gray-600 last:border-b-0" key={index}>
                  <td className='py-3 px-4  '>{item.market_cap_rank}</td>
                  <td className='py-3 px-4'>{item.name}<img className='w-6 h-6 inline-block' src={item.image} /></td>
                  <td className='py-3 px-4  '> {Currency.symbol}{item.current_price.toLocaleString()}</td>
                  <td className={`py-3 px-4   ${item.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}`}> {Math.floor(item.price_change_percentage_24h * 100) / 100}</td>
                  <td className='py-3 px-4  '>{Currency.symbol}{item.market_cap.toLocaleString()}</td>
                </tr>

              ))

            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Coins