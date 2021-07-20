import React from "react"
import { Route } from "react-router-dom"
import { ArticleProvider } from "./Articles/ArticleProvider"
import { ArticleList } from "./Articles/ArticleList"
import { ArticleForm } from "./Articles/ArticleForm"
import { ArticleDetail } from "./Articles/ArticleDetail"
import { EventList } from "./Events/EventList"
import { EventProvider } from "./Events/EventProvider"
import { EventForm } from "./Events/EventForm"
import { EventDetail } from "./Events/EventDetail"
import { FriendProvider } from "./Friends/FriendProvider"
import { FriendList } from "./Friends/FriendList"
import { FriendForm } from "./Friends/FriendForm"

export const ApplicationViews = () => {
  return (
  <>
      <EventProvider>
      <ArticleProvider>
      <FriendProvider>
       
      <Route exact path="/">
        <ArticleList />
        {/* Render the component for news articles */}
      </Route>
      <Route exact path="articles/create">
        <ArticleForm />
        </Route>
        <Route exact path="/articles/detail/:articleId(\d+)">
          <ArticleDetail />
          </Route>

      {/* <Route path="/friends">
        Render the component for list of friends */}
      <Route exact path="/friends">
        <FriendList />
      </Route>
      <Route path="/friends/create">
        <FriendForm />
      </Route>
    
      <Route path="/messages">
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
      </FriendProvider>
      </ArticleProvider>
      </EventProvider>

    </>
  )
}