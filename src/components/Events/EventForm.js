import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { EventContext } from "../Events/EventProvider"
import "./Events.css"

export const EventForm = () => {
    const { addEvent, updateEvent } = useContext(EventContext)

    //for edit, hold on to state of animal in this view
    const [eventObj, setEvent] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(false);

    const {eventId} = useParams();
	  const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newEvent = { ...eventObj }
      //animal is an object with properties.
      //set the property to the new value
      newEvent[event.target.id] = event.target.value
      //update state
      setEvent(newEvent)
    }

    const handleSaveEvent = (eventObj) => {
        setIsLoading(true);
        if (eventId) {
          //PUT - update
          updateEvent({
              id: eventObj.id,
              eventName: eventObj.eventName,
              eventLocation: eventObj.eventLocation,
              eventDate: eventObj.eventDate
          }, eventId)
          .then(() => history.push(`/events/detail/${eventId}`))
        } else {
          //POST - add
          addEvent({
            eventName: eventObj.eventName,
            eventLocation: eventObj.eventLocation,
            eventDate: eventObj.eventDate
          })
          .then(() => history.push("/events"))
        }
      }

    return (
      <form className="eventForm">
        <h2 className="eventForm__title">{eventId ? "Edit Event" : "Add Event" }</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="eventName">Event name: </label>
            <input type="text" id="eventName" name="name" required autoFocus className="form-control"
            placeholder="Event name"
            onChange={handleControlledInputChange}
            defaultValue={eventObj.eventName}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="eventLocation">Event Location: </label>
            <input type="text" id="eventLocation" name="location" required autoFocus className="form-control"
            placeholder="Event location"
            onChange={handleControlledInputChange}
            defaultValue={eventObj.eventLocation}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="eventDate">Event Date: </label>
            <input type="text" id="eventDate" name="date" required autoFocus className="form-control"
            placeholder="Event date"
            onChange={handleControlledInputChange}
            defaultValue={eventObj.eventDate}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveEvent(eventObj)
          }}>
        {eventId ? "Save Event" : "Add Event" }</button>
      </form>
    )
}