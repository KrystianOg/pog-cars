import React from 'react';
import { CarComponent } from './CarComponent';
import './CarComponent.css'

const CarsContainer = () => {
    return (
        <div className="offers">
            {/* automatyzacja tego */}
            <CarComponent/>
            <CarComponent/>
            <CarComponent/>
            <CarComponent/>
            <CarComponent/>
        </div>
    )
};

export {CarsContainer}
