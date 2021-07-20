import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { MessageContext } from "./MessageProvider"
import { UserContext } from "../user/UserProvider"

export const MessageForm = () => {
    const { addMessage } = useContext(MessageContext)
    const { users, getUsers } = useContext(UserContext)
    const history = useHistory()

    const [message, setMessage] = useState({
            body: "",
            userId: 0,
            timeStamp: 0,
    });


    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.id] = event.target.value
        setMessage(newMessage)
    }

    const saveMessage = (event) => {
        event.preventDefault()

        const userId = parseInt(message.userId)
        
        const newMessage = {
            body: message.body,
            userId: userId,
            timeStamp: message.timeStamp,
        }
        addMessage(newMessage).then(() => history.push("/messages"))
        
    }


    return (
        <form className="messageForm">
        <h2 className="messageForm_header">New Message</h2>
        <fieldset>
            <div className="form-group">
            <label htmlFor="textBody">Please write your message</label>
            <input type="text" id="textArea" required autoFocus className="form-control" placeholder="Message body" value={message.body} onChange={handleControlledInputChange} />
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