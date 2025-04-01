import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

const Header = React.lazy(()=>import('./components/Header'))
const AboutPage = React.lazy(()=>import('./pages/AboutPage'))
const Footer = React.lazy(()=>import('./components/Footer'))
const Home = React.lazy(()=>import('./pages/Home'))
const Events = React.lazy(()=>import('./pages/Events'))

const App = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/events' element={<Events />}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App