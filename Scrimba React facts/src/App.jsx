import React from 'react'
import "./app.css"


function App() {
  return (
    <div className="container">
      <nav className="nav-bar">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="30px"/>
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
      <main className="main-content">
        <h1 className="main-title">Fun facts about React</h1>
        <ul className="list">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </div>
  )
}

export default App
