import React, { useContext, useState } from 'react'
import Card from '../components/Card'
import { EventContext } from '../context/ContextApi';
import AddEvent from '../components/AddEvent';

const Events = () => {

  const [data, setData] = EventContext();

  const [toggle, setToggle] = useState(false)

  const [search, setSearch] = useState('')

  return (
    <>
        <div className="w-full relative px-5 sm:px-10 py-5 mt-20">
  <h1 className="text-3xl sm:text-5xl font-semibold mb-4">All Events</h1>
  
  <input 
    onChange={(e) => setSearch(e.target.value)} 
    value={search} 
    placeholder="Search" 
    className="w-full sm:w-1/2 my-5 rounded-lg bg-zinc-800 outline-none p-3"
    type="text" 
  />
  
  <div className='fixed bottom-10 right-14 max-sm:right-7 z-40'>
    <button class="Btn" onClick={()=> setToggle(!toggle)}>
      
      <div class="sign">+</div>
      
      <div class="text">Add Event</div>
    </button>
  </div>
  
  <div 
    className={`${toggle ? "scale-100 opacity-100" : "scale-0 opacity-0"} transition-all duration-800 w-full fixed z-100 top-0 left-0 backdrop-blur-sm`}
  >
    <button 
      onClick={() => setToggle(!toggle)} 
      className="absolute max-sm:right-5 right-[28%] max-sm:top-32 top-5 py-2 px-4 rounded-full bg-black font-medium"
    >
      X
    </button>
    <AddEvent />
  </div>

  <div className="flex flex-wrap items-center gap-7 w-full py-5">
    {data ? (
      data.filter((item) => 
        search ? item.category.toLowerCase().includes(search.toLowerCase()) : item
      ).map((data, idx) => (
        <Card key={idx} data={data} />
      ))
    ) : (
      "NO DATA"
    )}
  </div>
        </div>
    </>
  )
}

export default Events