import React from 'react'
import Header from './components/header/header'
import Nav from './components/Nav/Nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'

const App = () => {
  return (
   <>
    <Header />
   
    <About />
    <Experience/>
    <Services />
    <Portfolio />
    <Contact />
   
   </>
  )
}

export default App