import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
        const [ isLoading, setIsLoading ] = useState()
        const refresh = useRefreshToken()

        const { auth } = useAuth()

        useEffect (() => {
            let isMounted = true;
            const verifyRefreshToken = async () => {
                try {
                    await refresh()
                } catch (error) {
                    console.log(error);
                } finally {
                    setIsLoading(false)
                }
            }
            !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)

            return () => isMounted = false
        }, [])

        
}


export default PersistLogin