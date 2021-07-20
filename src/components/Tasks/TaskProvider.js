//Author: Ian James II
//Purpose of Module: To make a component that will render information from the db.
import React, { useState, createContext } from "react"
// The context is imported and used by individual components that need data
export const TaskContext = createContext()
// This component establishes what data can be used.
export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])
    const getTasks = () => {
        return fetch("http://localhost:8088/tasks?_expand=user")
        .then(res => res.json())
        .then(setTasks)
    }
    const addTask = taskObj => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
        .then(getTasks)
    }

    const getTaskById = (id) => {
        return fetch(`http://localhost:8088/tasks/${id}/?_expand=user`)
        .then(res => res.json()) 
    }

    const deleteTask = id => {
        return fetch(`http://localhost:8088/tasks/${id}`, {
          method: "DELETE"
        })
          .then(getTasks)
    }

    const updateTask = task => {
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(task)
        })
          .then(getTasks)
      }
      

    return (
        <TaskContext.Provider value={{
            tasks, getTasks, addTask, getTaskById, deleteTask, updateTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )

}