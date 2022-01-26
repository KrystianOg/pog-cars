import React, {  useState, useEffect } from 'react';
import { CarComponent } from './CarComponent';
import './CarComponent.css'
import { useNavigate } from 'react-router-dom'

const CarsContainer = () => {

    const [cars,setCars] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);

    useEffect(() =>{
        const loadUser = () => {
            return fetch(`http://192.168.0.102:5000/cars`,{
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
            {!loading ?
            <div className="offers">
                {/* automatyzacja tego */}
                {cars.map((car)=>
                    <CarComponent car={car}/>
                )}
            </div> : null}
        </>
    )
};

export {CarsContainer}
