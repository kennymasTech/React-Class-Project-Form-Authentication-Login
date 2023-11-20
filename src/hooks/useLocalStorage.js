import { useState, useEffect } from "react"

const useLocalStorage = () => {
    const [ value, setValue ] = useState(JSON.parse(localStorage.getItem(key)) || 
    initValue)

    useEffect (() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
 
    return [value, setValue]
}

export default useLocalStorage