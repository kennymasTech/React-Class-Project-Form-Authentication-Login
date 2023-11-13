
import { useState, useEffect, useRef } from 'react'


const Login = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ errMsg, setErrMsg ] = useState("")
    const [ success, setSuccess ] = useState(false)


    useEffect(() => {
        useRef.current.focus()
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
    </section>
    </>
  )
}

export default Login
