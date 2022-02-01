import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {GLOBAL} from '../../../config'
import {CarComponent} from '../../CarsPage/CarComponent'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { useNavigate } from 'react-router-dom'
import {Box, TextField} from '@mui/material'

const RentCarComponent = () => {

    const addDays = (date, days)=>{
        const cpy = new Date(Number(date))
        cpy.setDate(date.getDate()+days)
        return cpy
    }

    const [car, setCar] = useState(null)
    const [loading, isLoading] = useState(true)
    const [rentalHistory, setRentalHistory] = useState(null)

    //rent variables
    let [rentalBegin, setRentalBegin] = useState(new Date())
    let [rentalEnd, setRentalEnd] = useState(addDays(rentalBegin,1))
    let [days, setDays] = useState(1)

    const getDays = () => {
        var diff = rentalBegin.getTime() - rentalEnd.getTime()
        var days = Math.ceil(diff/(1000*3600*24))
        return days
    }

    useEffect(()=>{
        var diff = rentalBegin.getTime() - rentalEnd.getTime()
        var d = Math.ceil(diff/(1000*3600*24))
        setDays(d)
    },[rentalBegin, rentalEnd])

    let { id } = useParams();
    id = parseInt(id)

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
                //isLoading(false)
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
            }
        })
        .catch(err => console.log(err))
    },[])

    const disableRentedDays = (date) =>{
        rentalHistory.forEach((value)=>{
            if(value.rental_begin < date && value.rental_end > date)
                return true
        })
        return false
    }

    return (
        <>
            <Box sx={{display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2,1fr)', margin: '16px 8px', width: 560}}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker label="Termin wypożyczenia"  minDate={new Date()} value={rentalBegin} inputFormat="dd/MM/yyyy" onChange={(newDate)=>{setRentalBegin(newDate)}} renderInput={(params)=><TextField {...params}/>}/>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns }>
                    <DesktopDatePicker label="Termin oddania" value={rentalEnd} inputFormat="dd/MM/yyyy" onChange={(newDate)=>{setRentalEnd(newDate)}} renderInput={(params)=><TextField {...params}/>}/>
                </LocalizationProvider>
            </Box>
            {!loading ? <CarComponent car={car} days={days}/>  : null}
        </>
    )
};

export {RentCarComponent};
