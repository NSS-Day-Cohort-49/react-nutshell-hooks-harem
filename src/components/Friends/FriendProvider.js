import React, { useState, createContext } from "react"

export const FriendContext = createContext()

export const FriendProvider = (props) => {
    const [friends, setFriends] = useState([])

    // searchTerms function to be referenced later!!

    const getFriends = () => {
        return fetch("http://localhost:8088/friends?_expand=user")
        .then(res => res.json())
        .then(setFriends)
    }

    const addFriend = friendObj => {
        return fetch("http://localhost:8088/friends", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friendObj)
        })
 //   .then(response => response.json())
        .then(getFriends)
    }

    const removeFriend = pruneId => {
        return fetch(`http://localhost:8088/friends/${pruneId}`, {
            method: "DELETE"
        })
        .then(getFriends)
    }

    return (
        <FriendContext.Provider value={{
            friends, getFriends, addFriend, removeFriend
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}