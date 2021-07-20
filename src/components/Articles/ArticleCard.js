import React, { useContext } from "react"

import "./Article.css"
import { Link } from "react-router-dom"
import { ArticleContext } from "./ArticleProvider"
import { useHistory } from "react-router-dom"

export const ArticleCard = ({ article }) =>{
  const { deleteArticle } = useContext(ArticleContext)
  const history = useHistory()
  const handleRelease = () => {
  deleteArticle(article.id)
    .then(() => {
      history.push("/articles")
})
}

return ( 
  
    <section className="article">
        <h3 className="articles">
          <a href={article.url}>
            { article.title }
          </a>
        </h3>
        <div className="article__synopsis">{article.synopsis }</div>
        <div className="article__timestamp">{article.timestamp }</div>     
        <button onClick={handleRelease}>Delete Article</button>
    </section>
    
)}
