// Matt Xiong
// This component is responsible for allowing users to create a new message.

import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { MessageContext } from "./MessageProvider"


export const MessageForm = () => {
    const { addMessage } = useContext(MessageContext)
    const history = useHistory()
    // const [isLoading, setIsLoading] = useState(true)

    const [message, setMessage] = useState({
        title: "",
        body: "",
        timestamp: 0
    });
    
    // useEffect(() => {
    //     setIsLoading(false)
    //     getMessages()
    // }, [])
    
    const handleInputMessage = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.id] = event.target.value
        setMessage(newMessage)
    }
    
    const handleSaveMessage = (event) => {
        event.preventDefault()

            const newMessage = {
                title: message.title,
                body: message.body,
                userId: parseInt(sessionStorage.getItem("nutshell_user")),
                timestamp: message.timestamp
        }
        addMessage(newMessage)
            .then(() => history.push("/messages"))
        
    }


    return (
        <form className="messageForm">
        <h2 className="messageForm_header">New Message</h2>
        <fieldset>
            <div className="form-group">
            <label htmlFor="textTitle">Please write the title of your message below: </label>
            <input type="text" id="title" required autoFocus className="form-control" placeholder="Title" value={message.title} onChange={handleInputMessage} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="textBody">Please write your message below: </label>
            <input type="text" id="body" required autoFocus className="form-control" placeholder="New message:" value={message.body} onChange={handleInputMessage} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="timestamp">Timestamp: </label>
            <input type="text" id="timestamp" required autoFocus className="form-control" placeholder="Message timestamp:" value={message.timeStamp} onChange={handleInputMessage} />
            </div>
        </fieldset>
        <button className="btn btn-primary" onClick={handleSaveMessage}>
            Save Message
        </button>
        </form>
    )
    }