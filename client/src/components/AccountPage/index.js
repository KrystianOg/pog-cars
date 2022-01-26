import React, {  useState, useEffect } from 'react';

import {UserIcon,Container } from './AccountElements';
import { ReactSession } from 'react-client-session'
import { useNavigate } from 'react-router-dom'

const AccountContainer = () => {

    const [user,setUser] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);

    useEffect(() =>{
        const loadUser = () => {
            return fetch(`http://192.168.0.102:5000/users/${ReactSession.get('user_id')}`,{
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
                    setUser(response)
                    isLoading(false)
                }
            })
            .catch(err => console.log(err))
        }
        loadUser()
    },[])

    return(
        <React.Suspense falllback='Loading ...'>
            <Container>
                <UserIcon/>
                {!loading > 0? 
                <div>
                    <h1>{user[0].firstname}</h1>
                    <h2>{user[0].user_id}</h2>
                </div> : null}
            </Container>
        </React.Suspense>
    )
};

export default AccountContainer;
