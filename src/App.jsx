import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Resume from "./Components/resume/Resume"
import Skills from './Components/skills/Skills'
import Services from './Components/services/Services'
import Footer from './Components/footer/Footer'


function App() {

  return (
    <>
   <Navbar/>
   <About/>
   <Resume/>
   <Skills/>
   <Services/>
   <Footer/>
    </>
  )
}

export default App
