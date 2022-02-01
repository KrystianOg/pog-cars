import React, {useState,useEffect} from 'react';
import {CarComponent} from '../CarComponent'
import {AddCarContainer, AddCarColumn} from './AddCarComponents'
import {CarImage} from '../CarComponents'
import { useNavigate } from 'react-router-dom'
import carPng from '../../../images/cars/mustang.png';
import '../CarComponent.css'

import { ReactSession } from 'react-client-session';
import {Button, TextField, MenuItem, Box} from '@mui/material';
import { makeStyles } from '@mui/styles'
import {GLOBAL} from '../../../config'

const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 10,
        width: '200px',
        margin: '5px 10px'
    },
    btn: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 10,
        color: 'white',
        height: 48,
        width: 140,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        padding: '0 30px',
        margin: '10px'
    }
});

const AddCarComponent = () => {

    const navigate = useNavigate()

    const [prevCar, setPrevCar] = useState({
        deleted: 0,
        avg_rating: 5,
        make: '',
        model: '',
        mileage: 1,
        year: '',
        transmission: '',
        seats: '',
        fuel_consumption: '',
        horsepower: '',
        fuel: '',
        drivetrain: '',
        price: 0,
        agency_id: 1
    })

    const handleChange = (field, value) =>{
        setPrevCar(prevState =>({
            ...prevState,
            [field]: value
        }))
    }

    function addCar() {
        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/cars/add`,{
            method: 'POST',
            'headers': {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "no-cors"
            }, 
            "body": JSON.stringify({ 'car': prevCar, 'user_id': ReactSession.get('user_id') })
        })
        .then(async response =>{
            //let [user_id,type]= await response.data
            if(response.status === 201){
                navigate('/cars', {replace: true})
                console.log(response)
            } else {
                console.log(response)
            }
        }).catch(err=> console.log(err))


    }

    const classes = useStyles();
    return (
        <AddCarContainer>
            <AddCarColumn>
            {/*dodawanie samochodu*/}
                
                <div className="car-container">

                {/* tutaj zaimportowane zdjęcie */}
                <CarImage src = {carPng} alt="car"/>

                    <div className="car-info">

                    <Box sx={{display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2,1fr)'}}>
                        <TextField variant="standard" label="marka" id="fullwidth" className={classes.root} onChange={(e) =>{handleChange('make',e.target.value)}}/>
                        <TextField variant="standard" label="model" id="fullwidth" className={classes.root} onChange={(e) =>{handleChange('model',e.target.value)}}/>
                        <TextField variant="standard" label="rok produkcji" id="fullwidth" className={classes.root} onChange={(e) =>{handleChange('year',parseInt(e.target.value))}}/>
                        <TextField variant="standard" select label="skrzynia biegow" id="fullwidth" className={classes.root} onChange={(e) =>{handleChange('transmission',e.target.value)}}>
                            <MenuItem key={'manual'} value={'manual'}>manual</MenuItem>
                            <MenuItem key={'automatic'} value={'automatic'}>automatic</MenuItem>
                        </TextField>

                        <TextField variant="standard" select label="ilość siedzeń" id="fullwidth" className={classes.root} onChange={(e) =>{handleChange('seats',parseInt(e.target.value))}}>
                            <MenuItem key={'1'} value={'1'}>1</MenuItem>
                            <MenuItem key={'2'} value={'2'}>2</MenuItem>
                            <MenuItem key={'3'} value={'3'}>3</MenuItem>
                            <MenuItem key={'4'} value={'4'}>4</MenuItem>
                            <MenuItem key={'5'} value={'5'}>5</MenuItem>
                            <MenuItem key={'6'} value={'6'}>6</MenuItem>
                            <MenuItem key={'7'} value={'7'}>7</MenuItem>
                        </TextField>

                        <TextField variant="standard" select label="Rodzaj paliwa" id="fullwidth" className={classes.root} onChange={(e) =>{handleChange('fuel',e.target.value)}}>
                            <MenuItem key={'PB'} value={'PB'}>PB</MenuItem>
                            <MenuItem key={'ON'} value={'ON'}>ON</MenuItem>
                        </TextField>

                        <TextField variant="standard" label="spalanie [l/100km]" id="fullwidth" className={classes.root} onChange={(e) =>{handleChange('fuel_consumption',parseFloat(e.target.value))}}/>

                        <TextField variant="standard" label="Moc [KM]" id="fullwidth" className={classes.root} onChange={(e) =>{handleChange('horsepower',parseInt(e.target.value))}}/>

                        <TextField variant="standard" label="przebieg" id="fullwidth" className={classes.root} onChange={(e) =>{handleChange('mileage',parseInt(e.target.value))}}/>

                        <TextField variant="standard" select label="napęd" id="fullwidth" className={classes.root} onChange={(e) =>{handleChange('drivetrain',e.target.value)}}>
                            <MenuItem key={'FWD'} value={'FWD'}>FWD</MenuItem>
                            <MenuItem key={'AWD'} value={'AWD'}>AWD</MenuItem>
                            <MenuItem key={'RWD'} value={'RWD'}>RWD</MenuItem>
                        </TextField>

                        <TextField variant="standard" label="cena [PLN]" id="fullwidth" className={classes.root} onChange={(e) =>{handleChange('price',parseInt(e.target.value))}}/>
                        <TextField variant="standard" label="Id agencji" id="fullwidth" className={classes.root} onChange={(e) =>{handleChange('agency_id',parseInt(e.target.value))}}/>
                    </Box>
                    </div>
                    <Button variant="outlined" sx={{margin: '10px'}} className={classes.btn} onClick={addCar}>Add car</Button>
                </div>

            </AddCarColumn>
            {/*preview*/}
            {
            <AddCarColumn disabled={true} focusable={false}>
                <CarComponent car={prevCar} />
            </AddCarColumn>
            }
        </AddCarContainer>
    );
};

export default AddCarComponent;
