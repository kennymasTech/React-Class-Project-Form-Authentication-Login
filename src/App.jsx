
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'


const App = () => {
  return (
    <main className='App'>
        <Routes>
          { /* public routes */ }
          <Route path='/' element={<Login/>}/>
          <Route path='/linkpage' element={<LinkPage/>}/>
          <Route path='/unauthorized' element={<Unauthorized/>}/>

        </Routes>

    </main>
  )
}

export default App