//Author: Ian James II
//Purpose of Module: To create a form that can be filled out by a user to submit a new task into our db.
import React, { useContext, useState, useEffect } from "react"
import { TaskContext } from "../Tasks/TaskProvider"
import "./Task.css"
import { useHistory, useParams } from 'react-router-dom';

export const TaskForm = () => {
  const { addTask, updateTask, getTaskById } = useContext(TaskContext)
  const [task, setTask] = useState({
    taskName: "",
    expectedCompletionDate: ""
  });

  const [isLoading, setIsLoading] = useState(false); //? Enables and disables the button

  const {taskId} = useParams(); //* Is an object

  const history = useHistory();

  useEffect(() => {
    {
      if (taskId){
        getTaskById(taskId)
        .then(task => {
            setTask(task)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
    }
  }, []) 
  
  console.log(task)



  const ChangeHandler = (e) => {
    const newTask = { ...task }
    newTask[e.target.id] = e.target.value
    console.log(newTask)
    setTask(newTask)
  }
  
  const SubmitHandler = () => {
    if (task.taskName === "" || task.expectedCompletionDate === "") {
      window.alert("Please enter a task and/or expected completion date")
    } else {
      setIsLoading(true); //? Disables the button - no extra clicks
      if (taskId) {
        //! PUT
        const upTaskObjs = {
          id: taskId,
          taskName: task.taskName,
          expectedCompletionDate: task.expectedCompletionDate,
          userId: sessionStorage.getItem("nutshell_user"),
          dateCompleted: Date().toLocaleString(),
          taskComplete: false
        }
        updateTask(upTaskObjs)
        .then(() => history.push(`/tasks/url/${taskId}`))
      } else {
        const newTask = {
          taskName: task.taskName,
          expectedCompletionDate: task.expectedCompletionDate,
          userId: sessionStorage.getItem("nutshell_user"),
          dateCompleted: Date().toLocaleString(),
          taskComplete: false
        }
        //! ADD
        addTask(newTask)
          .then(() => history.push("/tasks"))
          }
        }
      }
    return (
      <form className="taskForm">
        <h2 className="taskForm__title">{taskId ? "Edit The Task" : "Add A Task" }</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Task:</label>
            <input type="text" id="taskName" required autoFocus className="form-control" 
            placeholder="Enter Task" 
            onChange={ChangeHandler} 
            defaultValue={task.taskName}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">When Do You Expect To Be Finished With This Task?</label>
            <input type="text" id="expectedCompletionDate" required autoFocus className="form-control" 
            placeholder="Enter expected completion date" 
            onChange={ChangeHandler} 
            defaultValue={task.expectedCompletionDate}/>
          </div>
        </fieldset>
        <button className="btn btn-primary" 
        disabled={isLoading} //?What is this? Look it up later
        onClick={task => {
          task.preventDefault() 
          SubmitHandler()
          }}>
        {taskId ? "Update The Task" : "Add A Task" }
            </button>
      </form>
    )
  }
