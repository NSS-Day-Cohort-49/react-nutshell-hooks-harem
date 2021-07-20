import React, { useContext, useState } from "react"
import { TaskContext } from "../tasks/TaskProvider"
import "./Task.css"
import { useHistory } from 'react-router-dom';
export const TaskForm = () => {
  const { addTask } = useContext(TaskContext)
  const [task, setTask] = useState({
    taskName: "",
    expectedCompletionDate: ""
  });
  const history = useHistory();
  const ChangeHandler = (e) => {
    const newTask = { ...task }
    // const newOtherTask = { ...taskOther }
    newTask[e.target.id] = e.target.value
    console.log(newTask)
    setTask(newTask)
  }
  const SubmitHandler = (e) => {
    e.preventDefault() 
    if (task.taskName === "" || task.expectedCompletionDate === "") {
      window.alert("Please enter a task and/or expected completion date")
    } else {
        const newTask = {
          taskName: task.taskName,
          expectedCompletionDate: task.expectedCompletionDate,
          userId: sessionStorage.getItem("nutshell_user"),
          dateCompleted: Date().toLocaleString(),
          taskComplete: false
        } 
        addTask(newTask)
          .then(() => history.push("/tasks"))
          }
        }
    return (
      <form className="taskForm">
        <h2 className="taskForm__title">Add A Task</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Task:</label>
            <input type="text" id="taskName" required autoFocus className="form-control" placeholder="Enter Task" value={task.name} onChange={ChangeHandler} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">When Do You Expect To Be Finished With This Task?</label>
            <input type="text" id="expectedCompletionDate" required autoFocus className="form-control" placeholder="Enter expected completion date" value={task.expectedCompletionDate} onChange={ChangeHandler} />
          </div>
        </fieldset>
        <button className="btn btn-primary" onClick={SubmitHandler}>
          Save Task
            </button>
      </form>
    )
  }