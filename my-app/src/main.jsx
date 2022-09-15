import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './components/Hero'
import Header from "./components/Header.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Hero />
  </>
)
