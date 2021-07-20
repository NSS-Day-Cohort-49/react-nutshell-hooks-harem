// import React, { useContext, useEffect, useState } from "react"
// import { useHistory, useParams } from 'react-router-dom';
// import { UserContext } from "../Users/UserProvider"
// import { FriendContext } from "../Friends/FriendProvider"
// import { Login } from "../auth/Login"
// import "./Friends.css"

// export const FriendForm = () => {
//   const {updateFriend, getFriendById, addFriend } = useContext(FriendContext)
//   const { getUsers } = useContext(UserContext)


//   /*
//   With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
//   Define the intial state of the form inputs with useState()
//   */

//   const [friend, setFriend] = useState({
//     id: "",
//     userId: "",
//     currentUserId: 0,
//   });

//   const history = useHistory();

//   /*
//   Reach out to the world and get articles state
//   and events state on initialization.
//   */
//   useEffect(() => {
//     getArticles().then(getEvents)
//   }, [])

//   //when a field changes, update state. The return will re-render and display based on the values in state
//   //Controlled component
//   const handleControlledInputChange = (event) => {
//     /* When changing a state object or array,
//     always create a copy, make changes, and then set state.*/
//     const newFriend = { ...friend }
//     /* Friend is an object with properties.
//     Set the property to the new value
//     using object bracket notation. */
//     newFriend[event.target.id] = event.target.value
//     // update state
//     setFriend(newFriend)
//   }

//   const handleClickSaveFriend = (event) => {
//     event.preventDefault() //Prevents the browser from submitting the form

//      const userId = parseInt(friend.userId)
//      const currentUserId = parseInt(friend.currentUserId)
//      if (userId ===)

//     // if (articleId === 0 || eventId === 0) {
//     //   window.alert("Please select a location and a customer")
//     // } else {
//     //   //Invoke addAnimal passing the new animal object as an argument
//     //   //Once complete, change the url and display the animal list

//       const newFriend = {
//         id: id,
//         userId: friend.userId,
//         currentUserId: 

//       addFriend(newFriend)
//         .then(() => history.push("/friends"))
//     }


//   return (
//     <form className="friendForm">
//       <h2 className="friendForm__title">Add A Friend</h2>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="name">Friend Name:</label>
//           <input type="text" id="name" required autoFocus className="form-control" placeholder="Friend name" value={friend.name} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <button className="btn btn-primary" onClick={handleClickSaveFriend}>
//         Add Friend
//           </button>
//     </form>
//   )}}
