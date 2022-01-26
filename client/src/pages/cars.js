import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';
import { Helmet } from 'react-helmet'
import { CarsContainer } from '../components/CarsPage/index';

const Cars = () => {
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
            <CarsContainer/>
        </>
    )
};

export default Cars;
