import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Projects, { ProjectContainerImageLeft, ProjectContainerImageRight } from './Components/Projects/Projects'

function App(){

  return (
    <>
    <BrowserRouter>
      <Nav />
      <Projects />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App