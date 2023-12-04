import React, { useEffect } from 'react'
import SpaceOffice from '../Components/Contact/SpaceOffice'
import ContactForm from '../Components/Contact/ContactForm'
import Map from '../Components/Contact/Map'

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Trekuartista';
  }, []);

  return (
    <>
      <SpaceOffice />
      <ContactForm />
      <Map />
    </>
  )
}

export default ContactPage