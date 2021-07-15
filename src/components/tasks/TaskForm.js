import React, { useContext, useEffect, useState } from "react"
import { TaskContext } from "../tasks/TaskProvider"
import "./Task.css"
import { useHistory } from 'react-router-dom';

export const TaskForm = () => {
  const { addTask } = useContext(TaskContext)

  const [task, setTask] = useState({
    taskName: "",
    expectedCompletionDate: "",
  });

  const history = useHistory();


  const ChangeHandler = (event) => {

    const newTask = { ...task }

    newTask[event.target.id] = event.target.value
    setTask(newTask)
  }

  const SubmitHandler = (event) => {
    event.preventDefault() 

    if (taskName === "" || expectedCompletionDate === "") {
      window.alert("Please enter a task and/or expected completion date")
    } else {

      const newTask = {
        taskName: task.taskName,
        expectedCompletionDate: task.expectedCompletionDate,
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
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Enter Task" value={task.name} onChange={ChangeHandler} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">When Do You Expect This Task To Be Finished With This Task?</label>
          <input type="text" id="breed" required autoFocus className="form-control" placeholder="Animal breed" value={task.breed} onChange={ChangeHandler} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select name="locationId" id="locationId" className="form-control" value={task.locationId} onChange={ChangeHandler}>
            <option value="0">Select a location</option>
            {locations.map(l => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerId">Customer: </label>
          <select name="customer" id="customerId" className="form-control" value={task.customerId} onChange={ChangeHandler}>
            <option value="0">Select a customer</option>
            {customers.map(c => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={SubmitHandler}>
        Save Animal
          </button>
    </form>
  )
}
