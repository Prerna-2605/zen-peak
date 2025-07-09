import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Companies from './components/Companies'
import Invest from './components/Invest'
import Team from './components/Team'
import Asset from './components/Asset'
import CryptoWorld from './components/CryptoWorld'

function App() {

  return (
    <>
      <Hero />
      <AboutUs />
      <Companies />
      <Team />
      <Invest />
      <Asset />
      <CryptoWorld />
    </>
  )
}

export default App
