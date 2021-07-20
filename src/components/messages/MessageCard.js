import React from "react"
import { Link } from "react-router-dom"

export const MessageCard = ({message}) => (
    <section className= "message">
        <h3 className="message_name"> 
        <Link to={`/messages/${message.id}`}>
            { message.body }
        </Link>
        </h3>
        <div className="message_timestamp"> { message.timestamp }</div>
    </section>
)