import React from "react"
import globe from "../images/globe.png"

function Header() {
    return(
      <div className="header"> 
        <img src={globe} />
        <h1>my travel journal</h1>
      </div>
    )

}

export default Header