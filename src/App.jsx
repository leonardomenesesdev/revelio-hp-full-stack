import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componentes/Home'
import Hero from './componentes/Hero'
import Header from './componentes/Header'
import Search from './componentes/Search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  console.log("app renderizado")
  return (
  <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Hero></Hero>}></Route>
        <Route path='/personagens' element={<Home/>}></Route>
      </Routes>
  </Router>
  )
}

export default App
