
import { useState, useEffect, useRef } from 'react'
import axios from '../api/axios'
import useAuth from '../hooks/useAuth'
import { useNavigate, Link, useLocation } from 'react-router-dom'


const Login = () => {
    const LOGIN_URL = "/auth"
    const { setAuth } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const userRef = useRef()
    const errRef = useRef()

    const [ user, setUser ] = useState("")
    const [ pwd, setPwd ] = useState("")
    const [ errMsg, setErrMsg ] = useState("")


    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({user, pwd}),{
                headers: {'Content-Type': 'application/json'}, 
                withCredentials: true 
            })
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken
            const roles = response?.data?.roles

            setAuth({user, pwd, roles, accessToken})

            setUser("");
            setPwd("");
            navigate(from{replace: true})
        } catch (error) {
            if (!error.response) {
                setErrMsg('No Server Response')
            } else if (error.response?.status === 400) {
                setErrMsg('Missing Username Or Password')
            } else if (error.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login Failed')
            }
            errRef.current.focus();
        }
    //     if(!user || !pwd) {
    //         setErrMsg('Invalid Entry');
    //         return;
    // }
        
    }


  return (
    

    <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
            {errMsg}
        </p>

        <h1> Sign In </h1>

        <form onSubmit={handleSubmit} >
            <label htmlFor="user" >
                User: 
                <input 
                    type="text" 
                    id='username'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                 />
            </label>

            <label htmlFor="password" >
                Password: 
                <input 
                    type="password"
                    id='password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required 
                 />
            </label>

            <button disabled={ !user || !pwd ? true : false }>
                Sign In
            </button>

        </form>

        <p>
            Need An Account ? <br/>
            <span>
                <Link to="/register">Sign Up</Link>
            </span>
        </p>
    </section>
  )
  
}

export default Login
