import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MessageContext } from "./MessageProvider"


export const MessageForm = () => {
    const { addMessage, messages, getMessages } = useContext(MessageContext)
    const history = useHistory()
    
    const [message, setMessage] = useState({
        userId: 0,
        body: "",
        timeStamp: 0,
    });
    
    useEffect(() => {
        getMessages()
    }, [])
    
    const handleControlledInputChange = (event) => {
        const newMessage = { ...messages }
        newMessage[event.target.id] = event.target.value
        setMessage(newMessage)
    }
    
    const saveMessage = (event) => {
        event.preventDefault()
            
        const userId = (message.userId)

            const newMessage = {
                body: message.body,
                userId: userId,
                timeStamp: message.timeStamp,
        }
        addMessage(newMessage)
            .then(() => history.push("/messages"))
        
    }


    return (
        <form className="messageForm">
        <h2 className="messageForm_header">New Message</h2>
        <fieldset>
            <div className="form-group">
            <label htmlFor="textBody">Please write your message below</label>
            <input type="text" id="textBody" required autoFocus className="form-control" placeholder="New message" value={message.body} onChange={handleControlledInputChange} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="timestamp">Timestamp</label>
            <input type="text" id="date" required autoFocus className="form-control" placeholder="Message timestamp" value={message.timeStamp} onChange={handleControlledInputChange} />
            </div>
        </fieldset>
        <button className="btn btn-primary" onClick={saveMessage}>
            Save Message
        </button>
        </form>
    )
    }