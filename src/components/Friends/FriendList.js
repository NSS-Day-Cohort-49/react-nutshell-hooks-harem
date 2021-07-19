//author:JStewart / PROVIDES??
import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { FriendContext } from "../Friends/FriendProvider"
import "./Friends.css"
import { FriendCard } from "./Friends"

//Will need to add 'searchTerms' following 'getFriends' below later

export const FriendList = () => {
    const { friends, getFriends } = useContext(FriendContext)
    // const [filteredFriends, setFiltered] = useState([])
    const history = useHistory()
    useEffect(() => {
        console.log("FriendList: Initial render before data")
        getFriends()
    }, [])

// // useEffect dependency array with dependencies - will run if dependency changes (state)
// // searchTerms will cause a change
//   useEffect(() => {
//   if (searchTerms !== "") {
//     // If the search field is not blank, display matching animals
//     const subset = users.filter(user => user.name.toLowerCase().includes(searchTerms))
//     setFiltered(subset)
//   } else {
//     // If the search field is blank, display all users
//     setFiltered(users)
//   }
// }, [searchTerms, users]) 

return (
  <>
    <h1>Friends</h1>

    <button onClick={() => history.push("/friends/create")}>
        Add as Friend
    </button>
    <div className="friends">
    {
      friends.map(friend => {
        return <FriendCard key={friend.id} friend={friend} />
      })
    }
    </div>
  </>
)
}