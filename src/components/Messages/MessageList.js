// Matt Xiong
// This component is responsible for displaying all of the messages. It also allows users to create a new message which redirects them to MessageForm.

import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"

export const MessageList = () => {

    const { getMessages, messages } = useContext(MessageContext)
    const history = useHistory()
    
    // Initialization effect hook -> Go get messages data
    useEffect(()=>{
        getMessages()
    }, [])

    return (
        <>
            <h1>Messages</h1>
            <button className="messageButton" onClick={() => history.push("/messages/create")}>
                Please click here to write a new message
            </button>
            
            <div className="messages">
            {
                messages.map(message => {
                return <MessageCard key={message.id} message={message} />
                })
            }
            </div>

        </>
        )
    }