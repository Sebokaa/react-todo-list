import React from 'react'
import "./todoApp.css"
import Title from "./Title"
import Addtodo from "./addtodo"
import Todo from "./toDo"

function todoApp() {
  return (
    <div className="todoApp">
      <div className="middle">
      <Title />
      <Todo />
      <Addtodo />
      </div>
    </div>
  )
}

export default todoApp