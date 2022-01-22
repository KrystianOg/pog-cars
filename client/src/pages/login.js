import React, {useState} from 'react';
import FormLogin from '../components/Login/FormLogin';
import FormSuccess from '../components/Login/FormSuccess';
import '../components/Login/LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import pogCars1 from '../images/pog-cars-1-white.svg';
import Spinner from 'react-bootstrap/Spinner'
import { Helmet } from 'react-helmet'

const Login = () => {
    //something here
    const  [isSubmitted, setIsSubmitted] = useState(false)
    //const [isLoading, setIsLoading] = useState(true)

    function submitForm(){
        setIsSubmitted(true)
    }

    return (
        <>
            <Helmet>
                <title>PogCars | Login</title>
                <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16"/>
            </Helmet>
            <div className="form-container">
                <span className="close-btn">
                    <a href="/">
                        <FontAwesomeIcon icon={faTimes} />
                    </a>
                </span>
                <div className="form-content-left">
                    <img src={pogCars1} alt="car" className="form-img"/>
                </div>
                {!isSubmitted ? <FormLogin submitForm={submitForm}/> : <FormSuccess/>}
            </div>
        </>
    );
};

export default Login;
