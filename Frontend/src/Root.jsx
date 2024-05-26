import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Carousel from './Components/Carousel/Carousel'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import {Outlet} from 'react-router-dom'

function Root() {
  return (
    <>
    <ToastContainer />
    
    <Header />
    {/* <Carousel /> */}
    <Outlet />
    <Footer />
    </>
  )
}

export default Root