import React from 'react'
import Filler from "../assets/filler.jpg"
import Email from "../assets/email-logo.png"
import LinkedIn from "../assets/linkedin-logo.png"
import "../styled-components/main.css"

function MainContent() {

  return (
    <>
      <img src={Filler} width="317px" height="317px"/>

      <main>
        <h1>Marcus Ståhlbrink</h1>
        <h3>Frontend Developer</h3>
        <small className="website-text">StåhlbrinkM.website</small>

      <div className="buttons">
        <a className="email-btn"><img src={Email} />Email</a>
        <a className="linkedin-btn"><img src={LinkedIn} />LinkedIn</a>
      </div>

      <div className="about-text">
        <h2>About</h2>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn</p>

        <h2 className="interests">Interests</h2>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
      </main>

    </>
  )
}

export default MainContent
