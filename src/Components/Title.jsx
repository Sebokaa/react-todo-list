import React, { useState, useEffect } from 'react'
import "./title.css"

function Title() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    console.log("Hello")
    return function cleanUp() {
      clearInterval(timer);
    }
  })
  return (
    <div class="title-container">
        <div class="title">
            <h1>To Do List</h1>
            <h5>Time : {date.toLocaleTimeString()}</h5>
            <h5>Date : {date.toLocaleDateString()}</h5>
          </div>
    </div>
  )
}

export default Title