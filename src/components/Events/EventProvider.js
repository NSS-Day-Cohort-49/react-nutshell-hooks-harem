import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const EventContext = createContext()

// This component establishes what data can be used.
export const EventProvider = (props) => {
    const [events, setEvents] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getEvents = () => {
        return fetch("http://localhost:8088/events")
        .then(res => res.json())
        .then(setEvents)
    }
    const addEvent = eventObj => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
        .then(getEvents)
    }
    const releaseEvent = eventId => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
          method: "DELETE"
        })
          .then(getEvents)
    }
    const updateEvent = (eventObj, eventId) => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(eventObj)
        })
          .then(getEvents)
      }
      
    const getEventById = (id) => {
        return fetch(`http://localhost:8088/events/${id}`)
            .then(res => res.json())
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
        return (
            <EventContext.Provider value={
              {
                events, addEvent, getEvents, getEventById, searchTerms, updateEvent, releaseEvent, setSearchTerms
              }
            }>
              {props.children}
            </EventContext.Provider>
          )
        
}