
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'


const App = () => {
  return (
    <main className='App' >
        <Routes>
          <Route path='/' element={<Layout/>}/>
          { /* public routes */ }
          <Route path='login' element={<Login/>}/>
        </Routes>
    </main>
  )
}

export default App