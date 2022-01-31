import React from 'react';
import useCarFilterForm from './useCarFilterForm';
import validateInfo from './validateInfo';
import './CarComponent.css'
import {Button as MButton} from '@mui/material';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom'
import {makeStyles} from '@mui/styles'

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
        <form className="filter-form def-box" onSubmit={handleSubmit}>
            <div className="car-form-inputs">
                <label htmlFor="make" className="form-label">Car make</label>
                <input id="make" type="text" name="make" className="form-input" placeholder="Enter make" value={values.make} onChange={handleChange}/> 
                {/* albo pobrac marki jakie posiadamy */}
                {errors.make && <p>{errors.make}</p>}
            </div>

            <div className="car-form-inputs">
                <label htmlFor="price" className="form-label">Price</label>
                <input id="price_min" type="text" name="price_min" className="form-input" placeholder="from" value={values.price_min} onChange={handleChange}/> 
                <input id="price_max" type="text" name="price_max" className="form-input" placeholder="to" value={values.price_max} onChange={handleChange}/> 
                {errors.price && <p>{errors.price}</p>}
            </div>

            <div className="car-form-inputs">
                <label htmlFor="hp" className="form-label">Horse power</label>
                <input id="horsepower_min" type="text" name="horsepower_min" className="form-input" placeholder="from" vlaue={values.horsepower_min} onChange={handleChange}/> 
                <input id="horsepower_max" type="text" name="horsepower_max" className="form-input" placeholder="to" value={values.horsepower_max} onChange={handleChange}/> 
                {errors.hp && <p>{errors.hp}</p>}
            </div>

            <div className="car-form-inputs">
                <label htmlFor="yp" className="form-label">Year </label>
                <input id="year_min" type="text" name="year_min" className="form-input" placeholder="from" value={values.year_min} onChange={handleChange}/> 
                <input id="year_max" type="text" name="year_max" className="form-input" placeholder="to" value={values.year_max} onChange={handleChange}/> 
                {errors.year && <p>{errors.year}</p>}
            </div>

            <div className="car-form-inputs">
                <MButton variant="outlined" className={classes.root} onClick={handleSubmit}>SUBMIT</MButton>
                
                { ReactSession.get('type') === 'ADMIN' || ReactSession.get('type') === 'AGENT' ? 
                <MButton variant="outlined" className={classes.root} onClick={()=>{ navigate('/cars/add', {replace: true})}}>ADD CAR</MButton>
                : null }
            </div>

        </form>
    )
};

export {CarFilter};
