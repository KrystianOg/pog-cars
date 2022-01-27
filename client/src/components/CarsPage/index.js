import React from 'react';
import Car from '../../models/car'
import { CarComponent } from './CarComponent';
import './CarComponent.css'

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
    return (
        <div className="offers">
            {/* automatyzacja tego */}
            <CarComponent carComponent = {car, 5}/>
        </div>
    )
};

export {CarsContainer}
