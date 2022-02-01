import React, {  useState, useEffect } from 'react';
import { ReserveComponent } from './ReserveComponent';
import './ReserveComponent.css'
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom'
import {GLOBAL} from '../../../config'
import { ReserveHeader1, ReserveHeader2 } from './ReserveHeader';



const ReserveContainer = () => {

    const [reserve_history,setreservehistory] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);

    var d = new Date();

    useEffect(() =>{
    const loadreservehistorycurrent = () => {
        return fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/users/reserve/current/user=${ReactSession.get('user_id', d)}`,{
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
                setreservehistory(response)
                isLoading(false)
            }
        })
        .catch(err => console.log(err))
    }
    loadreservehistorycurrent()
    },[])

    useEffect(() =>{
        const loadreservehistoryold = () => {
            return fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/users/reserve/old/user=${ReactSession.get('user_id', d)}`,{
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
                    setreservehistory(response)
                    isLoading(false)
                }
            })
            .catch(err => console.log(err))
        }
        loadreservehistorycurrent()
        },[])

    return (
        <div className="reservehistory">
            <ReserveHeader1/>
            {!loading ?
            <div className="current_reserve_history">
                {reserve_history.map((reserve_history, i)=>
                    <ReserveComponent reserve_history={reserve_history} key={i}/>
                )}
            </div> : null}
        </div>
        )
        
};

export {ReserveContainer}


