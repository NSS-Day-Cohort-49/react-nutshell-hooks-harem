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
import { MessageProvider } from "./Messages/MessageProvider"
import { MessageList } from "./Messages/MessageList"
import { MessageForm } from "./Messages/MessageForm"
import { MessageDetail } from "./Messages/MessageDetail"
import { TaskList } from "./Tasks/TaskList"
import { TaskProvider } from "./Tasks/TaskProvider"
import { TaskForm } from "./Tasks/TaskForm"

export const ApplicationViews = () => {
  return (
  <>
      <EventProvider>
      <ArticleProvider>
      <FriendProvider>
      <MessageProvider>
       
      <Route exact path="/articles">
        <ArticleList />
        {/* Render the component for news articles */}
      </Route>
      <Route exact path="/articles/create">
        <ArticleForm />
        </Route>
        {/* <Route exact path="/articles/detail/:articleId(\d+)">
          <ArticleDetail />
          </Route> */}

      <TaskProvider>
        <Route exact path="/tasks">
          <TaskList />
        </Route>
        <Route path="/tasks_add">
          <TaskForm></TaskForm>
        </Route>
      </TaskProvider>

      {/* <Route path="/friends">
        Render the component for list of friends */}
      <Route exact path="/friends">
        <FriendList />
      </Route>
      <Route path="/friends/create">
        <FriendForm />
      </Route>
    
      <Route exact path="/messages">
        <MessageList />
      </Route>
      <Route path="/messages/create">
        <MessageForm />
      </Route>  
      <Route path="/messages/detail/messageId(\d+)">
        <MessageDetail />
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
      
      </MessageProvider>
      </FriendProvider>
      </ArticleProvider>
      </EventProvider>

    </>
  )
}