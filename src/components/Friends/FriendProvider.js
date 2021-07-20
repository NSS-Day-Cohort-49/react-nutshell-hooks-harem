import React, { useState, createContext } from "react"

export const FriendContext = createContext()

export const FriendProvider = (props) => {
    const [friends, setFriends] = useState([])
    // const [ searchTerms, setSearchTerms ] = useState("")

    // searchTerms function to be referenced later?

    const getFriends = () => {
        return fetch("http://localhost:8088/friends?_expand=user")
          .then((res) => res.json())
          .then(setFriends);
    }


    const addFriend = friendObj => {
        return fetch("http://localhost:8088/friends?_expand=user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friendObj)
        })
        .then(getFriends)
    }

    const getFriendById = (id) => {
        return fetch(`http://localhost:8088/friends/${id}?_expand=users`)
        .then(res => res.json())
    }

    const updateFriend = friend => {
        return fetch (`http://localhost:8088/friends/${friend.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(friend)
        })
        .then(getFriends)
    }

    const removeFriend = friendId => {
        return fetch(`http://localhost:8088/friends/${friendId}`, {
            method: "DELETE"
        })
        .then(getFriends)
    }

    return (
        <FriendContext.Provider value={{
            friends, getFriends, addFriend, getFriendById, updateFriend, removeFriend
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}