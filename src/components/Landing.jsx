import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
   <>
    <div className="h-screen text-white overflow-hidden">
  <div className="w-full h-full">
    <img
      className="object-cover opacity-40 object-center w-full h-full"
      src="https://images.unsplash.com/photo-1525026198548-4baa812f1183?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />
  </div>
  <div className="w-full h-screen absolute top-0 left-0 flex flex-col justify-center items-center px-5">
    <h1 className="text-4xl font-semibold mb-4 text-center sm:text-5xl md:text-6xl">
      Welcome to Communion App!
    </h1>
    
    <p className="text-lg mb-6 w-full sm:w-4/5 md:w-2/3 lg:w-1/2 text-center">
      Communion is the perfect app for keeping track of your spiritual journey.
      Whether you're tracking prayer times, attending services, or connecting with your community,
      we're here to guide you every step of the way.
    </p>
    
    <Link to='/events'>
      <button className="cssbuttons-io-button px-6 py-3 text-lg sm:text-xl">
        Get started
        <div className="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>
    </Link>
  </div>
    </div>
   </>
  )
}

export default Landing