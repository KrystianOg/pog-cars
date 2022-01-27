import React from 'react';
import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'
import Car from '../../models/car'
import './CarComponent.css'
import carPng from '../../images/cars/mustang.png';
import { Button, ButtonLink} from './CarComponents'

const CarComponent = (c, days) => {

    let d =6;

    return (
        <div className="car-container">
            <div className="image">
                {/* tutaj zaimportowane zdjęcie */}\
                <img src={carPng} alt="car"/>
            </div>
            <div className="car-info">
                <div className="car-header">
                    <h3>{c.make} {c.model}</h3>
                    <h5>Rok produkcji: {c.year}</h5>
                </div>

                <span>
                    <span content="Skrzynia biegów" tabIndex="1">
                        {/* some icon */}
                        <FaCogs/>
                        {/* and description */}
                        {c.transmission === "manual" ? "M" : "A"}
                    </span>

                    <span content="Ilość miejsc" tabIndex="2">
                        {/* some icon */}

                        {/* and description */}
                        Seats: {c.seats}
                    </span>
                    <span content="Średnie spalanie" tabIndex="3">
                        {/* some icon */}
                        <FaGasPump/>
                        {/* and description */}
                        [l/100km]: {c.fuelConsumption}
                    </span>
                    <span content="Napęd" tabIndex="4">
                        {/* some icon */}

                        {/* and description */}
                        Napęd: {c.drivetrain}
                    </span>
                </span>

                <div className="options">
                    <span tabindex="5">
                        <FaCheck/>Bezpłatne odwołanie rezerwacji
                    </span>
                    <span tabindex="6">
                        <FaCheck/>Bez limitu km
                    </span>
                </div>

                <div className="price">
                    <h1>{c.price/30*d} PLN</h1>
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
