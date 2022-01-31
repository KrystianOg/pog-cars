import React, {  useState, useEffect } from 'react';
import { CarComponent } from './CarComponent';
import './CarComponent.css'
import { useNavigate } from 'react-router-dom'
import { CarFilter} from './CarFilter'
import {GLOBAL} from '../../config'

const CarsContainer = () => {

    const [cars,setCars] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);

    function submit(values){
        console.log('SUBMITING...')
        
        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/cars/filter`,{
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "no-cors"
            },
            "body" : JSON.stringify(values)
        })
        .then(async response =>{
            //let [user_id,type]= await response.data
            if(response.status !== 200){
                navigate('/', {replace: true})
            } else {
                response = await response.json()
                setCars(response)
                isLoading(false)
            }
        })
        .catch(err => console.log(err))

    }

    useEffect(() =>{
        // + dane o ocenach

        const loadUser = () => {
            return fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/cars`,{
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
                    setCars(response)
                    isLoading(false)
                }
            })
            .catch(err => console.log(err))
        }
        loadUser()
    },[])

    return (
        <>
            <>
                <CarFilter submit={submit}/>
            </>
            {!loading ?
            <div className="offers">
                {/* automatyzacja tego */}
                {cars.map((car,i)=>
                    <CarComponent car={car} key={i}/>
                )}
            </div> : null}
        </>
    )
};

export {CarsContainer}
