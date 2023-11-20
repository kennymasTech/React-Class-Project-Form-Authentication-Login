import useLocalStorage from "./useLocalStorage"


const useToggle = (key, initValue) => {
    const [ value, setValue ] = useLocalStorage(key, initValue)

    const toggle = ( value ) => {
        setValue(prev => {
            return typeof value === 'boolean' ? value : !prev
        })
    }
}

export default useToggle