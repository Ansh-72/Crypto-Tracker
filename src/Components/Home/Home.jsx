import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Home = () => {

  
 const Navigate =useNavigate()


  const [Input, Setinput] = useState("")
  const InputHandler = (e) => {
    Setinput(e.target.value);
  }
    
  const HandleSubmit= (e)=>{
    e.preventDefault()
   if(Input.trim()){
    Navigate(`/Coins?search=${Input.trim()}`)
   }
  }


  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-20 px-4 text-center'>
        <h1 className='text-4xl sm:2xl md:text-5xl lg:text-7xl' >Every Coin. One Dashboard</h1>
      </div>
      <div className='flex  justify-center mt-6 text-base  sm:text-2xl '>
        <p>Welcome to the World's largest cryptocurrency marketplace.</p>
      </div>
      <div className='flex  justify-center mt-2 text-base sm:text-xl'>
        <p>sign up to explore more about crypto</p>
      </div>

      <div className="relative w-full max-w-md mx-auto mt-8">
        <form onSubmit={HandleSubmit} > <input onChange={InputHandler} value={Input} required type="text" placeholder="Search..." className="w-full py-2 pr-12 pl-4 rounded border bg-white text-black" />

          <button type='submit' className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-fuchsia-600 hover:bg-fuchsia-800 text-white px-3 py-1 rounded" >
            Search
          </button>
        </form>
      </div>




    </div>
  )
}

export default Home