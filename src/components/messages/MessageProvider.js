// Matt Xiong. 
// This component provides us with all the proper HTTP requests that can be used to send or recieve date from the server.
// It also provides data to other components if necessary.

import React, { useState, createContext } from "react";

export const MessageContext = createContext();
// The context is imported and used by individual components that need data.

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])
    // Messages is the function of the current state. 
    // setMessages is the function that allows us to update the current state.
    

    // Fetch calls are promised based. Since they are promised based, that allows us to use .then.
    // res => res.json() is converting the response into json. Since it is returning another promise, we need to use another .then.
    // .then(setMessages) updates to the current state.
    const getMessages = () => {
        return fetch("http://localhost:8088/messages?_expand=user")
        .then(res => res.json())
        .then(setMessages)
    }

    // Fetch calls are promised based. Since they are promised based, that allows us to use .then.
    // res => res.json() is converting the response into json. Since this function is returning another promise, we need to use another .then.
    // The "POST" method allows us to create a new message at the URL it is fetching.
    // We have to tell the fetch call we are passing JSON data. Since (messageObj) is Javascript, .stringify allows us to convert that into JSON.
    // .then(getMessages) updates to the current state.
    const addMessage = (messageObj) => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObj)
        })
        .then(getMessages)
    }
    
    // Fetch calls are promised based. Since they are promised based, that allows us to use .then.
    // For this fetch call, we have to use template literals (``) so that we can retrive the certain message it is calling for by id.
    // res => res.json() is converting the response into json. Since this function is returning another promise, we need to use another .then.
    // The "PUT" method allows us to update messages because it is an existing source.
    // We have to tell the fetch call we are passing JSON data. Since (message) is Javascript, .stringify allows us to convert that into JSON.
    // .then(getMessages) updates to the current state.
    const editMessage = (message) => {
        return fetch(`http://localhost:8088/messages/${message.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(message)
        })
          .then(getMessages)
      }

    // 
    // We need to pass (id) because we are fetching a unique message by the id.  
    const getMessageById = (id) => {
        return fetch(`http://localhost:8088/messages/${id}?_expand=user`)
            .then(res => res.json())
    }

    // Fetch calls are promised based. Since they are promised based, that allows us to use .then.
    // The "DELETE" method allows us to delete new message at the URL it is fetching.
    // After the message has been deleted, the .then(getMessages) updates to the current state.
    const deleteMessage = (messageId) => {
        return fetch(`http://localhost:8088/messages/${messageId}`, {
            method: "DELETE"
        })
            .then(getMessages)
    } 


    // This return provides us with our provider component that passes in a value(object).
    return (
        <MessageContext.Provider value={{
            messages, getMessages, addMessage, deleteMessage, getMessageById, editMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    );
};