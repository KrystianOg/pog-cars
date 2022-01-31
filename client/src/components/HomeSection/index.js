import React from 'react';
import {HomeContainer, SectionContent, PickUpLocation, H1} from './HomeElements';
import pogCar from '../../images/pog-cars-1.svg';
import './Home.css'

const HomeSection = () => {
    //load cities from db

    return (
        <HomeContainer>

            <H1>Wypożyczalnia samochodów</H1>

            <div className="cat">
                {/* tutaj zaimportowane zdjęcie */}
                <img src={pogCar} className="image"/>
            </div>

            {/*Tutaj element z jakimś wybieraniem miasta i datą -> dalej przechodzi do przefiltrowanych samochodow*/}
            <SectionContent>
                <PickUpLocation>
                    
                </PickUpLocation>
            </SectionContent>
        </HomeContainer>
    );
};

export default HomeSection;
