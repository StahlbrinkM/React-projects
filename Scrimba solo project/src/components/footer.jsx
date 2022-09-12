import React from "react"
import "../styled-components/footer.css"
import Twitter from "../assets/twitter-logo.png"
import Facebook from "../assets/facebook-logo.png"
import Instagram from "../assets/instagram-logo.png"
import Github from "../assets/github-logo.png"


function Footer() {
  return (
  <div className="footer-div">
    <a className="btn-btn">
        <img src={Twitter} alt="twitter-logo" />
      </a>
      <a className="btn-btn">
        <img src={Facebook} alt="facebook-logo" />
      </a>
      <a className="btn-btn">
        <img src={Instagram} alt="instagram-logo" />
      </a>
      <a className="btn-btn">
        <img src={Github} alt="github-logo" />
      </a>
  </div>
  )
}

export default Footer