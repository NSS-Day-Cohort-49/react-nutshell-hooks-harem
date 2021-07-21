//Joshua Stewart
//This module populates 'Friends' page with list of friend objects (cards) and functionality for "Add Friend" button
import { useHistory } from 'react-router-dom'
import React, { useContext, useEffect } from "react"
import { FriendContext } from "../Friends/FriendProvider"
import { FriendCard } from "./Friends"
import "./Friends.css"



export const FriendList = () => {
    const { friends, getFriends } = useContext(FriendContext)
    const history = useHistory()
    
   
    useEffect(() => {
        
        getFriends()
    }, [])


return (
  <>
    <h1>Friends</h1>
    <button onClick={() => history.push("/friends/create")}> Add Friend 
    </button>
    <div className="friends">
    {console.log("FriendList: Render", friends)}
    {
      friends.map(friend => {
       
        return <FriendCard 
          key={friend.id} 
          friend={friend}
          />
      })
    }
    </div>
  </>
)
}