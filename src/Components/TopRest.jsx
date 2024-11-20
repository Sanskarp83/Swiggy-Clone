import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Card from './Card.jsx'
const TopTest = () => {
  const [data, setData] = useState([])

  const fetchTopRestaurant = async () => {
    const response = await fetch('http://localhost:5002/top-restaurant-chains');
    const apiData = await response.json();
    setData(apiData);
  }

  useEffect(
    () => {
      fetchTopRestaurant();
    }, []
  )



  return (
    <div>
      <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-5 items-center justify-between'>
      <div className='text-[25px] font-bold'>Top restaurent chains in Jodhpur</div>
      <div className='flex'>
        <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'>
          <FaArrowLeft/>
          </div>
        <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'>
          <FaArrowRight/></div>
      </div>
      </div>
      </div>
      <div className='flex mr-40 ml-40 gap-5 overflow-hidden border-b-4 drop-shadow-lg'>
         {
             data.map(
              (d, i) => {
                return <Card {...d} key={i}/>
              }
             )
         }
        
      </div>
    </div>
  )
}

export default TopTest
