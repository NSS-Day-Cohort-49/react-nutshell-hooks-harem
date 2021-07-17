import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Article.css"
import { useParams } from "react-router-dom"

export const ArticleDetail = () => {
  const { getArticleById } = useContext(ArticleContext)

	const [article, setArticle] = useState({})

	const {articleId} = useParams();

  useEffect(() => {
    console.log("useEffect", articleId)
    getArticleById(articleId)
    .then((response) => {
      setArticle(response)
    })
  }, [])

  return (
    <section className="article">
      <h3 className="article__name">{article.name}</h3>
      <div className="article__breed">{article.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="article__location">Location: {article.location?.name}</div>
      <div className="article__owner">Customer: {article.customer?.name}</div>
    </section>
  )
}

// import { addArticle } from "./ArticleProvider.js"

// const applicationElement = document.querySelector(".nutshell")


// //click event and function for displaying initially hidden new post form

// applicationElement.addEventListener("click", (event) => {
//    if (event.target.id === "miniMode") {
//       showArticleDiv()
//    } 
// })

// const showArticleDiv = () => {
//    document.getElementById("miniMode").style.display = "none"
//    document.getElementById("articleAdd").style.display = "block"
// }


// //click event and function for hiding post form

// applicationElement.addEventListener("click", (event) => {
//    if (event.target.id === "addArticle__cancel") {
//       showMiniMode()
//    }
// })

// const showMiniMode = () => {
//    document.getElementById("miniMode").style.display = "block"
//    document.getElementById("newArticle").style.display = "none"
// }


// //click event for posting new post to api

// applicationElement.addEventListener(
//     "click", event => {
//         if (event.target.id === "addArticle__submit") {
//             const articleTitle = document.getElementById("articleTitle").value
//             const articleURL = document.getElementById("articleURL").value
//             const articleDescription = document.getElementById("articleDescription").value
//             const articleUserId = parseInt(localStorage.getItem('gg_user'))

//             const articleObj = {
//                userId: articleUserId,
//                title: articleTitle,
//                url: articleURL,
//                description: articleDescription,
//                timestamp: Date.now()
//             }

//             addNewArticle(articleObj)

//             console.log(`New article sent to api: ${articleObj}`)
//         }
//     }
// )

// export const addArticleForm = () => {

//    let addArticleHTML = `<div id="addArticle">`

//    addArticleHTML += `
//       <div class="miniMode" id="miniMode">
//          Have an article to post?
//       </div>
//       <div id="newArticle" class="newArticle">
//          <div>
//             <input value="" id="articleTitle" name="articleTitle" class="newArticle__input" type="text" placeholder="Title">
//          </div>
//          <div>
//             <input value="" id="articleURL" name="articleURL" class="newArticle__input" type="text" placeholder="URL of article">
//          </div>
//          <textarea id="articleDescription" name="articleDescription" class="newArticle__input newArticle__description" placeholder="Story behind your atricle..."></textarea>
//          <button id="newArticle__submit">Save</button>
//          <button id="newArticle__cancel">Cancel</button>
//       </div>
//    `

//    addArticleHTML += `</div>`

//    return addArticleHTML
// }