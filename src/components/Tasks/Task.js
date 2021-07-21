//Author: Ian James II
//Purpose of Module: To make a card that will show the different properties coming from tasks.
import React from "react"
import "./Task.css"
import { Link } from "react-router-dom"

export const TaskCard = ({ task }) => (
    <section className="task">
    <h3 className="task__name">
      Task Name: <Link to={`/tasks/url/${task.id}`}>{task.taskName}</Link>
      </h3>
      <div className="task__creator">tasked By: {task.user.name}</div>
      <div className="task__expectedCompletionDate">Expected Completion Date: {task.expectedCompletionDate}</div>
      <div className="task__dateCompleted">task Completion Date: {task.dateCompleted}</div>
    </section>
  )