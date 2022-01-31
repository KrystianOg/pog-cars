import React, {useState,useEffect} from 'react';
import { StarsContainer, CarImage } from './CarComponents';
import './CarComponent.css'
import carPng from '../../images/cars/mustang.png';
import {GLOBAL} from '../../config'

import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faStar as emptyStar}  from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactSession } from 'react-client-session';
import {Button as MButton, TextField as MTextField} from '@mui/material';
import { makeStyles } from '@mui/styles'

import DesktopDatePicker from '@mui/lab/DesktopDatePicker'

const CarComponent = ({car}) => {

    const useStyles = makeStyles({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 10,
            color: 'white',
            height: 48,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            padding: '0 30px',
            margin: '5px auto'
        }
    });

    let d =6;

    let [rent, setRent]= useState(false)
    let [del, setDelete] = useState(false)
    let [delCode, setDeleteCode] = useState(null)
    let [discount, setDiscount] = useState(false)
    let [discountCode, setDiscountCode] = useState(null)
    const stars = () => {
        let amount = Math.ceil(car.avg_rating)

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

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
        }
        return result;
    }

    const rentCar = () =>{
        setRent(true)

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

    const deleteCar = (e) => {
        if(e.target.value === delCode){


            //request
            fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/cars/id=${car.car_id}`,{
                "method": "PATCH",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "no-cors"
                },
                "body": JSON.stringify({"user_id": ReactSession.get('user_id')})
            })
            .then(async response =>{
                //let [user_id,type]= await response.data
                if(response.status === 204){
                    car.deleted = 1
                    setDelete(false)
                    setDeleteCode(null)
                    console.log("Car deleted")
                }
            })
            .catch(err => console.log(err))
        }
    }

    const addDiscount = (e) => {
        if(e.target.value === discountCode){
            setDiscount(false)
            setDiscountCode(null)

            //request
            fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/cars/id=${car.car_id}`,{
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "no-cors"
                },
                "body": JSON.stringify({"user_id": ReactSession.get('user_id')})
            })
            .then(async response =>{
                //let [user_id,type]= await response.data
                if(response.status === 204){
                    car.deleted = 1
                    setDiscount(false)
                    setDiscountCode(null)
                    console.log("Car deleted")
                }
            })
            .catch(err => console.log(err))
        }
    }

    //
    const classes = useStyles();
    return (
        <div className="car-container">
            {stars()}
            <StarsContainer>

                { (ReactSession.get('type') === 'ADMIN' || ReactSession.get('type') === 'AGENT') && !car.deleted && !discount? 
                    <>
                        {!del ? <MButton variant="outlined" onClick={() => {setDelete(true); setDeleteCode(makeid(6))}} className={classes.root}>Delete</MButton> :
                            <>
                                Confirm delete by typing: {delCode}
                                <MTextField label="Code" onChange={(e) => deleteCar(e)} style={{width: '180px', margin: '8px auto'}}/>
                                <MButton variant="outlined" onClick={()=>{setDelete(false)}} className={classes.root}>Cancel</MButton>
                            </>
                        }
                    </>
                : null}

                { ReactSession.get('type') === 'AGENT' && !car.deleted && !del ?
                    <>
                        {!discount ? <MButton variant="outlined" onClick={()=>{setDiscount(true); setDiscountCode(makeid(6))}} className={classes.root}>Add discount</MButton> :
                            <>
                                Confirm add by typing: {discountCode}
                                <MTextField label="Code" onChange={(e) => addDiscount(e)} style={{width: '180px', margin: '8px auto'}}/>
                                <MButton variant="outlined" onClick={()=>{setDelete(false)}} className={classes.root}>Cancel</MButton>
                            </>
                        }
                    </>    
                : null}

                { ReactSession.get('type') === 'ADMIN' || ReactSession.get('type') === 'AGENT' && !car.deleted ?
                    <>
                    </> : null }
            </StarsContainer>

            {/* tutaj zaimportowane zdjęcie */}
            <CarImage src = {carPng} alt="car"/>

            <div className="car-info">
                <div>
                    <h2>{car.make} {car.model} {car.deleted === 1 ? <>[DELETED]</> : null}</h2>
                    <h5>Rok produkcji: {car.year}</h5>
                </div>

                <span>
                    <span content="Skrzynia biegów" >
                        {/* some icon */}
                        <FaCogs/>
                        {/* and description */}
                        {car.transmission === "manual" ? "M" : "A"}
                    </span>

                    <span content="Ilość miejsc">
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
                    <span>
                        <FaCheck/>Bezpłatne odwołanie rezerwacji
                    </span>
                    <span >
                        <FaCheck/>Bez limitu km
                    </span>
                </div>

                <div className="price">
                    <h1>{Math.round(car.price/30*d)} PLN</h1> 
                    <h3> cena za {d} dni</h3>
                    <h5>Opłata przygotowawcza +29 PLN</h5>
                    <h5>Wydanie pojazdu poza godzinami pracy +39 PLN</h5>
                </div>
            </div>

            {/* zrobić ładniejszy troche ten przycisk */}
            {!rent && !car.deleted ?
                <MButton variant="outlined" onClick={rentCar} className={classes.root}>RENT</MButton> :
                null
            }

        </div>
    )
};

export {CarComponent}
