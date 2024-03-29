import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Home />} />
    </Routes>
    <Footer />

    </>
  )
}

export default App