import React, { useEffect } from 'react'
import Container from '../utils/Utils'
import NewsCard from './NewsCard'
import news1 from "../assets/why1.webp"
import news2 from "../assets/why2.jpg"
import news3 from "../assets/why3.jpeg"
import news4 from "../assets/why4.jpeg"

// import back from "../assets/video.gif" // Import the background GIF
import { useTranslation } from 'react-i18next'
import initializeAOS from '../aos/aosSetup'

const News = () => {
    const {t}=useTranslation()

    useEffect(()=>{
      initializeAOS()
    },[])

  return (
    <div
      id='news'
      className='mt-10 mb-20 pb-8 bg-[#f7f7f7] pt-16'
     
    >
      <Container>
	  <h2 data-aos='zoom-in' className='sm:text-3xl text-2xl font-semibold mb-5 text-black'>{t('news.title')}</h2>
        <div className='grid grid-cols-1 lg:grid-cols-[repeat(2,minmax(350px,50%))] gap-8'>
          <NewsCard img={news1} title={t('news.title1')} desc={t('news.desc1')} />
          <NewsCard img={news2} title={t('news.title2')} desc={t('news.desc2')} />
          <NewsCard img={news3} title={t('news.title3')} desc={t('news.desc3')} />
          <NewsCard img={news4} title={t('news.title4')} desc={t('news.desc4')} />
        </div>
      </Container>
    </div>
  )
}

export default News
