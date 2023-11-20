import { useState, useEffect } from "react"

const useLocalStorage = () => {
    const [ value, getValue ] = useState(JSON.parse(localStorage.getItem(key)) || 
    initValue)

    useEffect (() => {

    }, [])
 
}

export default useLocalStorage