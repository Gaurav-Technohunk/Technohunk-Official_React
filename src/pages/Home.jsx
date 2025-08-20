import React from 'react'
import Banner from '../components/Banner'
import Blog from '../components/Blog'
import Features from '../components/Features'
import Services from '../components/Services'
import Counter from '../components/Counter'
import Team from '../components/Team'
import Messages from '../components/Messages'
import Cta from '../components/Cta'
import Testimonial from '../components/Testimonial'
import Projects from '../components/Projects'
import TextSlider from '../components/TextSlider'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <>
      <Banner/>
      <Features/>
      <Services/>
      <Counter/>
      {/* <Team/> */}
      <Messages/>
      {/* <Cta/> */}
      <Testimonial/>
      {/* <Projects/> */}
      <TextSlider/>
      <Faq/>
      <Blog/>
    </>
  )
}

export default Home
