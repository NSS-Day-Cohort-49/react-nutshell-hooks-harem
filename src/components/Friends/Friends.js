//author:JStewart / PROVIDES??

import React from "react"
import "./Friends.css"


export const FriendCard = ({ friend }) => (
    <>
      <section className="friend">
        <h2 className="friend_name">{friend.user.name}</h2>
        <h4 className="friend_email"> {friend.user.email}</h4>
      </section>
    </> 
  );