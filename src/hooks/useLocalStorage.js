import { useState, useEffect } from "react"

const useLocalStorage = () => {
    const [ value, getValue ] = useState(JSON.parse(localStorage.getItem(key)) || 
    initValue)

    useEffect (() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
 
    return [va]
}

export default useLocalStorage