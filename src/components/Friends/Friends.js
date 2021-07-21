//Joshua Stewart
//This module presents json data from 'friends' array within the webpage / creates functionality to remove friends from list
import { FriendContext } from "./FriendProvider"
import { useHistory } from "react-router-dom"
import React, { useContext } from "react"
import "./Friends.css"


export const FriendCard = ({ friend }) => {
  const { removeFriend } = useContext(FriendContext)
  const history = useHistory()
  const handleRemove = () => {
    removeFriend(friend.id)
    .then(() => {
      history.push("/friends")
    })
  }

  return (
    <>
      <section className="friend">
        <h2 className="friend_name">{friend.user.name}</h2>
        <h4 className="friend_email"> {friend.user.email}</h4>
        <button onClick={handleRemove}>Remove Friend</button>
      </section>
    </> 
  )}