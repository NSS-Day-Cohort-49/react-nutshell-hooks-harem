import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import "./Events.css"
import { useParams, useHistory } from "react-router-dom"
//this module has the necessary details to render the details of events when you click on their titles on the main page. then, you will be able to delete an event or edit an existing event.
export const EventDetail = () => {

const { getEventById, releaseEvent } = useContext(EventContext)


	const [eventObj, setEvent] = useState({})

	const {eventId} = useParams();
	const history = useHistory();

const handleRelease = () => {
    releaseEvent(eventObj.id)
      .then(() => {
        history.push("/events")
      })
  }

  useEffect(() => {
    console.log("useEffect", eventId)
    getEventById(eventId)
    .then((response) => {
      setEvent(response)
    })
    }, [])

  return (
    <section className="event">
      <h3 className="event__name">{eventObj.eventName}</h3>
      <div className="event__location">Location: {eventObj.eventLocation}</div>
      
      <div className="event__date">Date: {eventObj.eventDate}</div>
      <button onClick={handleRelease}>Release Event</button>
      <button onClick={() => {
        history.push(`/events/edit/${eventObj.id}`)
        }}>Edit</button>

    </section>
  )
}