import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Hero from './components/Hero'
import Services from './components/Services'
import Properties from './components/Properties'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <About />
      <Services />
      <Properties />
      <Contact />
      <Footer/>
      
    </div>
  )
}

export default App
