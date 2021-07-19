import React from "react"
import { Route } from "react-router-dom"
import { ArticleProvider } from "./Articles/ArticleProvider"
import { ArticleList } from "./Articles/ArticleList"
import { ArticleForm } from "./Articles/ArticleForm"
import { ArticleDetail } from "./Articles/ArticleDetail"
import { FriendProvider } from "./Friends/FriendProvider"
import { FriendList } from "./Friends/FriendList"
import { FriendForm } from "./Friends/FriendForm"

export const ApplicationViews = () => {
  return (
  <>
      <ArticleProvider>
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
      </ArticleProvider>

      {/* <Route path="/friends">
        Render the component for list of friends */}
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