
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'


const App = () => {
  return (
        <Routes>
          <Route path='/' element={<Layout/>}/>
          { /* public routes */ }
          <Route path='login' element={<Login/>}/>
          <Route path='linkpage' element={<LinkPage/>}/>
          <Route path='unauthorized' element={<Unauthorized/>}/>
          <Route/>
        </Routes>
  )
}

export default App