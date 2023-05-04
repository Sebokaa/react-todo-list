import React from 'react'
import "./addToDo.css";

function addtodo() {
  return (
    <div class = "addToDo-container">
        <div id="footer">
        <input id="inputField" placeholder = "Add a task" type="text" />
        <button id="addToDo">+</button>
      </div>
    </div>
  )
}

export default addtodo