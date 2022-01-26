import React from 'react';
import {HomeContainer, SectionContent, PickUpLocation, H1} from './HomeElements';
import './Home.css'

const HomeSection = () => {
    //load cities from db

    return (
        <HomeContainer>

            <H1>Wypożyczalnia samochodów PogCars</H1>
            {/*Tutaj element z jakimś wybieraniem miasta i datą -> dalej przechodzi do przefiltrowanych samochodow*/}
            <SectionContent>
                <PickUpLocation>
                    
                </PickUpLocation>
            </SectionContent>
        </HomeContainer>
    );
};

export default HomeSection;
