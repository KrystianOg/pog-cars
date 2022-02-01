import React, {useEffect, useState} from 'react';
import Sidebar from '../../components/Sidebar/index';
import Navbar from '../../components/Navbar/index';
import { Helmet } from 'react-helmet'
//import {useParams} from 'react-router-dom'
//import {GLOBAL} from '../../config'
import {RentCarComponent} from '../../components/CarsPage/rentCarPage/index'
import Footer from '../../components/Footer';

const RentCar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Helmet>
                <title>PogCars | Cars</title>
                <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16"/>
            </Helmet>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <RentCarComponent/>
            <Footer toggle ={toggle}/>
        </>
    );
};

export {RentCar};
