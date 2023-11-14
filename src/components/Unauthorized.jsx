import React from 'react'
import { useNavigate } from 'react-router-dom'

const Unauthorized = () => {
    const navigate = useNavigate()
    const goBack = () => navigate()
  return (
    <section>
        <h1>Unauthorized ⚠️</h1>
        <br/>
        <p>You Do Not Have Access To The Requested Page.</p>

        <div className="flexGrow">
                <button>Go Back</button>
        </div>
    </section>
  )
}

export default Unauthorized