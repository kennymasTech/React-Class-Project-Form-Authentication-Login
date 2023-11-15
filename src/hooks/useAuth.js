import { useContext, useDebugValue } from "react"
import AuthContext from "../context/AuthProvider"


const useAuth = () => {
  const { Auth } = useContext(AuthContext)
  return useContext(AuthContext)
}

export default useAuth