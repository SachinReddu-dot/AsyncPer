import React, { createContext, useContext, useEffect, useState } from 'react'
import { getEvents, setEvents } from '../utils/EventsData'

const eventContext = createContext()

export const EventContext = () =>{
    return useContext(eventContext)
}

const ContextApi = ({children}) => {

    const [data, setData] = useState('')

    useEffect(()=>{
        // setEvents()
        const events = getEvents()
        setData(events)
    }, [])

    console.log('context', data)

  return (
    <>
        <eventContext.Provider value={[data,setData]}>
            {children}
        </eventContext.Provider>
    </>
  )
}

export default ContextApi