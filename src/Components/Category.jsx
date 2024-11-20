import React, {useEffect, useState} from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Category = () => {
   const [slide, setSlide] = useState(0);
   const [categories, setcategory] = useState([]);
   
   const fetchCategory = async () => {
      const response = await fetch("http://localhost:5002/categories");
      const data = await response.json();
      setcategory(data);
   }

   useEffect(
    () => {
      
       fetchCategory();
      
    }, []
  )

    const nextSlide = () => {
      console.log(categories.length);
      if(categories.length - 8 <= slide) return;
       setSlide(slide + 3);
    }
    const prevSlide = () => {
      if(slide <= 0) return;
      setSlide(slide - 3);
    }





  return (
    <>

    <div className='max-w-[1200px] mx-auto '>
      <div className='flex my-5 items-center justify-between'>
      <div className='text-[25px] font-bold'>What's on your mind?</div>
      <div className='flex'>
        <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer' onClick={prevSlide}>
          <FaArrowLeft/></div>
        <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer' onClick={nextSlide}>
          <FaArrowRight/></div>
      </div>
      </div>
      </div>
        
    <div className='flex mr-40 ml-40'>
      <div className='flex border-b-4 drop-shadow-lg overflow-hidden'>
        {
          categories.map(
            (cat, index) => {
              return (
                <div style={{
                  transform: `translateX(-${slide * 100}%)`
                }}key={index} className='w-[150px] shrink-0 duration-500'>
                  <img src={"http://localhost:5002/images/" + cat.image} alt="" />
                </div>
              )
            }
          )
        }
      </div>
      </div>
   
      
    </>
    
  )
}

export default Category
