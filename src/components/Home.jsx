
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/linkpage');
    }

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/editor">Go to the Editor page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/lounge">Go to the Lounge</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home


// import React from 'react'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   return (
//     <section>
//         <h1>Home</h1>
//         <br/>
//         <p>You're Logged In</p>
//         <br/>
//         <Link to='/editor'> Go To The Editor Page </Link>
//         <br/>
//         <Link to='/admin'> Go To The Admin Page </Link>
//         <br/>
//         <Link to='/lounge'> Go To The Lounge </Link>
//         <br/>
//         <Link to='/linkpage'> Go To The Link Page </Link>

//         <div className='flexGrow'>
//                 <button>Sign Out</button>
//         </div>
//     </section>
//   )
// }

// export default Home
