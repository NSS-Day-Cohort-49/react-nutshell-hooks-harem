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