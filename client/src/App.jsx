import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav_section from './components/Nav_section'
import './wishlist.css'
import People_form from './components/People_form'
import Tester from './components/Tester'


function App() {


  return (
    <>
    <div className='page'>
      <Nav_section/>
      <Routes>
        <Route path='/' element={<People_form/>}/>
        <Route path='/list/:listId' element={<Tester/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
