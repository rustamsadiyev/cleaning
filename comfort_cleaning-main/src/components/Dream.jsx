import React, { useEffect } from 'react'
import dream1 from "../assets/xizmat1.jpg"
import dream2 from "../assets/dream-2.jpg"
import dream3 from "../assets/dream-3.jpg"
import dream4 from "../assets/dream-4.jpg"
import dream5 from "../assets/dream-5.jpg"
import dream6 from "../assets/dream-6.jpg"
import initializeAOS from '../aos/aosSetup'
import { useTranslation } from 'react-i18next'

const Dream = () => {
    const {t}=useTranslation()

    useEffect(()=>{
        initializeAOS()
    },[])
  return (
    <div className='mt-20 overflow-x-hidden'>
        <h2 data-aos='zoom-in' data-aos-duration='900' className='text-center text-2xl sm:text-3xl font-semibold mb-8'>{t('dream')}</h2>
        <div className='grid grid-cols-[1fr,1fr] sm:grid-cols-[1fr,1fr,1fr] grid-rows-[230px,230px] sm:grid-rows-[270px,270px] md:grid-rows-[350px,350px]'>
            <div data-aos='flip-up' data-aos-duration='600'>
                <img className='w-full h-full object-cover object-center' src={dream1} alt="" />
            </div>
            <div data-aos='flip-up' data-aos-duration='600'>
                <img className='w-full h-full object-cover object-center' src={dream2} alt="" />
            </div>
            <div data-aos='flip-up' data-aos-duration='600'>
                <img className='w-full h-full object-cover object-center' src={dream3} alt="" />
            </div>
            <div data-aos='flip-down' data-aos-duration='600'>
                <img className='w-full h-full object-cover object-center' src={dream4} alt="" />
            </div>
            <div data-aos='flip-down' data-aos-duration='600'>
                <img className='w-full h-full object-cover object-center' src={dream5} alt="" />
            </div>
            <div data-aos='flip-down' data-aos-duration='600'>
                <img className='w-full h-full object-cover object-center' src={dream6} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Dream