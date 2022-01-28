import React, {useState} from 'react';
import FormSignup from '../components/Signup/FormSignup';
import FormSuccess from '../components/Signup/FormSuccess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../components/Signup/SignupForm.css';
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import pogCars1 from '../images/pog-cars-1-white.svg';
import {GLOBAL} from '../config'

const Register = () => {
    const  [isSubmitted, setIsSubmitted] = useState(false)
    const navigate = useNavigate()

    function submitForm (credentials) {

        //call to api
        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/auth/register`,{
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "no-cors"
            },
            "body": JSON.stringify(credentials)
        })
        .then(async response =>{
            //let [user_id,type]= await response.data
            if(response.status === 201){
                setIsSubmitted(true)
                navigate('/login', {replace: true})
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <Helmet>
                <title>PogCars | Register</title>
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
                {!isSubmitted ? <FormSignup submitForm={submitForm}/> : <FormSuccess/>}
            </div>
        </>
    )
};

export default Register;