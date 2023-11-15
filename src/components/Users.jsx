import { useState, useEffect } from "react"



const Users = () => {
    const [ users, setUsers ] = useState()

    useEffect(() => {
        let inMounted = true
        const controller = new AbortController()

        const getUsers = async () => {

            try {
                const response = await axios.get('/users', {
                    signal: controller.signal
                })
                console.log(response.data);
            } catch (err) {

            }
        }
    }, [])

  return (
    <article>
        <h2>Users List</h2>
        {users?.length 
              ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                    </ul>
              ) : <p>No User To Display</p>
            }
    </article>
  )
}

export default Users