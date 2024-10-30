import React, { useEffect } from 'react'
import Container from '../utils/Utils'
import carpetscling from "../assets/images.jpeg"
import dizifeksiya from "../assets/servis5.jpeg"
import dastafka from "../assets/dastafka.png"
import hidlardan from "../assets/seviz2.webp"
import { useTranslation } from 'react-i18next'
import initializeAOS from '../aos/aosSetup'

const Services = () => {
    const { t } = useTranslation()

    useEffect(() => {
        initializeAOS()
    }, [])

    return (
        <div id='services' className=''>
            <Container>
                <div className='pt-20 pb-10'>
                    <h2 data-aos='zoom-in' data-aos-duration='800' data-aos-delay='200' className='text-center text-3xl sm:text-2xl md:text-3xl font-semibold mb-12'>
                        {t('services.h2')}
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/* Birinchi rasm */}
                    <div data-aos='flip-right' data-aos-duration='1000'
                       className='bg-main rounded-2xl flex items-center justify-between px-1 pl-7 pt-10 bg-cover bg-center relative'
                       style={{
                           backgroundImage: `url(${carpetscling})`,
                           backgroundSize: 'cover',
                           backgroundPosition: 'center',
                           width: '100%',
                           height: '150px',
                       }}>
                       <div className="absolute inset-0 bg-black opacity-50 rounded-2xl z-0"></div> 
                       <p className='text-white text-3xl md:text-2xl sm:text-xl font-bold z-10'>{t('services.p1')}</p>
                   </div>
                   
                   {/* Ikkinchi rasm */}
                    <div data-aos='flip-left' data-aos-duration='1000'
                       className='bg-main rounded-2xl flex items-center justify-between px-1 pl-7 pt-10 bg-cover bg-center relative'
                       style={{
                           backgroundImage: `url(${hidlardan})`,
                           backgroundSize: 'cover',
                           backgroundPosition: 'center',
                           width: '100%',
                           height: '150px',
                       }}>
                       <div className="absolute inset-0 bg-black opacity-50 rounded-2xl z-0"></div>
                       <p className='text-white text-3xl md:text-2xl sm:text-xl font-bold z-10'>{t('services.p2')}</p>
                    </div>

                    {/* Uchunchi rasm */}
                    <div data-aos='flip-right' data-aos-duration='1000'
                       className='bg-main rounded-2xl flex items-center justify-between px-1 pl-7 pt-10 bg-cover bg-center relative'
                       style={{
                           backgroundImage: `url(${dizifeksiya})`,
                           backgroundSize: 'cover',
                           backgroundPosition: 'center',
                           width: '100%',
                           height: '150px',
                       }}>
                       <div className="absolute inset-0 bg-black opacity-50 rounded-2xl z-0"></div>
                       <p className='text-white text-3xl md:text-2xl sm:text-xl font-bold z-10'>{t('services.p3')}</p>
                    </div>

                    {/* To`rtinchi rasm */}
                    <div data-aos='flip-left' data-aos-duration='1000'
                       className='bg-main rounded-2xl flex items-center justify-between px-1 pl-7 pt-10 bg-cover bg-center relative'
                       style={{
                           backgroundImage: `url(${dastafka})`,
                           backgroundSize: 'cover',
                           backgroundPosition: 'center',
                           width: '100%',
                           height: '150px',
                       }}>
                       <div className="absolute inset-0 bg-black opacity-50 rounded-2xl z-0"></div>
                       <p className='text-white text-3xl md:text-2xl sm:text-xl font-bold z-10'>{t('services.p4')}</p>
                    </div>
                    
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Services