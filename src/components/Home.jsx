import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section>
        <h1>Home</h1>
        <br/>
        <p>You're Logged In</p>
        <br/>
        <Link to='/editor'> Go To The Editor Page</Link>
    </section>
  )
}

export default Home
