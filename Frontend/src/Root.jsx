import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Carousel from './Components/Carousel/Carousel'

import {Outlet} from 'react-router-dom'

function Root() {
  return (
    <>
    <Header />
    {/* <Carousel /> */}
    <Outlet />
    <Footer />
    </>
  )
}

export default Root