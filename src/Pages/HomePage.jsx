import React from 'react'
import VideoAnimation from '../Components/FrontPage/VideoAnimation'
import AboutUsOnHomePage from '../Components/FrontPage/AboutUsOnHomePage'
import Clients from '../Components/FrontPage/Clients'
import HorizontalSlider from '../Components/FrontPage/HorizontalSlider'
import Newest from '../Components/FrontPage/Newest'
import Quote from '../Components/FrontPage/Quote'


const HomePage = () => {
  return (
    <>
        <VideoAnimation />
        <AboutUsOnHomePage />
        <Clients />
        <HorizontalSlider />
        <Newest />
        <Quote />
    </>
  )
}

export default HomePage