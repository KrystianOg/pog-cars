import React, {useState} from 'react';
import Sidebar from '../../components/Sidebar/index';
import Navbar from '../../components/Navbar/index';
import { Helmet } from 'react-helmet'
import AddCarComponent from '../../components/CarsPage/addCarPage/index'

const AddCar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>  
            <Helmet>
                <title>PogCars | Add car</title>
                <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16"/>
            </Helmet>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>

            <AddCarComponent/>
        </>
    )
};

export default AddCar;
