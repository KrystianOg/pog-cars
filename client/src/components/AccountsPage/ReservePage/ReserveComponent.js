import React, {useState, useEffect} from 'react';
import './ReserveComponent.css'
import { useNavigate } from 'react-router-dom'
import { Button, ButtonLink} from './ReserveComponents'
import RentalComponent from './RentalComponents'
import {GLOBAL} from '../../../config'
import { ReactSession } from 'react-client-session';

const ReserveComponent = (params) => {

    const [cars,setCars] = useState(null)
    const [agencies,setAgency] = useState(null)
    const [ratings,setRating] = useState(null)

    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);

    let p = params
    const d = Date.now()

    useEffect(() =>{
        // + dane o ocenach

        const loadReservehistory = () => {
            return fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/rental_history/user=${ReactSession.get(params.user_id)/{d}}`,{
                "method": "GET",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "no-cors"
                }, "body": JSON.stringify({ user_id : ReactSession.get('user_id')})
            })
            .then(async response =>{
                //let [user_id,type]= await response.data
                if(response.status !== 200){
                    navigate('/account/reserve', {replace: true})
                } else {
                    response = await response.json()
                    setCars(response)
                    isLoading(false)
                }
            })
            .catch(err => console.log(err))
        }
        
        loadReservehistory()
    },[])

    return (
        <div className="reserve-container">

        </div>
    )
};

export {ReserveComponent}
