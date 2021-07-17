import React from "react"
import { Route } from "react-router-dom"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from "./tasks/TaskForm"
import { TaskProvider } from "./tasks/TaskProvider"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <TaskProvider>
        <Route path="/tasks">
          {/* Render the component for the user's tasks */}
          <TaskList></TaskList>
        </Route>
        <Route path="/tasks_add">
          {/* Render the component for the user's tasks */}
          <TaskForm></TaskForm>
        </Route>

      </TaskProvider>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
