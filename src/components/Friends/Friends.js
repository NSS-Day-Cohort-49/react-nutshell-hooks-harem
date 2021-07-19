//author:JStewart / PROVIDES??

import React from "react"
import "./Friends.css"

export const FriendCard = ({ friend }) => (
    <>
      <section className="friend">
        <h2>{friend.user.name}</h2>
        <h4> {friend.user.email}</h4>
      </section>
    </>
  );