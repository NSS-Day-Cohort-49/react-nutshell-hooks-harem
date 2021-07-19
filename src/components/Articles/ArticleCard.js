import React from "react"
import "./Article.css"
import { Link } from "react-router-dom"

export const ArticleCard = ({ article }) => (
    <section className="articles">
        <h3 className="article">
          <Link to={`/article/url/${article.id}`}>
            { article.title }
          </Link>
        </h3>
        {/* <div className="article__breed">{ article.breed }</div> */}
    </section>
)