import React, { useEffect } from 'react'
import initializeAOS from '../aos/aosSetup'

const NewsCard = ({img,title,desc}) => {

  useEffect(()=>{
    initializeAOS()
  },[])
  return (
    <div data-aos='zoom-in' data-aos-duration='600' data-aos-delay='200' className='flex flex-col md:flex-row rounded-3xl md:max-h-[290px] overflow-hidden bg-white shadow-card'>
        <div className='md:w-[45%]'>
            <img className='w-full h-[200px] md:h-full object-cover' src={img} alt="" />
        </div>
        <div className='md:w-[55%] p-3'>
            {/* <button className='bg-main text-white rounded-2xl py-1 px-4 text-sm border-[1px] hover:text-main hover:bg-white hover:border-main transition-colors duration-300'>News</button> */}
            <h4 className='text-[16px] font-semibold mt-1 mb-2'>{title}</h4>
            <p className='text-[12px]'>{desc}</p>
        </div>
    </div>
  )
}

export default NewsCard