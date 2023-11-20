import { useState } from "react"




const useInput = (initValue) => {
    const [ value, setValue ] = useState(initValue)
    const reset = () => setValue(initValue)

    const attributeObj = {
        value,
        onChange: (e) => setValue(e.target.value)
    }
}

export default useInput