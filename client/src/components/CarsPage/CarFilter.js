import React from 'react';
import useCarFilterForm from './useCarFilterForm';
import validateInfo from './validateInfo';
import './CarComponent.css'


const CarFilter = ({submit}) => {
    const {handleChange,values,handleSubmit,errors} = useCarFilterForm(submit, validateInfo);

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

            <button className="form-input-btn submit-small" type="submit">
                    Submit
            </button>
        </form>
    )
};

export {CarFilter};
