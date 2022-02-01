import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {GLOBAL} from '../../../config'
import {CarComponent} from '../../CarsPage/CarComponent'
import DatePicker from '@mui/lab/DatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { useNavigate } from 'react-router-dom'
import {Box, TextField, Alert, Button, Stack, IconButton} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {RentCarContainer} from './RentCarComponents'
import {ErrorBoundary} from 'react-error-boundary'
import { makeStyles } from '@mui/styles'
import { ReactSession } from 'react-client-session';
import dateFormat from 'dateformat'

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

const RentCarComponent = () => {

    const navigate = useNavigate()

    const addDays = (date, days)=>{
        const cpy = new Date(Number(date))
        cpy.setDate(date.getDate()+days)
        return cpy
    }

    const [car, setCar] = useState(null)
    const [loading, isLoading] = useState(true)
    const [rentalHistory, setRentalHistory] = useState(null)

    //rent variables
    const [rentalBegin, setRentalBegin] = useState(new Date())
    const [rentalEnd, setRentalEnd] = useState(addDays(rentalBegin,1))
    const [rentalSpanOK,setRentalSpanOK] = useState(false)
    const [days, setDays] = useState(1)
    const [code, setCode] = useState('')
    const [codeOK, setCodeOK] = useState(true)
    const [discount, setDiscount] = useState(0)

    useEffect(()=>{
        var diff = rentalEnd.getTime() - rentalBegin.getTime()
        var d = Math.ceil(diff/(1000*3600*24))
        setDays(d+1)

        if(!loading) 
            setPassing()
    },[rentalBegin, rentalEnd])

    const setPassing= () =>{
        var passing = true
        var spanBegin = rentalBegin.getTime()
        var spanEnd = rentalEnd.getTime()

        rentalHistory.forEach((value)=>{
            var otherSpanBegin = new Date(value.rental_begin).getTime()
            var otherSpanEnd = new Date(value.rental_end).getTime()

            if((otherSpanBegin >= spanBegin && otherSpanBegin<= spanEnd) || (otherSpanEnd >= spanBegin && otherSpanEnd<= spanEnd))
                passing = false
        })
        setRentalSpanOK(passing)
    }

    let { id } = useParams();
    id = parseInt(id)

    const checkCode = async (e)=>{
        setCode(e.target.value)
        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/discounts/code=${e.target.value}`,{
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "no-cors"
            }, 
            body: JSON.stringify({'user': ReactSession.get('user_id'), 'car': car.car_id})
        })
        .then(async response =>{
            //let [user_id,type]= await response.data
            if(response.status === 200){
                response = await response.json()
                setDiscount(response.value)
                setCodeOK(true)
            } else {
                setCodeOK(false)
            }
        })
        .catch(err => console.log(err))

        if(e.target.value.length === 0)
            setCodeOK(true)
    }

    useEffect(()=>{
        //tutaj mozna async
        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/cars/id=${id}`,{
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "no-cors"
            }
        })
        .then(async response =>{
            //let [user_id,type]= await response.data
            if(response.status === 200){
                response = await response.json()
                setCar(response[0])
                console.log(car)
            }
        })
        .catch(err => console.log(err))

        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/rental_history/car=${id}`,{
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "no-cors"
            }
        })
        .then(async response =>{
            //let [user_id,type]= await response.data
            if(response.status === 200){
                response = await response.json()
                setRentalHistory(response)
                isLoading(false)
                setPassing()
            }
        })
        .catch(err => console.log(err))
    },[])

    const disableRentedDays = (date) =>{
        var passing = false
        var d = date.getTime()

        rentalHistory.forEach((value)=>{
            var t1 = new Date(value.rental_begin).getTime()
            var t2 = new Date(value.rental_end).getTime()

            if(d >= t1 && d <= t2)
                passing =  true
        })
        return passing
    }

    const handleRentalBegin = (date) =>{
        if(date.getTime() >= rentalEnd.getTime()){

            setRentalEnd(date)
        } 
        setRentalBegin(date)
    }

    const handleRentalEnd = (date) =>{
        if(date.getTime()<= rentalBegin.getTime()){
            setRentalBegin(date)
        }
        setRentalEnd(date)
    }

    const rentCar = () =>{

        console.log(rentalSpanOK)
        console.log(codeOK || code.length === 0)

        if(!(rentalSpanOK && (codeOK || code.length === 0))) return

        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/cars/rent=${id}`,{
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "no-cors"
            },
            body: JSON.stringify({'user_id': ReactSession.get('user_id'), 'agency_id': car.agency_id, 'rental_begin': dateFormat(rentalBegin, "yyyy-mm-dd"), 'rental_end': dateFormat(rentalEnd, "yyyy-mm-dd"), price: Math.round((car.price)*(100-discount)/100/30*(days))})
        })
        .then(async response =>{
            //let [user_id,type]= await response.data
            if(response.status === 201){
                navigate('/cars')
            }
        })
        .catch(err => console.log(err))
    }

    const classes = useStyles();
    return (
        <RentCarContainer>
            {rentalHistory !== null ? 
            <Box sx={{display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2,1fr)', margin: '16px 8px', width: 560, justifyContent: 'center', alignItems: 'center'}}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker label="Termin wypożyczenia" shouldDisableDate={disableRentedDays} minDate={new Date()} value={rentalBegin} inputFormat="dd/MM/yyyy" onChange={handleRentalBegin} renderInput={(params)=><TextField {...params}/>}/>
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDateFns }>
                    <DatePicker label="Termin oddania" shouldDisableDate={disableRentedDays} value={rentalEnd} inputFormat="dd/MM/yyyy" onChange={handleRentalEnd} renderInput={(params)=><TextField {...params}/>}/>
                </LocalizationProvider>

                <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                    <TextField label="Kod promocyjny" onChange={(e)=>{checkCode(e)}} style={{ width: 240, margin: '8px auto'}}/>
                </Stack>
                <Button variant="outlined" sx={{margin: '10px', width: 120}} className={classes.root} onClick={rentCar}>RENT</Button>
            </Box> : null}
            {!rentalSpanOK ? <Alert severity="error">Wybrany termin nie jest dostępny</Alert> : null}

            {!codeOK && code.length>0? <Alert severity="error">Kod promocyjny jest nieprawidłowy</Alert> : null}
            { codeOK && code.length > 4 ? <Alert severity="success">Kod promocyjny jest prawidłowy</Alert> : null}

            <ErrorBoundary>
                {!loading ? <CarComponent car={car} days={days} renderRent={false} discount={discount}/>  : null}
            </ErrorBoundary>
            
        </RentCarContainer>
    )
};

export {RentCarComponent};
