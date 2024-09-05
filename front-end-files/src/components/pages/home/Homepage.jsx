import React from 'react'
import Header from '../../global-components/Header'
import Footer from '../../global-components/Footer'

import './banner.css'
import FeaturedSrvs from './FeaturedSrvs'
import AboutSection from './AboutSection'
import Banner from './Banner'

function Homepage() {
  return (
    <>
    <Banner />
    <FeaturedSrvs />
    <AboutSection />
    </>
  )
}

export default Homepage