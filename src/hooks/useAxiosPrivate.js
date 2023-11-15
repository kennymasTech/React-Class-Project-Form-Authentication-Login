
import { axiosPrivate } from "../api/axios"
import { useEffect } from "react"
import useRefreshToken from "./useRefreshToken"
import useAuth from "./useAuth"


const useAxiosPrivate = () => {
    const refresh = useRefreshToken()
    const { auth } = useAuth()
  return (
    <div>useAxiosPrivate</div>
  )
}

export default useAxiosPrivate