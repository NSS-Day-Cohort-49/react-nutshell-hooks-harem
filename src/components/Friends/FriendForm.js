import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom';
import { FriendContext } from "../Friends/FriendProvider"
import { UserContext } from "../Users/UserProvider"
import "./Friends.css"

export const FriendForm = () => {
  const { addFriend } = useContext(FriendContext)
  const { users, getUsers } = useContext(UserContext)
  const history = useHistory()
  
  useEffect(() => {
    getUsers()
  }, [])

  const [friend, setFriend] = useState({
    name: ""
  });

 
  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newFriend = { ...friend }
   
    newFriend[event.target.id] = event.target.value
    // update state
    setFriend(newFriend)
  }

  const handleClickSaveFriend = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form
      
      const matchingUser = users.find((user) => {
        return user.name === friend.name
      })
      const newFriend = {
        currentUserId: parseInt(sessionStorage.getItem("nutshell_user")),
        userId: matchingUser.id
        
      }
      addFriend(newFriend)
        .then(() => history.push("/friends"))
    }

  return (
    <form className="friendForm">
      <h2 className="friendForm__title">Add A Friend</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Friend Name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Friend name" value={friend.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveFriend}>
        Save Friend
          </button>
    </form>
  )
}
