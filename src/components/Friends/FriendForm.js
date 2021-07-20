import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom';
import { ArticleContext } from "../Articles/ArticleProvider"
import { FriendContext } from "../Friends/FriendProvider"
import { EventContext } from "../Events/EventProvider"
import "./Friends.css"

export const FriendForm = () => {
  const { addFriend } = useContext(FriendContext)
  const { articles, getArticles } = useContext(ArticleContext)
  const { events, getEvents } = useContext(EventContext)

  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
  Define the intial state of the form inputs with useState()
  */

  const [friend, setFriend] = useState({
    name: "",
    email: "",
    eventId: 0,
    articleId: 0
  });

  const history = useHistory();

  /*
  Reach out to the world and get articles state
  and events state on initialization.
  */
  useEffect(() => {
    getArticles().then(getEvents)
  }, [])

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newFriend = { ...friend }
    /* Friend is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newFriend[event.target.id] = event.target.value
    // update state
    setFriend(newFriend)
  }

  const handleClickSaveFriend = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    // const articleId = parseInt(friend.articleId)
    // const eventId = parseInt(friend.eventId)

    // if (articleId === 0 || eventId === 0) {
    //   window.alert("Please select a location and a customer")
    // } else {
    //   //Invoke addAnimal passing the new animal object as an argument
    //   //Once complete, change the url and display the animal list

      const newFriend = {
        name: friend.user.name,
        email: friend.user.email,
        articleId: friend.articleId,
        eventId: friend.eventId
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