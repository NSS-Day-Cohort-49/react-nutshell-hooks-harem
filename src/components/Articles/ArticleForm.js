import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Article.css"
import { useHistory } from 'react-router-dom';

export const ArticleForm = () => {
  const { addArticle } = useContext(ArticleContext)
  const history = useHistory()
  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
  Define the intial state of the form inputs with useState()
  */

  const [article, setArticle] = useState({
    title: "",
    synopsis: "",
    url: "",
    userId: 0,
    timestamp: 0
  })

 
  /*
  Reach out to the world and get customers state
  and locations state on initialization.
  */

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newArticle = { ...article }
    /* Article is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newArticle[event.target.id] = event.target.value
    // update state
    setArticle(newArticle)
  }

  const handleClickSaveArticle = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

      //Invoke addArticle passing the new article object as an argument
      //Once complete, change the url and display the article list

      const newArticle = {
        title: article.title,
        synopsis: article.synopsis,
        url: article.url,
        userId: currentUserId,
        timestamp: Date.now() 
      }
      addArticle(newArticle)
        .then(() => history.push("/articles"))
    }
  
  return (
    <form className="articleForm">
      <h2 className="articleForm__title">New Article</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Article title:</label>
          <input type="text" id="title" required autoFocus className="form-control" placeholder="Article title" value={article.title} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="synopsis">Article synopsis:</label>
          <input type="text" id="synopsis" required autoFocus className="form-control" placeholder="Article synopsis" value={article.synopsis} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="url">Article url:</label>
          <input type="text" id="url" required autoFocus className="form-control" placeholder="Article url" value={article.url} onChange={handleControlledInputChange} />
        </div>
      </fieldset>

      <button className="btn btn-primary" onClick={handleClickSaveArticle}>
        Save Article
          </button>
    </form>
  )
}

