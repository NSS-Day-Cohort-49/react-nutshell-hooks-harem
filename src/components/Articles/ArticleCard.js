import React from "react"
import "./Article.css"
import { Link } from "react-router-dom"

export const ArticleCard = ({ article }) => (
    <section className="articles">
        <h3 className="article">
          <Link to={`/article/detail/${article.id}`}>
            { article.title }
          </Link>
        </h3>
        <div className="article__synopsis">{article.synopsis }</div>
        <div className="article__url">{ article.url }</div>
        <div className="article__timestamp">{article.timestamp }</div>    
    </section>
)