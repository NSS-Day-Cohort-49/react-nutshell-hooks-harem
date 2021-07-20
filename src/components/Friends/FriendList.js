//author:JStewart / PROVIDES??
import { useHistory } from 'react-router-dom'
import React, { useContext, useEffect } from "react"
import { FriendContext } from "../Friends/FriendProvider"
import { FriendCard } from "./Friends"
// import { UserContext } from "./Users/UserProvider"
import "./Friends.css"



export const FriendList = () => {
    const { friends, getFriends } = useContext(FriendContext)
    // const { users, getUsers} = useContext(UserContext)
    // const [ filteredFriends, setFiltered ] = useState([])
    const history = useHistory()
    
   
    useEffect(() => {
        
        getFriends()
    }, [])

    // useEffect(() => {
    //   if (searchTerms !== "") {
    //     const subset = friends.filter(friend => friend.name.toLowerCase().includes (searchTerms))
    //     setFiltered(subset)
    //   } else {
    //     setFiltered(friends)
    //   }
    //  }, [searchTerms, friends])

return (
  <>
    <h1>Friends</h1>
    <button onClick={() => history.push("/friends/create")}> Add Friend 
    </button>
    <div className="friends">
    {console.log("FriendList: Render", friends)}
    {
      friends.map(friend => {
        // const user = users.find(u => u.id === userId)
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