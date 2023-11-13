
import { useState, useEffect, useRef } from 'react'


const Login = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ errMsg, setErrMsg ] = useState("")
    const [ success, setSuccess ] = useState(false)


    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [username, password])

    // useEffect(() => {
    //     useRef.current.focus()
    // }, [])

    // useEffect(() => {
    //     useRef.current.focus()
    // }, [])


  return (
    <>
    <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
            {errMsg}
        </p>

        <h1> Sign In </h1>

        <form  >
            <label >
                Username: 
                <input 
                    type="text" 
                    id='username'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                 />
            </label>

            <label >
                Password: 
                <input 
                    type="password"
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required 
                 />
            </label>

            <button>
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
    </>
  )
}

export default Login
