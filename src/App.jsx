import React from 'react'
import Header from './components/Headers/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
