import React, { useEffect, useState } from 'react'
import Card from './Card';

const OnlineDelivery = () => {

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
    <div className='text-[25px] font-bold'>Restaurants with online food delivery in Jodhpur</div>
    </div>
    </div>
      <div className=' mr-40 ml-40 grid grid-cols-4 gap-3'>
        {
            data.map(
                (d, i) => {
                  return <Card {...d}/>
                }
               )
        }

      </div>
    </div>
  )
}

export default OnlineDelivery
