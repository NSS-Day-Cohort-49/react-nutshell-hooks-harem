import React from "react"
import { Route } from "react-router-dom"
import { FriendProvider } from "./Friends/FriendProvider"
import { FriendList } from "./Friends/FriendList"
import { FriendForm } from "./Friends/FriendForm"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
    <FriendProvider>
      <Route exact path="/friends">
        <FriendList />
      </Route>
      <Route path="/friends/create">
        <FriendForm />
      </Route>
    </FriendProvider>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
