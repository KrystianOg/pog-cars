import React, {  useState, useEffect } from 'react';
import React from 'react';
import Car from '../../models/car'
import { CarComponent } from './CarComponent';
import './CarComponent.css'
import { useNavigate } from 'react-router-dom'
import { CarFilter} from './CarFilter'

//var array = new Array();


/*
array.push(new Car(12000, 200, 5, 'manual', 'AWD', 'PB', 15, 3200, 1, 2019, 0, 'A4', 'Audi'));
array.push(new Car(16400, 100, 3, 'automatic', 'AWD', 'PB', 10, 2900, 1, 2012, 0, 'A4', 'Mercedes'));
array.push(new Car(20000, 150, 6, 'manual', 'AWD', 'PB', 10, 7200, 3, 2017, 0, 'A4', 'Subaru'));
array.push(new Car(18000, 90, 5, 'manual', 'AWD', 'PB', 10, 4400, 2, 2016, 0, 'A4', 'BMW'));
array.push(new Car(17000, 125, 4, 'automatic', 'AWD', 'PB', 10, 7500, 1, 2018, 0, 'A4', 'Ford'));
*/
//obliczyć t

let car = new Car(12000, 200, 5, 'manual', 'AWD', 'PB', 10, 3200, 1, 2019, 0, 'A4', 'Audi');

const CarsContainer = () => {

    const [cars,setCars] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);

    function submit(values){
        console.log('SUBMITING...')
        
        fetch(`http://192.168.0.102:5000/cars/filter`,{
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
            <CarFilter submit={submit}/>
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
