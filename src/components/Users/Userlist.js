import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { FriendContext } from "./Friends/FriendProvider"
import { UserContext } from "./User/UserProvider"
import { EventContext } from "./Events/EventProvider"
import { ArticleContext } from "./Articles/ArticleProvider"
import { UserCard } from "./Users/UserCard"

export const UserList = () => {

    const history = useHistory()
    const { users, getUsers } = useContext(UserContext)
    const { friends, getFriends } = useContext(FriendContext)
    const { articles, getArticles } = useContext(ArticleContext)
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getFriends()
    })
}