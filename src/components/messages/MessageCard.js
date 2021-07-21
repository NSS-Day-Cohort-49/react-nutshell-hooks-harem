import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { MessageContext } from "./MessageProvider"
import { useHistory } from "react-router-dom"
import "./MessageCard.css"

export const MessageCard = ({ message }) =>{
  const { deleteMessage } = useContext(MessageContext)
  const history = useHistory()
  const handleRelease = () => {
  deleteMessage(message.id)
    .then(() => {
      history.push("/messages")
})
}

return ( 
  
    <section className="message">
        <h2 className="user_name">{message.user?.name}</h2>
        <h3 className="message_name">{message.title }</h3>
        <div className="messageBody">{message.body }</div>
        <div className="message_timestamp">{message.timestamp }</div>     
        <button className="deleteButton" onClick={handleRelease}>Delete Message</button>
    </section>
    
)}