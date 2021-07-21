import React from "react"
import "./Events.css"
import { Link } from "react-router-dom"
//this renders the events one by one
export const EventCard = ({ event }) => (
    <section className="event">
        <h3 className="event__name">
          <Link to={`/events/detail/${event.id}`}>
            { event.eventName }
          </Link>
        </h3>
        <div className="event__location">{ event.eventLocation }</div>
        <div className="event__date">{ event.eventDate }</div>
    </section>
)