import React from 'react';
import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'
import './CarComponent.css'
import carPng from '../../images/cars/mustang.png';
import { Button, ButtonLink} from './CarComponents'

const CarComponent = ({car}) => {

    //let c = new Car(12000, 200, 5, 'manual', 'AWD', 'PB', 10, 3200, 1, 2019, 0, 'A4', 'Audi');

    //obliczyć tutaj cenę za okres
    let d =6;

    return (
        <div className="car-container">
            <div className="image">
                {/* tutaj zaimportowane zdjęcie */}
                <img src={carPng} alt="car"/>
            </div>
            <div className="car-info">
                <div className="car-header">
                    <h3>{car.make} {car.model}</h3>
                    <h5>Rok produkcji: {car.year}</h5>
                </div>

                <span>
                    <span content="Skrzynia biegów" >
                        {/* some icon */}
                        <FaCogs/>
                        {/* and description */}
                        {car.transmission === "manual" ? "M" : "A"}
                    </span>

                    <span content="Ilość miejsc" >
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
                    <span >
                        <FaCheck/>Bezpłatne odwołanie rezerwacji
                    </span>
                    <span >
                        <FaCheck/>Bez limitu km
                    </span>
                </div>

                <div className="price">
                    <h1>{car.price/30*d} PLN</h1>
                    <h3> cena za {d} dni</h3>
                    <h5>Opłata przygotowawcza +29 PLN</h5>
                    <h5>Wydanie pojazdu poza godzinami pracy +39 PLN</h5>
                </div>
            </div>

            {/* zrobić ładniejszy troche ten przycisk */}
            <Button>
                <ButtonLink to='/rezerwuj'>ZAREZERWUJ TERAZ</ButtonLink>
            </Button>
        </div>
    )
};

export {CarComponent}
