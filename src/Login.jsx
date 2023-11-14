
import { useState, useEffect, useRef, useContext } from 'react'
import AuthContext from './context/AuthProvider'


const Login = () => {
    const { setAuth } = useContext(AuthContext)

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

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!username || !password) {
            setErrMsg('Invalid Entry');
            return;
    }
        console.log(username, password);
        setSuccess(true);
         // To Clear State And Control Input
        setUsername("");
        setPassword("");
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
            <label htmlFor="username" >
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

            <label htmlFor="password" >
                Password: 
                <input 
                    type="password"
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required 
                 />
            </label>

            <button disabled={ !username || !password ? true : false }>
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
