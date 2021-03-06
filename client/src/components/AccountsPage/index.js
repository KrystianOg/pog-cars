import React, {  useState, useEffect }  from 'react';
import { AccountComponent } from './AccountComponent';
import './AccountComponent.css'
import { useNavigate } from 'react-router-dom'
import { ReactSession } from 'react-client-session'

import {GLOBAL} from '../../config'

const AccountsContainer = () => {

    const [user,setUser] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);


    useEffect(() =>{
        // + dane o ocenach

        const loadUser = () => {
            return fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/users/${ReactSession.get('user_id')}`,{
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
                    setUser(response[0])
                    isLoading(false)
                }
            })
            .catch(err => console.log(err))
        }
        loadUser()
    },[])

    return (
        <div className="data">
            {/* automatyzacja tego */}
            {!loading ?
            <AccountComponent account={user}/> : null }
            {/* jakiś footer */}
        </div>
    )
};

export {AccountsContainer}
