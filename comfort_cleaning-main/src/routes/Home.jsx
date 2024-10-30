import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Ratings from '../components/Ratings'
import Dream from '../components/Dream'
import Projects from '../components/Projects'
import News from '../components/News'
import Enterprises from '../components/Enterprises'
import About from '../components/About'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Forex from "../components/Forex"
const Home = () => {
  return (
    <>
        <Nav/>
        <Banner/>
        <Services/>
        <Ratings/>
        <Dream/>
        <Projects/>
		<Forex/>
        <News/>
        <Enterprises/>
        <About/>
        <Form/>
        <Footer/>
    </>
  )
}

export default Home