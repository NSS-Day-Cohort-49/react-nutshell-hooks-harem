import React, { useContext, useEffect,useState } from "react"
import { useHistory } from 'react-router-dom';
import { ArticleContext } from "./ArticleProvider"
import { ArticleCard } from "./ArticleCard"
import "./Article.css"

export const ArticleList = () => {

    const { articles, getArticles } = useContext(ArticleContext)
    const [ filteredArticles, setFiltered ] = useState([])
    const history = useHistory()

    console.log(filteredArticles)

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