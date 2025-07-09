import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Companies from './components/Companies'
import Invest from './components/Invest'
import Team from './components/Team'
import Asset from './components/Asset'

function App() {

  return (
    <>
      <Hero />
      <AboutUs />
      <Companies />
      <Team />
      <Invest />
      <Asset />
    </>
  )
}

export default App
