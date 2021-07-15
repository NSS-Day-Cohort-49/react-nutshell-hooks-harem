import React from "react"
import "./Task.css"

export const TaskCard = ({ task }) => (

    <section className="task">
    <h3 className="task__name">Task Name: {task.taskName}</h3>
      <div className="task__creator">Tasked By: {task.user.name}</div>
      <div className="task__expectedCompletionDate">Expected Completion Date: {task.expectedCompletionDate}</div>
      <div className="task__dateCompleted">Task Completion Date: {task.dateCompleted}</div>
    </section>
  )