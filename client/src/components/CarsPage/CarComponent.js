import React, {useState,useEffect} from 'react';
import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'
import './CarComponent.css'
import carPng from '../../images/cars/mustang.png';

import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faStar as emptyStar}  from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {GLOBAL} from '../../config'
import { ReactSession } from 'react-client-session';

const CarComponent = ({car}) => {

    //let c = new Car(12000, 200, 5, 'manual', 'AWD', 'PB', 10, 3200, 1, 2019, 0, 'A4', 'Audi');

    //obliczyć tutaj cenę za okres
    let d =6;

    let [rent, setRent]= useState(false)

    const stars = (amount) => {
        amount = Math.ceil(amount)

        return (
            <div className="stars">
                {amount>=1 ? <FontAwesomeIcon icon={faStar}/> : <FontAwesomeIcon icon={emptyStar}/>}
                {amount>=2 ? <FontAwesomeIcon icon={faStar}/> : <FontAwesomeIcon icon={emptyStar}/>}
                {amount>=3 ? <FontAwesomeIcon icon={faStar}/> : <FontAwesomeIcon icon={emptyStar}/>}
                {amount>=4 ? <FontAwesomeIcon icon={faStar}/> : <FontAwesomeIcon icon={emptyStar}/>}
                {amount>=5 ? <FontAwesomeIcon icon={faStar}/> : <FontAwesomeIcon icon={emptyStar}/>}
            </div>
        )
    }

    const rentCar = () =>{
        setRent(true)
        console.log("SOme  awesome shit")

        let d1 = new Date()
        let d1s = d1.getFullYear()+"-"+(d1.getMonth()+1)+"-"+d1.getDate()

        let d2 = new Date()
        d2.setDate(d2.getDate()+5)
        let d2s = d2.getFullYear()+"-"+(d2.getMonth()+1)+"-"+d2.getDate()

        let params = {
            rental_begin : d1s,
            rental_end : d2s,
            user_id : ReactSession.get('user_id'),
            agency_id : 1
        }

        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/cars/reserve=${car.car_id}`,{
                "method": "GET",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "no-cors"
                }, "body": JSON.stringify(params)
            })
            .then(async response =>{
                //let [user_id,type]= await response.data
                if(response.status !== 200){
                    //navigate('/', {replace: true})
                    console.log(response)
                } else {
                    console.log(response)
                }
            })
    }

    return (
        <div className="car-container">

            {stars(4)}
            <div className="image">
                {/* tutaj zaimportowane zdjęcie */}
                <img src={carPng} alt="car"/>
            </div>
            <div className="car-info">
                <div className="car-header">
                    <h3>{car.make} {car.model}</h3>
                    <h5>Rok produkcji: {car.year}</h5>
                </div>

                <span>
                    <span content="Skrzynia biegów" >
                        {/* some icon */}
                        <FaCogs/>
                        {/* and description */}
                        {car.transmission === "manual" ? "M" : "A"}
                    </span>

                    <span content="Ilość miejsc" >
                        {/* some icon */}

                        {/* and description */}
                        Seats: {car.seats}
                    </span>
                    <span content="Średnie spalanie" >
                        {/* some icon */}
                        <FaGasPump/>
                        {/* and description */}
                        [l/100km]: {car.fuelConsumption}
                    </span>
                    <span content="Napęd" >
                        {/* some icon */}

                        {/* and description */}
                        Napęd: {car.drivetrain}
                    </span>
                </span>

                <div className="options">
                    <span >
                        <FaCheck/>Bezpłatne odwołanie rezerwacji
                    </span>
                    <span >
                        <FaCheck/>Bez limitu km
                    </span>
                </div>

                <div className="price">
                    <h1>{car.price/30*d} PLN</h1>
                    <h3> cena za {d} dni</h3>
                    <h5>Opłata przygotowawcza +29 PLN</h5>
                    <h5>Wydanie pojazdu poza godzinami pracy +39 PLN</h5>
                </div>
            </div>

            {/* zrobić ładniejszy troche ten przycisk */}
            {!rent ?
            <button className="form-input-btn rent"  onClick={rentCar}>
                Rent
            </button> : 
                <h3>Thanks! Your request has been received</h3>
            }

        </div>
    )
};

export {CarComponent}
