import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import MyBlog from './Components/MyBlog/MyBlog.jsx'
import Createblog from './Components/CreateBlog/Createblog.jsx'
import DetailBlog from './Components/DetailBlog/DetailBlog.jsx'
import InfoBlog from './Components/InfoBlog/InfoBlog.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      <Route path='myblog' element={<MyBlog/>} />
      <Route path='create' element={<Createblog/>} />
      <Route path='detail/:uid' element={<DetailBlog/>} />
      <Route path='info/:uid' element={<InfoBlog/>} />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
