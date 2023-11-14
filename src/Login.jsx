
import { useState, useEffect, useRef, useContext } from 'react'
import AuthContext from './context/AuthProvider'
import axios from './api/axios'


const Login = () => {
    const LOGIN_URL = "/auth"
    const { setAuth } = useContext(AuthContext)

    const userRef = useRef()
    const errRef = useRef()

    const [ user, setUser ] = useState("")
    const [ pwd, setPwd ] = useState("")
    const [ errMsg, setErrMsg ] = useState("")
    const [ success, setSuccess ] = useState(false)


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

            setSuccess(true);
            setUser("");
            setPwd("");
        } catch (err) {

        }
    //     if(!user || !pwd) {
    //         setErrMsg('Invalid Entry');
    //         return;
    // }
        
    }


  return (
    <>
    { success ? (
        <section>
            <h1> Sign In Successfully </h1>
            <p>
            <a href="home"> Bact To Home</a>
            </p>
        </section>
    ) : (

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
            <span className='line' >
                <a href="#">
                    Sign Up
                </a>
            </span>
        </p>
    </section>
    )}

    </>
  )
}

export default Login
