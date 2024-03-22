import React, { useEffect } from 'react'
import SpaceOffice from '../Components/Contact/SpaceOffice'
import ContactForm from '../Components/Contact/ContactForm'
import Map from '../Components/Contact/Map'
import transition from '../transition'
import ZoomParallax from '../Components/Contact/ZoomParallax'

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Trekuartista';
  }, []);

  return (
    <>
      {/* <SpaceOffice /> */}
      <ZoomParallax />
      <ContactForm />
      <Map />
    </>
  )
}

export default transition(ContactPage)