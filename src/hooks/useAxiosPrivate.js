
import { axiosPrivate } from "../api/axios"
import { useEffect } from "react"
import useRefreshToken from "./useRefreshToken"
import useAuth from "./useAuth"


const useAxiosPrivate = () => {
    const refresh = useRefreshToken()
    const { auth } = useAuth()

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use((
            config) => {
                if (!config.headers["Authorization"]) {
                    config.headers["Authorization"] = ` ${auth?.accessToken}` 
                }

                return config
            }, (error) => Promise.reject(error)
        );
        
        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;

            }
        )
    }, [auth, refresh])
  return axiosPrivate
}

export default useAxiosPrivate