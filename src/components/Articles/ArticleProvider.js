import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ArticleContext = createContext()

// This component establishes what data can be used.
export const ArticleProvider = (props) => {
    const [articles, setArticles] = useState([])

    const getArticles = () => {
        return fetch("http://localhost:8088/articles?_expand=title")
        .then(res => res.json())
        .then(setArticles)
    }

    const getArticleById = (id) => {
        return fetch(`http://localhost:8088/articles/${id}?_expand=title`)
        .then(res => res.json()) // note we don't set anything on state here. Why?
    }

    const addArticle = articleObj => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleObj)
        })
        .then(getArticles)
    }

    /*
        You return a context provider which has the
        `articles` state, `getArticles` function,
        and the `addArticle` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ArticleContext.Provider value={{
            articles, getArticles, addArticle, getArticleById
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}
