import React, { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getUsers = () => {
        return fetch("http://localhost:8088/users?_expand=friends")
        .then(res => res.json())
        .then(setUsers)
    }

    const addUser = userObj => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        .then(getUsers)
    }

    const getUserById = (id) => {
        return fetch(`http://localhost:8088/users/${id}?_expand=users`)
        .then(res => res.json())
    }

    return (
        <UserContext.Provider value ={{
            users, getUsers, addUser, getUserById, searchTerms, setSearchTerms
        }}>
            {props.children}
        </UserContext.Provider>
    )
}