
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


  return (
    <div>
      
    </div>
  )
}

export default Login
