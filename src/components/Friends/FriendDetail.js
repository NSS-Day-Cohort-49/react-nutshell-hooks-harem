import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./Users/UserProvider"
import { FriendContext } from "./Friends/FriendProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Friends.css"

export const FriendDetail = () => {
    const { getUserById } = useContext(UserContext)
    const { removeFriend } = useContext(FriendContext)
//TODO:create removeFriend on FriendProvider
    const [friend, setFriend] = useState({})

	const {friendId} = useParams();
    const history = useHistory()

  useEffect(() => {
    console.log("useEffect", friendId)
    getUserById(friendId)
    .then((response) => {
      setFriend(response)
    })
    }, [])

    const handleRemove = () => {
        removeFriend(friend.id)
        .then(() => {
            history.push("/friends")
        })
    }

  return (
    <section className="friend">
      <h3 className="friend__name">{friend.user?.name}</h3>
      <div className="friend__email">{friend.user?.email}</div>
      <button onClick={handleRemove}>Remove Friend</button>
    </section>
  )
}