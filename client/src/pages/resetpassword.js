import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';
import { Helmet } from 'react-helmet'
import { ResetpasswordContainer } from '../components/AccountsPage/ResetpasswordPage/index';
import Footer from '../components/Footer';

const Resetpassword = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Helmet>
                <title>PogCars | Resetpassword</title>
                <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16"/>
            </Helmet>
            
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <ResetpasswordContainer/>
            <Footer toggle ={toggle}/>
        </>
    )
};

export default Resetpassword;
