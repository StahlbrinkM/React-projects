import React from 'react'
import Data from '../data/Data'
import Places from "../components/places"

function Hero() {
    const cards = Data.map(item => {
      return (
          <Places
          key={item.id}
          item={item} 
          />
        )
    })
  return (
    <div>
      {cards}
    </div>
  )
}

export default Hero
