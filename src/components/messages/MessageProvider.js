import React, { createContext, useState } from 'react'

export const MessageContext = createContext();

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])

    const getMessages = () => {
        return fetch("http://localhost:8088/messages?_expand=user")
        .then(res => res.json())
        .then(setMessages)
    }

    const addMessage = (message) => {
        return fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: Json.stringify(message)
    })

        .then(getMessages)
}

    const editMessage = (message) => {
        return fetch(`http://localhost:8088/messages/${message.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: json.stringify(message)
        })
            .then(getMessages)
    }

    const deleteMessage = (messageId) => {
        return fetch(`http://localhost:8088/messages/${messageId}`, {
            method: "DELETE"
        })
    
        .then(getMessages)
    }

    const getMessageById = (id) => {
        return fetch (`http://localhost:8088/messages/${id}?_expand=user`)
        .then(res => res.json())
    }

    return (
        <MessageContext.Provider value={{
            messages, getMessages, addMessage, deleteMessage, getMessageById, editMessage
        }}>

            {props.childern}
        </MessageContext.Provider>
    )
}