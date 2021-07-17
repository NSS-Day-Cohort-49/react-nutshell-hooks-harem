import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { ArticleContext } from "./ArticleProvider"
import { ArticleCard } from "./ArticleCard"
import "./Article.css"

export const ArticleList = () => {

    const { getArticles, articles } = useContext(ArticleContext)
    const history = useHistory()

    // Initialization effect hook -> Go get article data
    useEffect(()=>{
        getArticles()
    }, [])

    return (
      <>
        <h1>Articles</h1>

        <button onClick={() => history.push("/articles/create")}>
          Add Article
        </button>
        <div className="articles">
          {
            articles.map(article => {
              return <ArticleCard key={article.id} article={article} />
            })
          }
        </div>
      </>
    )
}


// import React, { useContext, useEffect } from "react"
// import { useHistory } from 'react-router-dom';
// import { ArticleContext } from "./ArticleProvider"
// // import { Article } from "./Article"
// import "./Article.css"
// // export const Articles = () => {
// //     const articles = getArticle().sort((a, b) => {
// //         return b.id - a.id;
// //     });

// export const ArticleList = () => {

//     const { deleteArticle, getArticle, getUsers  } = useContext(ArticleContext)
//     const history = useHistory()

//     // Initialization effect hook -> Go get article data
//     useEffect(()=>{
//         getArticle()
//     }, [])

// const applicationElement = document.querySelector(".nutshell");


// applicationElement.addEventListener("click", (click) => {
//     if (click.target.id.startsWith("Article--")) {
//         const [, ArticleId] = click.target.id.split("--");
//         deleteArticle(parseInt(ArticleId));
//     }
// });


    
//     const users = getUsers()
//     const currentUser = parseInt(localStorage.getItem("gg_user"));
//     let foundUser

//     let postHTML = `<div id="articleList" class="articleList">`

//     postHTML += `${articles
//         .map((article) => {
//         foundUser = users.find((user) => user.id === article.userId)
//             return `
//                 <section id="userArticle--${foundUser.id}" class="article">
//                     <header>
//                         <h2 class="article__title">${article.title}</h2>
//                     </header>
//                     <img class="article__image" src="${aricle.url}">
//                     <div class="article__description">
//                         ${article.description}
//                     </div>
//                     <div class="article__tagline">
//                         Posted by
//                         <a href="#" class="profileLink" id="userId">
//                         ${foundUser.name}
//                         </a>
//                         on ${new Date(article.timestamp).toLocaleString()}
//                     </div>
//                     <div class="post__actions">
//                         <div>
//                             <img id="favoriteArticle--4" class="actionIcon" src="/images/favorite-star-blank.svg">
//                             ${currentUser !==  article.userId ? `<br>` : `<img id="article--${article.id}" class="actionIcon" src="/images/block.svg" alt>`}
//                         </div>
//                     </div>
//                 </section>
//             `
//     })

// //     .join("")}`

// //     articleHTML += `</div>`

// //   return articleHTML;
// //}