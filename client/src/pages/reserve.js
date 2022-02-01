import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';
import { Helmet } from 'react-helmet'
import { ReserveContainer } from '../components/AccountsPage/ReservePage/index';
import Footer from '../components/Footer';

const Reserve = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Helmet>
                <title>PogCars | Reserve</title>
                <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16"/>
            </Helmet>
            
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <ReserveContainer/>
            <Footer toggle ={toggle}/>
        </>
    )
};

export default Reserve;
