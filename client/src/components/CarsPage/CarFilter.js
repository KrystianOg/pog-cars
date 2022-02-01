import React, { useEffect , useState} from 'react';
import useCarFilterForm from './useCarFilterForm';
import validateInfo from './validateInfo';
import './CarComponent.css'
import {Button} from '@mui/material';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom'
import {makeStyles} from '@mui/styles'
import { TextField, MenuItem,  Box} from '@mui/material';
import {FilterContainer, FilterWrapper} from './CarComponents'

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: '5px auto',
        width: '140px'
    }
});

const CarFilter = ({submit}) => {
    const {handleChange,values,handleSubmit,errors} = useCarFilterForm(submit, validateInfo);

    const navigate = useNavigate();
    //dodać stylowanie przyciskow
    const classes = useStyles();

    return (
        <FilterWrapper>
            <FilterContainer>
                <Box sx={{display: 'grid', gap: 1, gridTemplateColumns: 'repeat(5,1fr)'}}>

                    <TextField style={{width: '130px', margin: '8px auto'}} label="Marka" variant="standard" onChange={(e) => handleChange('make',e.target.value)}/>
                    <TextField style={{width: '130px', margin: '8px auto'}} label="Cena max" variant="standard" onChange={(e) => handleChange('price_max',parseFloat(!isNaN(e.target.value) ? e.target.value : ""))}/>
                    <TextField style={{width: '130px', margin: '8px auto'}} label="Rok max" variant="standard" onChange={(e) => handleChange('year_max',parseFloat(!isNaN(e.target.value) ? e.target.value : ""))}/>
                    <TextField style={{width: '130px', margin: '8px auto'}} label="Moc max [KM]" variant="standard" onChange={(e) => handleChange('horsepower_max',parseFloat(!isNaN(e.target.value) ? e.target.value : ""))}/>


                    <Button className={classes.root} onClick={handleSubmit}>SUBMIT</Button>
                    
                    <TextField style={{width: '130px', margin: '8px auto'}} label="Model" variant="standard" onChange={(e) => handleChange('model',e.target.value)}/>
                    <TextField style={{width: '130px', margin: '8px auto'}} label="Cena min" variant="standard" onChange={(e) => handleChange('price_min',parseFloat(!isNaN(e.target.value) ? e.target.value : ""))}/>
                    <TextField style={{width: '130px', margin: '8px auto'}} label="Rok min" variant="standard" onChange={(e) => handleChange('year_min',parseFloat(!isNaN(e.target.value) ? e.target.value : ""))}/>
                    <TextField style={{width: '130px', margin: '8px auto'}} label="Moc min [KM]" variant="standard" onChange={(e) => handleChange('horsepower_min',parseFloat(!isNaN(e.target.value) ? e.target.value : ""))}/>

                    { ReactSession.get('type') === 'ADMIN' || ReactSession.get('type') === 'AGENT' ? 
                    <Button className={classes.root} onClick={()=>{ navigate('/cars/add', {replace: true})}}>ADD CAR</Button>
                    : null }
                </Box>
            </FilterContainer>
        </FilterWrapper>
    )
};

export {CarFilter};
