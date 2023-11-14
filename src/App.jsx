
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'


const App = () => {
  return (
    <main className='App' >
        <Routes>
          <Route path='/' element={<Layout/>}/>
          
        </Routes>
    </main>
  )
}

export default App