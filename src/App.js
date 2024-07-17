import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function Header(){

  return(
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Countact</Link></li>
    </ul>
  )
}

function App (){

  
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path ='/contact' element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
