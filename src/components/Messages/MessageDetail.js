import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useParams, useHistory } from "react-router-dom"

export const MessageDetail = () => {
    const { getMessageById, deleteMessage } = useContext(MessageContext)
    const [message, setMessage] = useState({})
    const history = useHistory()
    const {messageId} = useParams();
    
    const deleteMessages = () => {
        deleteMessage(message.id)
            .then(() => {
                history.push("/messages")
            })
    }
    
    useEffect(() => {
        console.log("useEffect", messageId)
        getMessageById(messageId)
        .then((response) => {
        setMessage(response)
        })
    }, [])
    

    return (
        <section className="message">
            <h3 className="message_name">
          {message.title}
        </h3>
        <h3 className="message__body">{message.body}</h3>
        <div className="message__user">user: {message.user?.name}</div>
        <div className="message_timeStamp">{message.timeStamp }</div>
        <button onClick={deleteMessages}>Delete Message</button>
        </section>
    )
    }