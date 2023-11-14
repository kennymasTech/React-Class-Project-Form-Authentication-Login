
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import LinkPage from './components/LinkPage'
import Unauthorized from './components/Unauthorized'
import Home from './components/Home'
import Editor from './components/Editor'
import Admin from './components/Admin'
import Lounge from './components/Lounge'
import Missing from './components/Missing'

const App = () => {
  return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                { /* public routes */ }
                <Route index element={<Login/>}/>
                <Route path='/linkpage' element={<LinkPage/>}/>
                <Route path='/unauthorized' element={<Unauthorized/>}/>

              {/* private route */}
              <Route path='/' element={<Home/>}/>
              <Route path='editor' element={<Editor/>}/>
              <Route path='admin' element={<Admin/>}/>
              <Route path='lounge' element={<Lounge/>}/>

              {/* catch all errors */}
              <Route path='*' element={<Missing/>}/>
            </Route>
        </Routes>
  )
}

export default App