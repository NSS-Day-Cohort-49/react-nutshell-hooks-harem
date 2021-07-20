import React, { useContext, useEffect, useState } from "react"
import { FriendContext } from "./Friends/FriendProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Friends.css"

export const FriendDetail = () => {
    const { getFriendById, removeFriend } = useContext(FriendContext)

    const [friend, setFriend] = useState({})

	const {friendId} = useParams();
    const history = useHistory()

    const handleRemove = () => {
      removeFriend(friendId)
      .then(() =>{
            history.push("/friends")
      })
    }

  useEffect(() => {
    console.log("useEffect", friendId)
    getFriendById(friendId)
    .then((response) => {
      setFriend(response)
    })
    }, [])

  return (
    <section className="friend">
      <h3 className="friend__name">{friend.user?.name}</h3>
      <div className="friend__email">{friend.user?.email}</div>
      <button onClick={handleRemove}>Remove Friend</button>
    </section>
  )
}