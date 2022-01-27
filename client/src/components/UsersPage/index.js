import React, {  useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { AccountComponent} from '../AccountsPage/AccountComponent'

const UsersContainer = () =>{
    const [users, setUsers] = useState(null);
    const navigate = useNavigate()
    const [loading, isLoading] = useState(true);

    let anchor=0, amount=32;

    useEffect(() =>{
        const loadUsers = () => {
            fetch(`http://192.168.0.102:5000/users/anchor=${anchor}&amount=${amount}`,{
                "method": "GET",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "no-cors"
                }
            })
            .then(async response =>{
                //let [user_id,type]= await response.data
                if(response.status !== 200){
                    navigate('/', {replace: true})
                } else {
                    response = await response.json()
                    setUsers(response)
                    isLoading(false)
                }
            })
            .catch(err => console.log(err))
        }
        loadUsers()
    },[])

    return(
        <>
            {!loading ? 
                <div className="users-container">
                    {users.map((user) =>
                        <AccountComponent account={user[0]}/>)}
                </div> : null
            }
        </>
    )
}

export default UsersContainer