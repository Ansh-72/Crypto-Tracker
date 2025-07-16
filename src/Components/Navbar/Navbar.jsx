import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router'
import { useContext } from 'react'
import { CoinContext } from '../CoinContext/CoinContext'



const Navbar = () => {


  const { SetCurrency,Currency} = useContext(CoinContext)
  const CurrencyHandler = (event) => {

    switch (event.target.value) {
      case "USD": {
        SetCurrency({ name: "USD", symbol: "$" })
      }
        break;
      case "EUR": {
        SetCurrency({ name: "EUR", symbol: "€" })
      }
        break;
      case "INR": {
        SetCurrency({ name: "INR", symbol: "₹" })
      }
        break;

      default: {
        SetCurrency({
          name: "USD", symbol: "$", 
        })
      }
        break;
    }

  }

  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-between px-4 py-3 border-b border-lime-100 max-w-screen-xl mx-auto'>
        <img src={logo} alt="Logo" className='w-28 mb-3 md:mb-0' />
        <ul className='flex flex-wrap gap-6 md:gap-12'>
          <Link to={'/'}>Home</Link>
          <Link to={'/coins'}>Coins</Link>
          <li>Features</li>
          <li>Pricing</li>
        </ul>
        <div className='flex items-center gap-4 mt-3 md:mt-0'>
          <select onChange={CurrencyHandler} className=' rounded px-2 py-1 bg-fuchsia-900 text-white  '>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
          </select>
          <button className='px-4 py-2 rounded-xl bg-fuchsia-900 text-white'>Sign-Up</button>
        </div>
      </div>
    </>

  )
}

export default Navbar