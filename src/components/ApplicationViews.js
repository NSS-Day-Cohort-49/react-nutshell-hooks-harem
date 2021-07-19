import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./Events/EventList"
import { EventProvider } from "./Events/EventProvider"
import { EventForm } from "./Events/EventForm"
import { EventDetail } from "./Events/EventDetail"

export const ApplicationViews = () => {
  return (
    <>
      <EventProvider>
      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route exact path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route exact path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route exact path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route exact path="/events">
        <EventList />
      </Route>
      <Route exact path="/events/create">
        <EventForm />
      </Route>
      <Route path="/events/edit/:eventId(\d+)">
        <EventForm />
      </Route>
      <Route exact path="/events/detail/:eventId(\d+)">
        <EventDetail />
      </Route>
      </EventProvider>
    </>
  )
}
