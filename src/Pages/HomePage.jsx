import React from 'react'
import VideoAnimation from '../Components/FrontPage/VideoAnimation'
import AboutUsOnHomePage from '../Components/FrontPage/AboutUsOnHomePage'
import Clients from '../Components/FrontPage/Clients'
import HorizontalSlider from '../Components/FrontPage/HorizontalSlider'

const HomePage = () => {
  return (
    <>
        <VideoAnimation />
        <AboutUsOnHomePage />
        <Clients />
        <HorizontalSlider />
    </>
  )
}

export default HomePage