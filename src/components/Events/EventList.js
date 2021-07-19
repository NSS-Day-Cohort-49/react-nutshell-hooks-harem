import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import "./Events.css"
import { useHistory } from "react-router-dom"

export const EventList = () => {
  const { events, getEvents, searchTerms } = useContext(EventContext)

  // Since you are no longer ALWAYS displaying all of the events
  const [ filteredEvents, setFiltered ] = useState([])
  const history = useHistory()
console.log(filteredEvents)
  // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
      getEvents()
  }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching events
      const subset = events.filter(event => event.eventName.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all events
      setFiltered(events)
    }
  }, [searchTerms, events])

  return (
    <>
      <h1>Events</h1>

      <div className="events">
      {
        filteredEvents.map(event => {
          return <EventCard key={event.id} event={event} />
        })
      }
      </div>
      <div className="events">
      <button onClick={() => history.push("/events/create")}>
          Create New Event
      </button>
      </div>
    </>
  )
}