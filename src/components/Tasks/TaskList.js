//Author: Ian James II
//Purpose of Module: To show all of the tasks as a list in the browser that are stored in the db.
import React, { useContext, useEffect } from "react";
import { TaskContext } from "./TaskProvider";
import { TaskCard } from "./Task";
import { useHistory } from 'react-router-dom';
import "./Task.css";


export const TaskList = () => {
    const { tasks, getTasks,  } = useContext(TaskContext)
    const history = useHistory()
    useEffect(() => {
        console.log("TaskList: UseEffect is being called properly in the browser")
        getTasks()
    }, [])
    return (
  <>
        <h2>List of Tasks</h2>
        <button
          className="clickMe"
          onClick={() => {
            history.push("/tasks_add");
          }}
        >
          Add A Task
        </button>
        <div className="tasks">
          {tasks.map((task) => {
            return (<TaskCard key={task.id} task={task} />
          );
        })}
        </div>
  </>
    );
  }