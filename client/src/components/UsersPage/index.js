import React, {  useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { AccountComponent} from '../AccountsPage/AccountComponent'
import { Container,PaginationContainer } from './usersComponents'
import {Spinner} from 'react-bootstrap'
import {GLOBAL} from '../../config'

const UsersContainer = () =>{
    const [users, setUsers] = useState(null);
    const navigate = useNavigate()
    const [loading, isLoading] = useState(true);
    const [page, setPage] = useState(1);
    let amount = 32
    
    const loadUsers = () => {
        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/users/anchor=${(page-1)*amount}&amount=${amount}`,{
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

    useEffect(() =>{
        loadUsers()
    },[page])

    const handlePageChange = (event, value) =>{
        isLoading(true)
        setPage(value)
        loadUsers()
    }

    return(
        <>
            {!loading ? 
                <Container>
                    <PaginationContainer count={31} siblingCount={2} page={page} onChange={handlePageChange}/>
                    {users.map((user,i) =>
                        <AccountComponent account={user} key={i}/>)}
                    <PaginationContainer count={31} siblingCount={2} page={page} onChange={handlePageChange}/>
                </Container> : <Spinner animation='border'/>
            }
        </>
    )
}

export default UsersContainer