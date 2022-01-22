import React, {useState} from 'react';
import FormLogin from '../components/Login/FormLogin';
import FormSuccess from '../components/Login/FormSuccess';
import '../components/Login/LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import pogCars1 from '../images/pog-cars-1-white.svg';

const Login = () => {
    //something here
    const  [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm(){
        setIsSubmitted(true)
    }

    return (
        <>
            <div className="form-container">
                <span className="close-btn">
                    <FontAwesomeIcon icon={faTimes} />
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
