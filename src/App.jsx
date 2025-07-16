import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Coins from './Components/Coins/Coins'
import { Routes, Route } from 'react-router'


const App = () => {
  return (
    <div className='min-h-screen max-w-[1440px] text-white bg-gray-900 '>
      <Navbar  />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/coins' element={<Coins />} ></Route>
      </Routes>
    </div>
  )
}

export default App