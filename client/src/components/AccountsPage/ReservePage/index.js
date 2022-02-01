import React, {  useState, useEffect } from 'react';
import { ReserveComponent } from './ReserveComponent';
import './ReserveComponent.css'
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom'
import {GLOBAL} from '../../../config'
import { ReserveHeader1, ReserveHeader2 } from './ReserveHeader';

const ReserveContainer = () => {

    const [oldRentals,setOldRentals] = useState(null);
    const [currentRentals,setCurrentRentals] = useState(null)

    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);

    useEffect(() =>{
        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/rental_history/old/user=${ReactSession.get('user_id')}`,{
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "no-cors"
            },
            body: JSON.stringify({ user_id: ReactSession.get('user_id')})
        })
        .then(async response =>{
            //let [user_id,type]= await response.data
            if(response.status === 200){
                response = await response.json()
                setOldRentals(response)
            }
        })
        .catch(err => console.log(err))

        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/rental_history/current/user=${ReactSession.get('user_id')}`,{
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "no-cors"
            }, 
            body: JSON.stringify({ user_id: ReactSession.get('user_id')})
        })
        .then(async response =>{
            //let [user_id,type]= await response.data
            if(response.status === 200){
                response = await response.json()
                setCurrentRentals(response)
                isLoading(false)
            }
        })
        .catch(err => console.log(err))
    },[])

    return (
        <div className="reservehistory">
            <ReserveHeader1/>
            {!loading ?
            <div className="current_reserve_history">
                {currentRentals.map((currentRental, i)=>
                    <ReserveComponent reserve_history={currentRental} key={i}/>
                )}
            </div> : null}

            <ReserveHeader2/>
            {!loading ?
            <div className="current_reserve_history">
            {oldRentals.map((oldRental, i)=>
                    <ReserveComponent reserve_history={oldRental} key={i}/>
                )}
                </div> : null}
        </div>
        )
        
};

export {ReserveContainer}


