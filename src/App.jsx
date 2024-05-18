import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Loaders from './components/loaders'
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from "./components"
import './App.css'

function App() {

  const [isload, setisload] = useState(false)
  useEffect(()=>{
    setisload(true)
   let timeout= setTimeout(()=>{
      setisload(false)

    },2000)

    return()=>clearTimeout(timeout)

  },[])
  

  return (
    <>
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      {isload?(
        <Loaders/>
      ):(
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>

        </div>

      </div>

      )}
      

    </div>
    
    </BrowserRouter>
    </>
  )
}

export default App
