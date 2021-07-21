import React, { useContext, useEffect, useState } from "react"
import { TaskContext } from "./TaskProvider"
import "./Task.css"
import { useParams, useHistory } from "react-router-dom"

export const TaskDetail = () => {
  const { getTaskById, deleteTask } = useContext(TaskContext)

	const [task, setTask] = useState({})

	const {taskId} = useParams();
    const history = useHistory();

    const deleteTaskInvoked = () => {
        deleteTask(task.id)
          .then(() => {
            history.push("/tasks")
          })
      }

  useEffect(() => {
    console.log("useEffect", taskId)
    getTaskById(taskId)
    .then((response) => {
      setTask(response)
    })
  }, [])

  return (
    <section className="task">
      <h3 className="task__taskName">{task.taskName}</h3>
      <div className="task__creator">Tasked By: {task.user?.name}</div>
      <div className="task__expectedCompletionDate">Expected Completion Date: {task.expectedCompletionDate}</div>
      <div className="task__dateCompleted">Date Completed: {task.dateCompleted}</div>
      <button className="delete_button" onClick={deleteTaskInvoked}>Delete Task</button>
      <button className="clickMe" onClick={() => {
        history.push(`/tasks/edit/${task.id}`)
        }}>Edit</button>

    </section>
  )
}