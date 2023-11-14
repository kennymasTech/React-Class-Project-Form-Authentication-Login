import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <section>
        <h1>Admin Page.</h1>
        <br />
        <p>You Must Have Been Assigned An Admin Role</p>

        <div className='flexGrow'>
            <Link to='/'>Home</Link>
        </div>
    </section>
  )
}

export default Admin