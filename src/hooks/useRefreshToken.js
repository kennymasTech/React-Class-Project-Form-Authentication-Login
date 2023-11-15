import axios from "../api/axios"
import useAuth from "./useAuth"


const useRefreshToken = () => {
    const {setAuth} = useAuth()

    const refresh = async () => {

        const response = await axios.get('/refresh', {
            withCredentials: true
        })
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);

        })
        return
    }
  return (
    <div>useRefreshToken</div>
  )
}

export default useRefreshToken