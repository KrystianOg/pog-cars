import React, {useState, useEffect} from 'react';
import { CarImage } from './CarComponents';
import './CarComponent.css'
import carPng from '../../images/cars/mustang.png';
import {GLOBAL} from '../../config'

import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'
import { ReactSession } from 'react-client-session';
import {Button as MButton, TextField as MTextField, Box, Slider} from '@mui/material';
import { makeStyles } from '@mui/styles'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'

import dateFormat from 'dateformat'

const CarComponent = ({car},{days=6}) => {

    const navigate = useNavigate()

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

    let [rent, setRent]= useState(false)
    let [del, setDelete] = useState(false)
    let [delCode, setDeleteCode] = useState(null)
    let [discount, setDiscount] = useState(false)
    let [discountCode, setDiscountCode] = useState(null)
    let [rating, setRating] = useState(car.avg_rating)
    let [expiration, setDate] = useState(new Date())
    let [discountAmount, setAmount] = useState(3)

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
        navigate(`/rent/id=${car.car_id}`)
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
                "body": JSON.stringify({user_id: ReactSession.get('user_id')})
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
            fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/discounts/car=${car.car_id}`,{
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "no-cors"
                },
                "body": JSON.stringify({"user_id": ReactSession.get('user_id'), "expiration": dateFormat(expiration, "yyyy-mm-dd"), "code": discountCode, "amount": discountAmount})
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

    const classes = useStyles();
    return (
        <div className="car-container">
            <Rating name="read-only" value={rating} readOnly defaultValue={5.0} precision={0.2}/>

                { (ReactSession.get('type') === 'ADMIN' || ReactSession.get('type') === 'AGENT') && !car.deleted && car.car_id !== undefined?
                    <>
                        {!discount && !del &&
                            <Box sx={{display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2,1fr)'}}>
                                <MButton variant="outlined" onClick={() => {setDelete(true); setDeleteCode(makeid(6))}} className={classes.root}>Delete</MButton>
                                <MButton variant="outlined" onClick={()=>{setDiscount(true); setDiscountCode(makeid(6))}} className={classes.root}>Add discount</MButton>
                            </Box>
                        }

                        { del &&
                            <Box sx={{display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1,1fr)'}}>
                                Confirm delete by typing: {delCode}
                                <MTextField label="Code" onChange={(e) => deleteCar(e)} style={{width: '180px', margin: '8px auto'}}/>
                                <MButton variant="outlined" onClick={()=>{setDelete(false)}} className={classes.root}>Cancel</MButton>
                            </Box>
                        }

                        { discount &&
                            <Box sx={{display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1,1fr)'}}>

                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker label="Data wygaśnięcia" value={expiration} inputFormat="dd/MM/yyyy" onChange={(newDate)=>{setDate(newDate)}} renderInput={(params)=><MTextField {...params}/>}/>
                                </LocalizationProvider>
                                <Slider valueLabelDisplay="auto" aria-label="Zniżka [%]" defaultValue={discountAmount} min={1} max={30} onChange={(e, newAmount)=>{setAmount(newAmount)}}/>
                                <h2>Confirm add by typing: {discountCode}</h2>
                                <MTextField label="Code" onChange={(e) => addDiscount(e)} style={{width: '180px', margin: '8px auto'}}/>

                                <MButton variant="outlined" onClick={()=>{setDelete(false)}} className={classes.root}>Cancel</MButton>
                            </Box>
                        }
                    </> : null}
                
                {/*
                <Box sx={{display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2,1fr)'}}>
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
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker label="Data wygaśnięcia" inputFormat="dd/MM/yyyy" onChange={()=>{}} renderInput={(params)=><MTextField {...params}/>}/>
                                </LocalizationProvider>
                                <h2>Confirm add by typing: {discountCode}</h2>
                                <MTextField label="Code" onChange={(e) => addDiscount(e)} style={{width: '180px', margin: '8px auto'}}/>

                                <MButton variant="outlined" onClick={()=>{setDelete(false)}} className={classes.root}>Cancel</MButton>
                            </>
                        }
                    </>    
                : null}
                </Box>
                    </StarsContainer>*/}

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
                    <h1>{Math.round(car.price/30*days)} PLN</h1> 
                    <h3> cena za {days} dni</h3>
                    <h5>Opłata przygotowawcza +29 PLN</h5>
                    <h5>Wydanie pojazdu poza godzinami pracy +39 PLN</h5>
                </div>
            </div>

            {/* zrobić ładniejszy troche ten przycisk */}
            {!rent && !car.deleted ?
                <MButton variant="outlined" sx={{margin: '10px', width: 120}} onClick={rentCar} className={classes.root}>RENT</MButton> :
                null
            }

        </div>
    )
};

export {CarComponent}
