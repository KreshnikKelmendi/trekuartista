import React from 'react'
import VideoAnimation from '../Components/FrontPage/VideoAnimation'
import AboutUsOnHomePage from '../Components/FrontPage/AboutUsOnHomePage'
import Clients from '../Components/FrontPage/Clients'
import HorizontalSlider from '../Components/FrontPage/HorizontalSlider'
import Newest from '../Components/FrontPage/Newest'
import Quote from '../Components/FrontPage/Quote'
import TeamOnHomePage from '../Components/FrontPage/TeamOnHomePage'
import Office from '../Components/FrontPage/Office'

React.lazy(() => import('../Components/FrontPage/VideoAnimation'));


const HomePage = () => {
  return (
    <>
    <React.Suspense fallback={<div>Loading...</div>}>
        <VideoAnimation />
      </React.Suspense>
        
        <AboutUsOnHomePage />
        <Clients />
        <HorizontalSlider />
        <Newest />
        <Quote />
        <TeamOnHomePage />
        <Office />
    </>
  )
}

export default HomePage