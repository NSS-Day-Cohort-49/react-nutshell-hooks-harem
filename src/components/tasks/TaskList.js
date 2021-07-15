import React, { useContext, useEffect } from "react";
import { TaskContext } from "./TaskProvider";
import { TaskCard } from "./TaskCard";
import { useHistory } from 'react-router-dom';
import "./Task.css";

export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext)
    const history = useHistory()

    useEffect(() => {
        console.log("TaskList: UseEffect is being called properly in the browser")
        getTasks()
          .then(getTasks)
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
            return (
              <TaskCard key={task.id} task={task} />
            );
          })}
        </div>
      </>
    );
}