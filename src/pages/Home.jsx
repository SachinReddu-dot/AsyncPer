import React from 'react'
import Landing from '../components/Landing'
import CreateCommunity from '../components/CreateCommunity'
import About from '../components/About'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <div className='w-full h-[1px] bg-white'></div>
      <CreateCommunity /> 
      <div className='w-full h-[1px] bg-white'></div>
      <Faq />
    </>
  )
}

export default Home