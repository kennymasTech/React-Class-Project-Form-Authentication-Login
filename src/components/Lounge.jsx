import React from 'react'
import { Link } from 'react-router-dom'

const Lounge = () => {
  return (
    <section>
        <h1> The Lounge</h1>
        <br />
        <p>Admin And The Editor Can Hang Out Here</p>

        <div className='flexGrow'>
            <Link to='/'>Home</Link>
        </div>
    </section>
  )
}

export default Lounge