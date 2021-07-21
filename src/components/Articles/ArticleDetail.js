import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Article.css"
import { useParams, useHistory } from "react-router-dom"

export const ArticleDetail = () => {
  const { getArticleById, deleteArticle } = useContext(ArticleContext)

	const [article, setArticle] = useState({})

	const {articleId} = useParams();
  const history = useHistory()

  useEffect(() => {
    console.log("useEffect", articleId)
    getArticleById(articleId)
    .then((response) => {
      setArticle(response)
    })
  }, [])

  return (
    <section className="article">
      <h3 className="article__title">{article.title}</h3>
      <div className="article__synopsis">{article.synopsis}</div>
      <div className="article__timestamp">{article.timestamp}</div>
    </section>
  )
}

