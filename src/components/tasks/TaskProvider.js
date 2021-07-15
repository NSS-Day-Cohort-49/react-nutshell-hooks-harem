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
        .then(setTasks)
    }

    /*
        You return a context provider which has the
        `tasks` state, `getTasks` function,
        and the `addTask` function as keys. This
        allows any child elements to access them.
    */
    return (
        <TaskContext.Provider value={{
            tasks, getTasks, addTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
